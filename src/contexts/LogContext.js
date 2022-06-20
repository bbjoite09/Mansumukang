import React, {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect,
} from 'react';
import {customAlphabet} from 'nanoid/non-secure';

import logsStorage from '../storages/logsStorage';

const LogContext = createContext(null);

export function LogContextProvider({children}) {
  const initialLogsRef = useRef(null);
  const [logs, setLogs] = useState([]);
  const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  const onCreate = ({title, body, date}) => {
    const log = {
      id: nanoid,
      title,
      body,
      date,
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

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export function useLog() {
  const log = useContext(LogContext);

  if (!log) {
    throw new Error('LogContextProvider is not used');
  }

  return log;
}

export default LogContext;
