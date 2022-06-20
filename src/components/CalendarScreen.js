import React, {useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import {format} from 'date-fns';

import CalendarView from '../components/CalendarView';
import {useLog} from '../contexts/LogContext';
import FeedList from '../components/FeedList';

function CalendarScreen() {
  const {logs} = useLog();
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

const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});

export default CalendarScreen;
