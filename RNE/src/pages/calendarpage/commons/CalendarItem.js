import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../../redux/dateSlice';

const CalendarItem = () => {
  const [selected, setSelected] = useState('');
  
  const dispatch = useDispatch();
  const setDate = day => {
    setSelected(day.dateString);
     dispatch(changeDate(day.dateString));
  } 

    return (
    <SafeAreaView style={styles.calendarBlock}>
       <View style={styles.calendar}>
          <Calendar
      onDayPress={day => {
        // setSelected(day.dateString);
        setDate(day)
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
       </View>
    </SafeAreaView>
  )
}

export default CalendarItem

const styles = StyleSheet.create({
    calendarBlock: {
        padding: 5,
        display: 'flex',
        marginBottom: 110,
    },
    calendarDay: {
        fontSize: 24,
        color: "white",
        fontWeight: '500',
        padding: 10,
        textAlign: 'center',
    },
    calendar: {
        height: 250,
        backgroundColor: 'white',
    },
})