import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LIGHT_BLUE, WHITE, YELLOW } from '../Theme/colors';
import { Button, Card } from 'react-native-elements';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

class PremiumVersionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.headingText}>
            {this.props.heading ? this.props.heading : 'Discover Quickly!'}
          </Text>
          <Text style={styles.text}>
            {this.props.subHeading
              ? this.props.subHeading
              : 'In the premium version you can filter for compatibility with your selection'}
          </Text>
        </View>
        <Button
          type={'outline'}
          title={'Unlock Premium'}
          icon={
            <IconFontAwesome
              name={'star'}
              size={20}
              color={YELLOW}
              style={styles.buttonIcon}
            />
          }
          type={'outline'}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_BLUE,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  innerContainer: {
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    fontFamily: 'SFProDisplay-Bold',
    paddingLeft: 20,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'SFProDisplay-Regular',
  },
  buttonIcon: {
    fontWeight: '200',
    paddingRight: 10,
  },
  button: {
    borderRadius: 10,
    borderColor: YELLOW,
    borderWidth: 1,
    backgroundColor: WHITE,
  },
  buttonContainer: {
    marginTop: 15,
  },
  title: {
    color: YELLOW,
  },
});

export default PremiumVersionCard;
