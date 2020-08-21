import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator
            tabBarOptions = {{
                activeTintColor: '#157cdb',
                inactiveTintColor: '#262626'
            }}
        >
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="home" size={28} color={color}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="Notification"
                component={NotificationScreen}
                options={{
                    tabBarLabel: 'Thông Báo',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="notifications" size={28} color={color}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Cá Nhân',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="person" size={28} color={color}/>
                    ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
