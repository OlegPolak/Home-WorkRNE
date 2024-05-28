import {View, Text, Image, StyleSheet} from 'react-native';
import Svg from 'react-native-svg';

const StatsItem = ({statsAll, statsDay, terms}) => {
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
    <View>
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
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        alignItems: 'center', 
    },
    statsImage: {
        height: 100,
        width: 100,
        marginRight: 20,
        marginLeft: 20,
    },
    statsNum: {
        display: "flex",
        flexDirection: 'row',
        gap: 10,
        alignItems: "center",
    },
    statsAll: {
        fontSize: 25,
        fontWeight: '700',
    },
    statsDay: {
        fontSize: 20,
        fontWeight: '500',
    },
    statsText: {
        fontSize: 18, 
        width: 250,
    },
    
});

export default StatsItem;