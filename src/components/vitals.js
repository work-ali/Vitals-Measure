import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import tempimage from '../assets/images/temp.png';
import bloodimage from '../assets/images/blood.png';
import pulseimage from '../assets/images/pulse.png';
import {db} from '../config';

const VitalsComponent = () => {
  const [bodyTemp, setbodyTemp] = useState(0);
  const [bodySp, setbodySp] = useState(0);
  const [bodyPr, setbodyPr] = useState(0);
  const [bodySystolic, setbodySystolic] = useState(0);
  const [bodyDiastolic, setbodyDiastolic] = useState(0);

  useEffect(() => {
    db.ref('vitals').on('value', function(snapshot) {
      var systolic = snapshot.child('Blood/diastolic/bodySystolic').val();
      var diastolic = snapshot.child('Blood/systolic/bodyDiastolic').val();
      var pr = snapshot.child('Oximeter/pr/bodyPr').val();
      var sp = snapshot.child('Oximeter/sp/bodySp').val();
      var temp = snapshot.child('Temperature/bodyTemp').val();
      setbodyTemp(temp);
      setbodySp(sp);
      setbodyPr(pr);
      setbodyDiastolic(diastolic);
      setbodySystolic(systolic);
    });
  }, []);

  return (
    <View style={styles.vitalsContainer}>
      <View style={[styles.VitalsDiv, styles.tempVitalsStyle]}>
        <Image
          resizeMode="contain"
          style={[styles.viltalsPic, styles.TempPic]}
          source={tempimage}
        />
        <Text style={styles.ViltalsVal}>{bodyTemp}</Text>
      </View>

      <View style={[styles.VitalsDiv, styles.BloodVitalsStyle]}>
        <Image
          resizeMode="contain"
          style={[styles.viltalsPic, styles.BloodpPic]}
          source={bloodimage}
        />
        <View style={[styles.ViltalsVal, styles.BloodVal]}>
          <Text style={styles.VitalValText}>{bodySystolic}</Text>
          <Text style={[styles.VitalValText, styles.slash]}>/</Text>
          <Text style={[styles.VitalValText, styles.red]}>
            {bodyDiastolic}
            {'\n'}
            <Text style={styles.ValParameter}>mmHg</Text>
          </Text>
        </View>
      </View>

      <View style={[styles.VitalsDiv, styles.PulseVitalsStyle]}>
        <Image
          resizeMode="contain"
          style={[styles.viltalsPic, styles.PulsePic]}
          source={pulseimage}
        />
        <View style={[styles.ViltalsVal, styles.oximeter]}>
          <Text style={[styles.VitalValText, styles.spo2]}>
            <Text style={{fontSize: 20}}>Sp02</Text>
            {'\n'}
            {bodySp}
            <Text style={styles.ValParameter}>%</Text>
          </Text>

          <Text style={styles.VitalValText}>
            <Text style={{fontSize: 20}}>PR</Text>
            {'\n'}
            {bodyPr}
            <Text style={styles.ValParameter}>bpm</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vitalsContainer: {
    display: 'flex',
    paddingTop: 10,
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
  VitalsDiv: {
    maxWidth: '50%',
    height: 'auto',
    position: 'relative',
    alignItems: 'center',
    height: 'auto',
    overflow: 'hidden',
    paddingRight: 7.5,
    paddingLeft: 7.5,
  },
  measure: {
    width: 300,
    height: 300,
  },
  tempVitalsStyle: {
    alignSelf: 'flex-start',
    paddingLeft: 0,
  },
  BloodVitalsStyle: {
    paddingRight: 0,
  },
  PulseVitalsStyle: {
    position: 'relative',
    top: -45,
    paddingLeft: 0,
  },

  viltalsPic: {
    // width: windowWidth * 0.5,
    maxHeight: '100%',
    resizeMode: 'cover',
  },

  ViltalsVal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    color: '#fff',
  },
  VitalValText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    position: 'relative',
    top: 15,
  },
  BloodVal: {
    bottom: 40,
  },
  slash: {
    position: 'relative',
    top: 28,
  },
  red: {
    color: '#ec0016',
    position: 'relative',
    top: 28,
  },
  ValParameter: {
    fontSize: 12,
    color: '#fff',
  },
  oximeter: {bottom: 30},
  spo2: {paddingRight: 15},
});

export default VitalsComponent;
