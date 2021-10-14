import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
///fica por volta das navegações
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const icons = {
  Home: {
    name: 'ios-home',
  },
  Sobre: {
    name: 'ios-people',
  },
  Contato: {
    name: 'ios-call',
  },
};

function Tabs() {
  return (
    
      <Tab.Navigator
        
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const {name} = icons[route.name];
            return <Ionicons name={name} color={color} size={size} />;
          },
          
          tabBarItemStyle: {
            backgroundColor: "#121212"
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'gray',
        })} >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
    
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Tabs} options={{headerShown: false}} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
