import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class CalenderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      height: '10%',
      isHeightFull: false,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View
        style={styles.calenderWraper}
        onPress={() => {
          Alert.alert('text');
          this.setState({isHeightFull: true});
        }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View
            style={[
              styles.container,
              this.state.isHeightFull ? styles.fullHeight : styles.maxHeight,
            ]}>
            <CalendarPicker
              showDayStragglers={false}
              selectedDayColor="#321d5e"
              scrollable={true}
              selectedDayTextColor="#fff"
              todayBackgroundColor="#321d5e"
              selectMonthTitle="dsads"
              onDateChange={this.onDateChange}
              startFromMonday={true}
              previousTitle=" "
              nextTitle=" "
              selectMonthTitle=" sdzsdds"
              scrollable={true}
              restrictMonthNavigation={false}
            />

            <View style={{paddingLeft: 30, paddingBottom: 10}}>
              <Text>SELECTED DATE:{startDate}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {},
  calenderWraper: {
    position: 'relative',
    top: -15,
    marginHorizontal: 15,
  },
  container: {
    flex: 1,
    opacity: 1,
    backgroundColor: '#ececec',
    borderRadius: 10,
    display: 'flex',
    zIndex: 999999,
  },
  maxHeight: {
    maxHeight: 120,
  },
  fullHeight: {
    height: 400,
  },
});
