import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import StatsItemDay from './StatsItemDay'
import { dateInfo, statistics, terms } from '../../apipage/Api';

// const stats ={
//   "message": "The data were fetched successfully.",
//   "data": {
//     "date": "2022-04-14",
//     "day": 50,
//     "resource": "https://www.facebook.com/MinistryofDefence.UA/posts/295952562717203",
//     "war_status": {
//       "code": 1,
//       "alias": "in_progress"
//     },
//     "stats": {
//       "personnel_units": 19900,
//       "tanks": 753,
//       "armoured_fighting_vehicles": 1968,
//       "artillery_systems": 366,
//       "mlrs": 122,
//       "aa_warfare_systems": 64,
//       "planes": 160,
//       "helicopters": 144,
//       "vehicles_fuel_tanks": 1437,
//       "warships_cutters": 7,
//       "cruise_missiles": 0,
//       "uav_systems": 134,
//       "special_military_equip": 25,
//       "atgm_srbm_systems": 4,
//       "submarines": 0
//     },
//     "increase": {
//       "personnel_units": 100,
//       "tanks": 14,
//       "armoured_fighting_vehicles": 4,
//       "artillery_systems": 8,
//       "mlrs": 7,
//       "aa_warfare_systems": 0,
//       "planes": 2,
//       "helicopters": 1,
//       "vehicles_fuel_tanks": 8,
//       "warships_cutters": 0,
//       "cruise_missiles": 0,
//       "uav_systems": 2,
//       "special_military_equip": 0,
//       "atgm_srbm_systems": 0,
//       "submarines": 0
//     }
//   }
// }

// const terms = {
//   "message": "The data were fetched successfully.",
//   "data": {
//     "personnel_units": {
//       "title": "Personnel units",
//       "icon": "https://russianwarship.rip/images/icons/icon-people.svg"
//     },
//     "tanks": {
//       "title": "Tanks",
//       "icon": "https://russianwarship.rip/images/icons/icon-tank.svg"
//     },
//     "armoured_fighting_vehicles": {
//       "title": "Armoured fighting vehicles",
//       "icon": "https://russianwarship.rip/images/icons/icon-bbm.svg"
//     },
//     "artillery_systems": {
//       "title": "Artillery systems",
//       "icon": "https://russianwarship.rip/images/icons/icon-art.svg"
//     },
//     "mlrs": {
//       "title": "Multiple Launch Rocket System",
//       "icon": "https://russianwarship.rip/images/icons/icon-rszv.svg"
//     },
//     "aa_warfare_systems": {
//       "title": "Anti-aircraft warfare systems",
//       "icon": "https://russianwarship.rip/images/icons/icon-ppo.svg"
//     },
//     "planes": {
//       "title": "Planes",
//       "icon": "https://russianwarship.rip/images/icons/icon-plane.svg"
//     },
//     "helicopters": {
//       "title": "Helicopters",
//       "icon": "https://russianwarship.rip/images/icons/icon-helicopter.svg"
//     },
//     "vehicles_fuel_tanks": {
//       "title": "Vehicles and fuel tanks",
//       "icon": "https://russianwarship.rip/images/icons/icon-auto.svg"
//     },
//     "warships_cutters": {
//       "title": "Warships and cutters",
//       "icon": "https://russianwarship.rip/images/icons/icon-ship.svg"
//     },
//     "cruise_missiles": {
//       "title": "Cruise missiles",
//       "icon": "https://russianwarship.rip/images/icons/icon-rocket.svg"
//     },
//     "uav_systems": {
//       "title": "Unmanned aerial vehicle systems",
//       "icon": "https://russianwarship.rip/images/icons/icon-bpla.svg"
//     },
//     "special_military_equip": {
//       "title": "Special military equipment",
//       "icon": "https://russianwarship.rip/images/icons/icon-special.svg"
//     },
//     "atgm_srbm_systems": {
//       "title": "Anti-tank guided missile and short-range ballistic missile systems",
//       "icon": "https://russianwarship.rip/images/icons/icon-trk.svg"
//     },
//     "submarines": {
//       "title": "Submarines",
//       "icon": "https://russianwarship.rip/images/icons/icon-submarine.svg"
//     }
//   }
// }


