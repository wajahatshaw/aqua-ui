import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import LeftRightHeader from '../components/Headers/leftRightHeader';
import TitleHeader from '../components/Headers/titleHeader';
var FloatingLabel = require('react-native-floating-labels');
import { BLACK, GREY_LINE, SETTING_BG, WHITE } from '../Theme/colors';
import { Container, Content } from 'native-base';
import { Divider, Button, ThemeProvider } from 'react-native-elements';
import icoConfigMoon from '../selection';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import PremiumVersionCard from '../components/PremiumVersionCard';
import {Theme} from "../Theme/ThemeProvider";
const FontIcon = createIconSetFromIcoMoon(
  icoConfigMoon,
  'icomoon',
  'icons.ttf',
);

class EditScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <LeftRightHeader
          text={'Apply'}
          navigation={navigation}
          iconName={null}
          onPress={() => navigation.goBack()}
        />
      ),
      headerTitle: (
        <TitleHeader navigation={navigation} text={'Create Aquarium'} />
      ),
      headerLeft: (
        <LeftRightHeader
          text={'Cancel'}
          navigation={navigation}
          onPress={() => navigation.goBack()}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      inputValue2: '',
    };
  }

  floatingInput = label => {
    return (
      <View>
        <FloatingLabel
          labelStyle={styles.labelInput}
          inputStyle={styles.input}
          style={styles.formInput}
          value={this.state.inputValue}
          onChangeText={text => this.setState({ inputValue: text })}
        >
          {label}
        </FloatingLabel>
      </View>
    );
  };

  secondFloatingInput = label => {
    return (
      <View>
        <FloatingLabel
          labelStyle={styles.labelInput}
          inputStyle={styles.input}
          style={styles.formInput}
          value={this.state.inputValue2}
          onChangeText={text => this.setState({ inputValue2: text })}
        >
          {label}
        </FloatingLabel>
      </View>
    );
  };

  fishRow = (name, color) => {
    return (
      <View style={styles.fishRow}>
        <View style={styles.view}>
          <Image
            source={require('../Images/longfish.png')}
            style={styles.image}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.firstCol}>
          <View style={styles.innerRow}>
            <View style={styles.alignCenter}>
              <Text>Yellow-tailed Congo Tetra</Text>
              <Text style={styles.label}>Subtitle</Text>
            </View>
          </View>
        </View>
        <View style={styles.secondCol}>
          <FontIcon name={name} size={30} color={color} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <ThemeProvider theme={Theme}>
      <Container style={styles.container}>
        <Content contentContainerStyle={Theme.content}>
          {this.floatingInput('Aquarium Title')}
          <Divider color={GREY_LINE} style={styles.divider} />
          {this.secondFloatingInput('Volume (litre)')}
          <Divider color={GREY_LINE} style={styles.divider} />
          <View>
            <Text style={styles.headingText}>Fish</Text>
          </View>
          {this.fishRow('remove', 'green')}
          <Divider color={GREY_LINE} style={styles.divider} />
          {this.fishRow('undo', BLACK)}
          <Divider color={GREY_LINE} style={styles.divider} />
          <PremiumVersionCard
            heading={'Get more edit options'}
            subHeading={
              'In the premium version you can remove single animals and plants'
            }
          />
          <Button
            title={'Remove this aquarium'}
            buttonStyle={Theme.whiteButton}
            containerStyle={Theme.whiteButtonContainer}
            titleStyle={Theme.whiteButtonTitle}
          />
        </Content>
      </Container>
      </ThemeProvider>
    );
  }
}

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SETTING_BG,
  },
  content: {
    backgroundColor: SETTING_BG,
    marginHorizontal: Dimensions.get('window').width >= 1024 ? 300 : 0,
  },
  labelInput: {
    color: GREY_LINE,
    marginHorizontal: 15,
  },
  input: {
    borderWidth: 0,
  },
  formInput: {
    paddingHorizontal: 15,
    backgroundColor: WHITE,
  },
  divider: {
    height: 1,
  },
  headingText: {
    color: GREY_LINE,
    paddingVertical: 10,
    paddingLeft: 25,
    backgroundColor: SETTING_BG,
    fontSize: 18,
    fontFamily: 'SFProDisplay-Regular',
  },
  fishRow: {
    flexDirection: 'row',
    backgroundColor: WHITE,
  },
  image: {
    height: 65,
    width: 65,
    marginHorizontal: 15,
  },
  firstCol: {
    flex: 0.65,
    justifyContent: 'center',
  },
  secondCol: {
    flex: 0.1,
    justifyContent: 'center',
  },
  label: {
    color: GREY_LINE,
    marginTop: 3,
    fontFamily: 'SFProDisplay-Regular',
  },
  innerRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    justifyContent: 'center',
  },
  view: {
    flex: 0.25,
  },
  button: {
    backgroundColor: WHITE,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonTitle: {
    color: 'red',
    fontFamily: 'SFProDisplay-Regular',
  },
});
