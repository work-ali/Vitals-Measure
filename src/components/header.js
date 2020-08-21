import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import hamburger from '../assets/images/hamburger.png';
import plusIcon from '../assets/images/plus.png';

const HeaderComponent = () => {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.headertop}>
        <Image style={styles.tinyLogo} source={hamburger} />
        <Text style={styles.brandName}>Vitals</Text>
        <Image style={styles.plusIcon} source={plusIcon} />
      </View>

      <View style={styles.headerText}>
        <Text style={styles.date}>JULY 30,2020</Text>
        <Text style={styles.feeling}>How are you felling today?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#3c2865',
    paddingTop: 15,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  headertop: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tinyLogo: {
    width: 25,
    height: 18,
  },
  plusIcon: {
    width: 17,
    height: 17,
  },
  brandName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  white: {
    color: '#fff',
  },

  headerText: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  date: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 5,
  },
  feeling: {
    fontSize: 16,
    color: '#fff',
  },
});
export default HeaderComponent;
