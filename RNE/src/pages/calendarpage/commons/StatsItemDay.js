import {View, Text, Image, StyleSheet} from 'react-native';
import Svg from 'react-native-svg';

const StatsItemDay = ({statsAll, statsDay, terms}) => {
  return (
   <View style={styles.statsBlock}>
          {/* <Image
              source={require('../../../images/helmet.png')}
              defaultSource={require('../../../images/helmet.png')}
              style={styles.statsImage}
          />   */}
          <Svg
              width={100}
              height={50}
              uri={terms.icon}
          ></Svg>
    <View style={styles.statsInfo}>
        <View style={styles.statsNum}>
           <Text style={styles.statsAll}>{statsAll}</Text>
           <Text style={styles.statsDay}>(+{statsDay})</Text> 
        </View>
              <Text style={styles.statsText}>{terms.title}</Text>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
    statsBlock: {
        display: 'flex',
        marginTop: 5,
        padding: 5,
        borderWidth: 1,
        alignItems: 'center', 
        width: 200,
        height: 120,
        flex: 1,
        marginLeft: 5,
    },
    statsImage: {
        height: 40,
        width: 35,
        marginRight: 20,
        marginLeft: 20,
    },
    statsInfo: {
        flex: 1,
        textAlign: 'center',
    },
    statsNum: {
        display: "flex",
        flexDirection: 'row',
        gap: 10,
        alignItems: "center",
    },
    statsAll: {
        fontSize: 15,
        fontWeight: '700',
    },
    statsDay: {
        fontSize: 13,
        fontWeight: '500',
    },
    statsText: {
        fontSize: 13, 

    },
    
});

export default StatsItemDay;