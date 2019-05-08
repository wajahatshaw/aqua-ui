import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { BLACK, WHITE } from '../Theme/colors';

class onBoardingScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        style={styles.imageBgStyle}
        source={require('../from-real-app/assets/onboarding.jpg')}
        resizeMode={'cover'}
      >
        <View style={styles.firstContainerStyle}>
          <Image
            source={require('../from-real-app/assets/logo.png')}
            style={styles.logoStyle}
            resizeMode={'contain'}
          />
          <Text style={styles.text}>
            The App helps you plan your own aquarium
          </Text>
        </View>
        <View style={styles.secondContainerStyle} />
        <View style={styles.thirdContainerStyle}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Catalogues')}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logoStyle: {
    height: 80,
    width: 250,
  },
  imageBgStyle: {
    flex: 1,
  },
  firstContainerStyle: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondContainerStyle: {
    flex: 0.35,
  },
  thirdContainerStyle: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: WHITE,
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 55,
    textAlign: 'center',
    fontFamily: 'SFProDisplay-Regular',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
    borderRadius: 5,
    backgroundColor: BLACK,
    opacity: 0.5,
    paddingVertical: 15,
    minWidth: 350,
  },
  buttonText: {
    color: WHITE,
    fontSize: 18,
    fontFamily: 'SFProDisplay-Regular',
  },
});

export default onBoardingScreen;
