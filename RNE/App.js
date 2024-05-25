import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux';

import Home from './src/pages/Home';
import Calendar from './src/pages/Calendar';
import { store } from './src/redux/store';

const Tab = createBottomTabNavigator();


export default function Page() {
  return (
    <Provider store={store}>
     <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
        tabBarActiveTintColor: '#0057b8',
        headerShown: false, 
          tabBarStyle: {
            backgroundColor: '#FFD600',
        } 
      }}
      >
        <Tab.Screen name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (<FontAwesomeIcon icon={faHome} color={color} />) }}
          component={Home} />
        <Tab.Screen name="Calendar"
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color }) => (<FontAwesomeIcon icon={faCalendarDays} color={color} />) }}
          component={Calendar} />
        {/* Якщо у вас є інші вкладки, тут вказуйте їх */}
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}