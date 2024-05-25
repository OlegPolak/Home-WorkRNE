import React, {useEffect, useState} from 'react';
import { StyleSheet,  View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Stats from '../commons/Stats';
import Header from '../commons/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { addStats } from '../redux/statsSliсe';


const Home = () => {
    const dispatch = useDispatch();
    const test = 'test';

    useEffect(() => {
        dispatch(addStats(test));
    })


    return (
      <SafeAreaView>
    <LinearGradient
      colors={['#0057b8', '#fff', '#FFD600']}
      start={{ x: 0.0, y: 0.3 }}
      end={{ x: 0.7, y: 1.0 }}
      locations={[0, 0.45, 0.75]}
      style={styles.linearGradient}>
     <Header/>
     <Stats/>
      </LinearGradient> 
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 5,
  },
  header: {

  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  titleBig: {
    fontSize: 30,
    color: 'black',
  },
  date: {
    fontSize: 23,
    color: 'black',
  },
  day: {
    fontSize: 23,
    color: 'black',
  },
});

export default Home
