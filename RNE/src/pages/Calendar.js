import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalendarItem from '../commons/CalendarItem';

const Calendar = () => {
    return (
      <SafeAreaView>
    <LinearGradient
      colors={['#0057b8', '#fff', '#FFD600']}
      start={{ x: 0.0, y: 0.3 }}
      end={{ x: 0.7, y: 1.0 }}
      locations={[0, 0.45, 0.75]}
      style={styles.linearGradient}>
      <View style={styles.calendar}>
            <CalendarItem/>
      </View>
      </LinearGradient> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 15,
  },
});

export default Calendar