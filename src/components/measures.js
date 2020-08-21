import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import bloodPressure from '../assets/images/blood-p.png';
import pulse from '../assets/images/pulse-oximeter.png';
import temperature from '../assets/images/temperature.png';
import {db} from '../config';

const VitalsComponent = ({navigation: {goBack}}) => {
  const [isShowingLoaderTemp, setIsShowingLoaderTemp] = useState(false);
  const [isShowingOverlayTemp, setIsShowingOverlayTemp] = useState(true);

  const [isShowingLoaderBlood, setIsShowingLoaderBlood] = useState(false);
  const [isShowingOverlayBlood, setIsShowingOverlayBlood] = useState(true);

  const [isShowingLoaderPulse, setIsShowingLoaderPulse] = useState(false);
  const [isShowingOverlayPulse, setIsShowingOverlayPulse] = useState(true);

  const [isShowingDisabledButton, setIsShowingDisabledButton] = useState(false);

  const [bodyTemp, setBodyTemp] = useState(0);
  const [bodySystolic, setbodySystolic] = useState(0);
  const [bodyDiastolic, setbodyDiastolic] = useState(0);
  const [bodySp, setbodySp] = useState(0);
  const [bodyPr, setbodyPr] = useState(0);
  var randomNumber = 0;

  const saveData = () => {
    db.ref('vitals')
      .set({
        Temperature: {bodyTemp},
        Blood: {
          diastolic: {bodySystolic},
          systolic: {bodyDiastolic},
        },
        Oximeter: {
          pr: {bodyPr},
          sp: {bodySp},
        },
      })
      .then(() => {
        goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const generateRandomTemp = () => {
    setIsShowingLoaderTemp(true);
    setIsShowingOverlayTemp(false);

    const randomnumberTemp = () => {
      randomNumber = Math.floor(Math.random() * (105 - 95)) + 95;
      setBodyTemp(randomNumber);
      setIsShowingLoaderTemp(false);
      setIsShowingDisabledButton(true);
    };
    setTimeout(randomnumberTemp, 2000);
  };

  const generateRandomBlood = () => {
    setIsShowingLoaderBlood(true);
    setIsShowingOverlayBlood(false);

    const generateRandomSystolic = () => {
      var randomNumber = Math.floor(Math.random() * (120 - 90)) + 90;
      setbodySystolic(randomNumber);
    };

    const generateRandomDiastolic = () => {
      var randomNumber = Math.floor(Math.random() * (80 - 60)) + 60;
      setbodyDiastolic(randomNumber);
      setIsShowingLoaderBlood(false);
      setIsShowingDisabledButton(true);
    };

    setTimeout(generateRandomSystolic, 2000);
    setTimeout(generateRandomDiastolic, 2000);
  };

  const generateRandomPulseRate = () => {
    setIsShowingLoaderPulse(true);
    setIsShowingOverlayPulse(false);

    const generateRandomOximeter = () => {
      var randomNumber = Math.floor(Math.random() * (100 - 95)) + 95;
      setbodySp(randomNumber);
    };

    const generateRandomPulse = () => {
      var randomNumber = Math.floor(Math.random() * (100 - 80)) + 80;
      setbodyPr(randomNumber);
      setIsShowingLoaderPulse(false);
      setIsShowingDisabledButton(true);
    };
    setTimeout(generateRandomOximeter, 2000);
    setTimeout(generateRandomPulse, 2000);
  };

  return (
    <View style={styles.vitalScreen}>
      <View style={styles.vitalsMeasure}>
        <View style={styles.deviceVital}>
          {isShowingOverlayTemp && (
            <View style={styles.OverlayDiv}>
              <TouchableOpacity
                style={styles.ClickVitals}
                onPress={generateRandomTemp}>
                <Text style={styles.OverlayText}>
                  Wear Thermometer to view Temperature
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <Image style={styles.vitalIcon} source={temperature}></Image>
          <Text style={styles.vitalText}>Body</Text>
          {isShowingLoaderTemp && (
            <View style={styles.loaderDiv}>
              <ActivityIndicator size="large" color="#655182" />
            </View>
          )}
          <View style={styles.vitalVal}>
            <Text style={styles.VitalValText}> {bodyTemp} </Text>
          </View>
        </View>
      </View>

      <View style={styles.vitalsMeasure}>
        <View style={styles.deviceVital}>
          {isShowingOverlayBlood && (
            <View style={styles.OverlayDiv}>
              <TouchableOpacity
                style={styles.ClickVitals}
                onPress={generateRandomBlood}>
                <Text style={styles.OverlayText}>
                  Wear Part2 to view Blood Press
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <Image style={styles.vitalIcon} source={bloodPressure}></Image>
          <Text style={styles.vitalText}>Blood</Text>

          {isShowingLoaderBlood && (
            <View style={styles.loaderDiv}>
              <ActivityIndicator size="large" color="#655182" />
            </View>
          )}
          <View style={[styles.vitalVal, styles.BloodVal]}>
            <Text style={styles.VitalValText}>{bodySystolic}</Text>
            <Text style={[styles.VitalValText, styles.slash]}>/</Text>
            <Text style={[styles.VitalValText, styles.blue]}>
              {bodyDiastolic}
              {'\n'}
              <Text style={styles.ValParameter}>mmHg</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.vitalsMeasure}>
        <View style={styles.deviceVital}>
          {isShowingOverlayPulse && (
            <View style={styles.OverlayDiv}>
              <TouchableOpacity
                style={styles.ClickVitals}
                onPress={generateRandomPulseRate}>
                <Text style={styles.OverlayText}>
                  Wear Part3 to view SpO2 and PR
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.vitalValMain}>
            <View style={[styles.vitalVal, styles.oximeter, styles.oximeterSp]}>
              <Image style={styles.vitalIcon} source={pulse}></Image>
              <Text style={[styles.VitalValText, styles.spo2]}>
                <Text style={styles.ValParameterSp}>Sp02</Text>
                {isShowingLoaderPulse && (
                  <View style={styles.loaderDiv}>
                    <ActivityIndicator size="large" color="#655182" />
                  </View>
                )}
                <Text style={{marginLeft: 3}}> {bodySp}</Text>
                <Text style={styles.ValParameter}>%</Text>
              </Text>
            </View>

            <View style={[styles.vitalVal, styles.oximeter, styles.oximeterpr]}>
              <Text style={styles.ValParameterPr}>PR</Text>
              <Text style={styles.VitalValText}>
                {isShowingLoaderPulse && (
                  <View style={styles.loaderDiv}>
                    <ActivityIndicator size="large" color="#655182" />
                  </View>
                )}
                <Text style={{marginRight: 3}}> {bodyPr}</Text>
                <Text style={styles.ValParameter}>bpm</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

      {!isShowingDisabledButton && (
        <View style={styles.vitalsComplete}>
          <TouchableOpacity style={styles.completeEnabled}>
            <Button
              title="Complete"
              color="#645282"
              disabled={true}
              style={styles.complete}
            />
          </TouchableOpacity>
        </View>
      )}

      {isShowingDisabledButton && (
        <View style={styles.vitalsComplete}>
          <TouchableOpacity style={styles.completeDisabled}>
            <Button title="Complete" color="#645282" onPress={saveData} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  vitalScreen: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 15,
    backgroundColor: '#fff',
    paddingRight: 15,
  },

  deviceVital: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    height: 120,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'relative',
  },
  OverlayDiv: {
    position: 'absolute',
    backgroundColor: '#655182',
    color: '#fff',
    height: '100%',
    right: 0,
    zIndex: 3,
    opacity: 0.9,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    width: '70%',
    textAlign: 'center',
  },
  OverlayText: {
    color: '#fff',
  },
  vitalValMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  vitalVal: {
    marginLeft: 'auto',
    fontSize: 40,
    color: 'gray',
    flexDirection: 'row',
  },
  oximeter: {
    alignItems: 'center',
    width: '50%',
  },
  vitalText: {fontSize: 16, color: '#624d86'},
  vitalIcon: {
    width: 32,
    height: 32,
    marginRight: 3,
  },
  complete: {
    width: '100%',
    color: '#fff',
    borderRadius: 10,
    fontSize: 20,
  },
  loaderDiv: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 5,
    paddingRight: 5,
  },
  VitalValText: {
    fontSize: 30,
    color: '#624d86',
  },
  blue: {
    color: '#0db8cd',
  },
  oximeterpr: {
    justifyContent: 'flex-end',
  },
  ValParameter: {
    fontSize: 12,
    color: '#686868',
  },
  ValParameterSp: {
    fontSize: 12,
    color: '#645282',
  },
  ValParameterPr: {
    fontSize: 12,
    color: '#686868',
  },
  vitalsComplete: {
    paddingTop: 20,
  },
});

export default VitalsComponent;