const DataInfo = () => {
    const test = useSelector(state => state.date);
    console.log('test', test);

  const [statisticsInfo, setStatisticsInfo] = useState([]);
  // const [dateInfoWar, setDateInfoWar] = useState([]);
  const [termsInfo, setTermsInfo] = useState([]);

   useEffect(() => {
    getInfo();
  },[]);

  const getInfo = async () => {
    const statisticsInfo = await statistics();
    setStatisticsInfo(statisticsInfo);
    // const dateInfoWar = await dateInfo();
    // setDateInfoWar(dateInfoWar);
    const termsInfo = await terms();
    setTermsInfo(termsInfo);
    
  };

  return (
      <View style={styles.dayInfoBlock}>
          <Text>{test}</Text>
           <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.personnel_units}
              statsDay={statisticsInfo?.data?.increase?.personnel_units}
              termsTitle={termsInfo?.data?.personnel_units.title}
              termsIcon={termsInfo?.data?.personnel_units.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.tanks}
              statsDay={statisticsInfo?.data?.increase?.tanks}
              termsTitle={termsInfo?.data?.tanks.title}
              termsIcon={termsInfo?.data?.tanks.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.armoured_fighting_vehicles}
              statsDay={statisticsInfo?.data?.increase?.armoured_fighting_vehicles}
              termsTitle={termsInfo?.data?.armoured_fighting_vehicles.title}
              termsIcon={termsInfo?.data?.armoured_fighting_vehicles.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.artillery_systems}
              statsDay={statisticsInfo?.data?.increase?.artillery_systems}
              termsTitle={termsInfo?.data?.artillery_systems.title}
              termsIcon={termsInfo?.data?.artillery_systems.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.mlrs}
              statsDay={statisticsInfo?.data?.increase?.mlrs}
              termsTitle={termsInfo?.data?.mlrs.title}
              termsIcon={termsInfo?.data?.mlrs.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.aa_warfare_systems}
              statsDay={statisticsInfo?.data?.increase?.aa_warfare_systems}
              termsTitle={termsInfo?.data?.aa_warfare_systems.title}
              termsIcon={termsInfo?.data?.aa_warfare_systems.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.planes}
              statsDay={statisticsInfo?.data?.increase?.planes}
              termsTitle={termsInfo?.data?.planes.title}
              termsIcon={termsInfo?.data?.planes.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.helicopters}
              statsDay={statisticsInfo?.data?.increase?.helicopters}
              termsTitle={termsInfo?.data?.helicopters.title}
              termsIcon={termsInfo?.data?.helicopters.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.vehicles_fuel_tanks}
              statsDay={statisticsInfo?.data?.increase?.vehicles_fuel_tanks}
              termsTitle={termsInfo?.data?.vehicles_fuel_tanks.title}
              termsIcon={termsInfo?.data?.vehicles_fuel_tanks.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.warships_cutters}
              statsDay={statisticsInfo?.data?.increase?.warships_cutters}
              termsTitle={termsInfo?.data?.warships_cutters.title}
              termsIcon={termsInfo?.data?.warships_cutters.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.cruise_missiles}
              statsDay={statisticsInfo?.data?.increase?.cruise_missiles}
              termsTitle={termsInfo?.data?.cruise_missiles.title}
              termsIcon={termsInfo?.data?.cruise_missiles.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.uav_systems}
              statsDay={statisticsInfo?.data?.increase?.uav_systems}
              termsTitle={termsInfo?.data?.uav_systems.title}
              termsIcon={termsInfo?.data?.uav_systems.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.special_military_equip}
              statsDay={statisticsInfo?.data?.increase?.special_military_equip}
              termsTitle={termsInfo?.data?.special_military_equip.title}
              termsIcon={termsInfo?.data?.special_military_equip.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.atgm_srbm_systems}
              statsDay={statisticsInfo?.data?.increase?.atgm_srbm_systems}
              termsTitle={termsInfo?.data?.atgm_srbm_systems.title}
              termsIcon={termsInfo?.data?.atgm_srbm_systems.title.icon}
          />      
          <StatsItemDay
              statsAll={statisticsInfo?.data?.stats?.submarines}
              statsDay={statisticsInfo?.data?.increase?.submarines}
              termsTitle={termsInfo?.data?.submarines.title}
              termsIcon={termsInfo?.data?.submarines.icon}
          /> 
   </View>
  );
}
 

const styles = StyleSheet.create({
    dayInfoBlock: {
        display: 'flex',
        // flexDirection: "row",
        flexWrap: 'wrap',
    }
})

export default DataInfo;