import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GREY_LINE, SETTING_BG } from '../Theme/colors';

class HeadingBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.heading}</Text>
      </View>
    );
  }
}

export default HeadingBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: SETTING_BG,
    marginHorizontal: 1,
  },
  text: {
    color: GREY_LINE,
    paddingLeft: 15,
    paddingVertical: 10,
    fontFamily: 'SFProDisplay-Semibold',
  },
});
