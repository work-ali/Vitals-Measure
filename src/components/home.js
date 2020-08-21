import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import HeaderComponent from './header';
import CalenderComponent from './calender';
import VitalsComponent from './vitals';
import {withNavigation} from 'react-navigation';
import measure from '../assets/images/measure.png';

const HomeComponent = ({navigation}) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.bodyStyling}>
        <HeaderComponent />
        <CalenderComponent />
        <VitalsComponent />
        <View style={[styles.VitalsDiv, styles.measure]}>
          <TouchableOpacity
            style={styles.circleGradient}
            onPress={() => {
              navigation.navigate('Measure');
            }}>
            <Image style={styles.visit} source={measure}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  measure: {
    position: 'relative',
  },
  floatingPic: {
    opacity: 0,
  },
  circleGradient: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    position: 'absolute',
    zIndex: 999,
    bottom: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 999999,
    display: 'flex',
    right: 50,
    width: 70,
    height: 70,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    width: 70,
    height: 70,
  },
});

export default withNavigation(HomeComponent);
