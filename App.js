import React from 'react';
import {Image} from 'react-native';

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeComponent from './src/components/home';
import doctorComponent from './src/components/doctor';
import homeindexComponent from './src/components/index';
import VitalsComponent from './src/components/measures';

const HomeStack = createStackNavigator(
  {
    Home: {screen: homeindexComponent},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        boxShadow: 'none',
      },
      headerTitleStyle: {alignSelf: 'center'},
      headerTintColor: '#321d5e',
      title: 'Home',
    },
    headerStyle: {
      backgroundColor: '#fff',
    },
  },
);

const vitalStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {
      screen: HomeComponent,
      navigationOptions: {
        header: false,
      },
    },
    Measure: {screen: VitalsComponent},
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {alignSelf: 'center'},
      headerTintColor: '#321d5e',
      title: 'Vitals',
    },
  },
);

const DoctorStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    doctor: {screen: doctorComponent},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {alignSelf: 'center'},
      headerTintColor: '#321d5e',
      title: 'Doctor',
    },
  },
);

const App = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('./src/assets/images/home.png')}
            style={{
              width: 20,
              height: 20,
            }}></Image>
        ),
      }),
    },
    Vital: {
      screen: vitalStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('./src/assets/images/wifi.png')}
            style={{
              width: 18,
              height: 18,
            }}></Image>
        ),
        activeTintColor: '#321d5e',
      }),
    },
    Doctor: {
      screen: DoctorStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('./src/assets/images/doctor.png')}
            style={{
              width: 20,
              height: 20,
            }}></Image>
        ),
      }),
    },
  },
  {
    initialRouteName: 'Vital',
    tabBarOptions: {
      indicatorStyle: 'red',
      style: {
        borderTopColor: '#ccc',
        height: 65,
        paddingBottom: 15,
      },

      activeTintColor: '#321d5e',
      inactiveTintColor: 'gray',
      tabStyle: {
        padding: 20,
      },
      labelStyle: {
        marginTop: -10,
      },
      tabStyle: {},
    },
  },

  {},
);
export default createAppContainer(App);
