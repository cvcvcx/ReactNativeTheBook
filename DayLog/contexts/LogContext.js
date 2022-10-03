import React, {useRef} from 'react';
import {createContext, useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import logsStorage from '../storages/logsStorage';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const initialLogsRef = useRef(null);
  const [logs, setLogs] = useState([]);
  //원래 프로바이더의 value 속성의 값을 공유하는데, 이 값이 객체로 전달되었기 때문에 다른 컴포넌트에서 사용할 때도, 객체로 받아야한다.
  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date: new Date().toISOString(),
    };
    setLogs([log, ...logs]);
  };
  const onModify = modified => {
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };
  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };
  //저장된 데이터를 불러와서 로그로 남기는 함수(AsyncStorage사용)
  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);
  //초기값과 비교해서 같은경우, useEffect내의 logStorage.set(logs)를 실행하지 않음(useRef사용)
  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
