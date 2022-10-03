import {format} from 'date-fns';
import React, {useContext, useState, useMemo} from 'react';
import CalendarView from '../components/CalendarView';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
function CalendarScreen() {
  const {logs} = useContext(LogContext);
  //acc에는 처음에는 리턴 뒤에 있는 빈배열이 들어간다.
  //그 다음 current에는 배열의 첫 번째 요소인 logs의 값이 들어간다.
  //logs의 값을 formattedDate에서 format(new Date(current.date),'yyyy-MM-dd')를 통해 포맷하고,
  //그 값을 acc배열에서 키값으로 찾은뒤, marked를 true로 바꾼다.
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {}),
    [logs],
  );
  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
}

export default CalendarScreen;
