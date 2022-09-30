import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);
  //원래 프로바이더의 value 속성의 값을 공유하는데, 이 값이 객체로 전달되었기 때문에 다른 컴포넌트에서 사용할 때도, 객체로 받아야한다.
  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
