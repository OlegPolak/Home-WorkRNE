import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CalendarItem = () => {
    return (
    <SafeAreaView style={styles.calendarBlock}>
        <Text style={styles.calendarDay}>8 червня</Text>
       <View style={styles.calendar}></View>
    </SafeAreaView>
  )
}

export default CalendarItem

const styles = StyleSheet.create({
    calendarBlock: {
        padding: 5,
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