import {View, Text, StyleSheet} from 'react-native';


const Header = () => {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();
  const monthNames = ["Січень", "Лютий", "Березень",
    "Квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень",
    "Жовтень", "Листопад", "Грудень"];
  const nameMonth = monthNames[month];

  return (
 <View style={styles.header}>
       <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
        <Text style={styles.titleBig}>Загальні бойові втрати російського окупанта</Text>
          <View style={styles.blockData}>
               <Text style={styles.date}>{ day } { nameMonth }</Text>
               <Text style={styles.day}>817-й день війни </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    //    marginTop: 30,
    },
    blockData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
  title: {
    fontSize: 16,
    color: 'black',
  },
  titleBig: {
    fontSize: 30,
    color: 'black',
  },
  day: {
    fontSize: 25,
      color: '#FFD600',
    fontWeight: "500",
    },
   date: {
    fontSize: 18,
    color: 'black',
    },
});



export default Header;