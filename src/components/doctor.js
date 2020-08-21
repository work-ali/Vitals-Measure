import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const doctorComponent = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: 30}}>Doctor Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyStyling: {},
});

export default doctorComponent;
