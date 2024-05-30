import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import CalendarItem from './commons/CalendarItem';
import DataInfo from './commons/DataInfo';


const Calendar = () => {
    return (
      <ScrollView>
    <LinearGradient
      colors={['#0057b8', '#fff', '#FFD600']}
      start={{ x: 0.0, y: 0.3 }}
      end={{ x: 0.7, y: 1.0 }}
      locations={[0, 0.45, 0.75]}
      style={styles.linearGradient}>
          <CalendarItem />
          <DataInfo/>
      </LinearGradient> 
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 15,
  },
});

export default Calendar