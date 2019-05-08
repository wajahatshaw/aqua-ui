import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Button, Divider, ThemeProvider } from 'react-native-elements';
import { Container, Content } from 'native-base';
import { DRAWER_GREY, GREY_LINE, PRIMARY_BLUE, YELLOW } from '../Theme/colors';
import LeftRightHeader from '../components/Headers/leftRightHeader';
import icoMoonConfig from '../selection';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { MAX_WIDTH_IPAD } from '../utils/utilities';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import {Theme} from "../Theme/ThemeProvider";
const FontIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icons.ttf',
);

class PurchaseScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <LeftRightHeader
          text={'Already Purchased?'}
          navigation={navigation}
          iconName={null}
          onPress={() => navigation.goBack()}
        />
      ),
      headerLeft: (
        <LeftRightHeader
          text={'Closed'}
          navigation={navigation}
          onPress={() => navigation.goBack()}
        />
      ),
    };
  };

  renderCheckRow = (heading, text) => (
    <View style={styles.rowContainer}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.row}>
        <View style={styles.rowViewOne}>
          <FontIcon name={'checked'} color={PRIMARY_BLUE} size={25} />
        </View>
        <View style={styles.rowViewTwo}>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <ThemeProvider theme={Theme}>
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <IconFontAwesome
            name={'star'}
            size={60}
            color={YELLOW}
            style={styles.icon}
          />
          <Text style={styles.text}>Unlock the full potential of the app!</Text>
          {this.renderCheckRow(
            'No fish harmed, no guessing, np stress',
            '... because you see immediately which fit together',
          )}
          <Divider style={Theme.divider} />
          {this.renderCheckRow(
            'Inspire yourself!',
            '... with as many fish and plants selections as you want!',
          )}
          <Divider style={Theme.divider} />
          {this.renderCheckRow(
            'Costs less than a reference book',
            '... and contins the same amount of information',
          )}
          <Divider style={Theme.divider} />
        </Content>
        <View style={styles.footer}>
          <Button
            title={'Buy for 6,99£'}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
          />
        </View>
      </Container>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  content: {
    flex: 0.875,
    marginHorizontal: Dimensions.get('window').width >= 1024 ? 300 : 0,
  },
  footer: {
    flex: 0.125,
    backgroundColor: DRAWER_GREY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: PRIMARY_BLUE,
    marginHorizontal: 15,
    marginVertical: 10,
    minWidth: 350,
  },
  button: {
    borderRadius: 5,
  },
  icon: {
    paddingVertical: 30,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: 'SFProDisplay-Regular',
  },
  rowContainer: {
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  rowViewOne: {
    flex: 0.1,
  },
  rowViewTwo: {
    flex: 0.9,
  },
  heading: {
    fontFamily: 'SFProDisplay-Bold',
    color: PRIMARY_BLUE,
  },
  divider: {
    backgroundColor: GREY_LINE,
    height: 1,
  },
});

export default PurchaseScreen;
