import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
    <SafeAreaView style={styles.footer}>
        <Text style={styles.footerTitle}>Бажаєш збільшити статистику?</Text>
       <View style={styles.donate}>
          <FontAwesomeIcon icon={faArrowLeft} color={'black'} size={20} />
            <View style={styles.donateItem}>
                <FontAwesomeIcon icon={faHome} color={'black'} size={20} />
                <Text style={styles.donateName}>Повернись живим!</Text>
            </View>
          <FontAwesomeIcon icon={faArrowRight} color={'black'} size={20} />
       </View>
       <View style={styles.contacts}>
            <Text style={styles.footerName}>Kipishna Baba</Text>
            <FontAwesomeIcon icon={faHome} color={'black'} size={20} />
       </View>
       <View style={styles.contacts}>
            <Text style={styles.footerName}>Kipishna Baba</Text>
            <FontAwesomeIcon icon={faHome} color={'black'} size={20} />
       </View>
    </SafeAreaView>
  )
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        marginTop: -30,
    },
    footerTitle: {
        fontSize: 20,
        fontWeight: '500',
        padding: 10,
        textAlign: 'center',
    },
    donate: {
         display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    donateItem: {
         display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    donateName: {
        fontSize: 20,
        fontWeight: '500',
        padding: 10,
        textAlign: 'center',
    },
    contacts: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    footerName: {
        fontSize: 15,
        fontWeight: '500',
        padding: 10,
    }
})