import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from '../utils';
//Screens
import Example from '../Screens/Example';
import Login from '../Screens/Login';
import OTP from '../Screens/OTP';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Settings from '../Screens/Settings';
import Profile from '../Screens/Profile';
import MyBooking from '../Screens/MyBooking';
import Feedback from '../Screens/Feedback';
import FAQs from '../Screens/FAQs';
import EntryType from '../Screens/EntryType';
import Brands from '../Screens/Brands';
import BarlistScreen from '../Screens/BarlistScreen';
import BarDetails from '../Screens/BarDetails';
import OrderScreen from '../Screens/OrderScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export function AppHome() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        style: { height: 50, zIndex: 1000, backgroundColor: '#000' },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Images.home} style={{ width: 25, height: 25 }} />;
            } else if (focused == false) {
              return <Image source={Images.home} style={{ width: 25, height: 25 }} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Images.search} style={{ width: 23, height: 23 }} />;
            } else if (focused == false) {
              return <Image source={Images.search} style={{ width: 23, height: 23 }} />;;
            }
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Images.setting} style={{ width: 25, height: 25 }} />;
            } else if (focused == false) {
              return <Image source={Images.setting} style={{ width: 25, height: 25 }} />;
            }
          },
        }}
      />
      {/* <Tab.Screen
        name="Example"
        component={Example}
        options={{
          tabBarLabel: 'Example',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Images.homeIcon} />;
            } else if (focused == false) {
              return <Image source={Images.homeIcon2} />;
            }
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="AppHome" component={AppHome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MyBooking" component={MyBooking} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="FAQs" component={FAQs} />
        <Stack.Screen name="Brands" component={Brands} />
        <Stack.Screen name="BarlistScreen" component={BarlistScreen} />
        <Stack.Screen name="EntryType" component={EntryType} />
        <Stack.Screen name="BarDetails" component={BarDetails} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
