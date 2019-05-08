import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import {ThemeProvider} from 'react-native-elements'
import LeftRightHeader from '../components/Headers/leftRightHeader';
import TitleHeader from '../components/Headers/titleHeader';
import { Container, Content } from 'native-base';
import { Button, Divider } from 'react-native-elements';
import {
  BLACK,
  GREY_LINE,
  PRIMARY_BLUE,
  SETTING_BG,
  WHITE,
  YELLOW,
} from '../Theme/colors';
import icoConfigMoon from '../selection';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Theme} from "../Theme/ThemeProvider";
const FontIcon = createIconSetFromIcoMoon(
  icoConfigMoon,
  'icomoon',
  'icons.ttf',
);

class IssuesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <LeftRightHeader
          navigation={navigation}
          text={'Close'}
          onPress={() => navigation.goBack()}
        />
      ),
      headerTitle: <TitleHeader navigation={navigation} text={'Issue'} />,
    };
  };

  volumeRow = () => {
    return (
      <View style={styles.volumeRowContainer}>
        <View style={styles.volumeRow}>
          <FontIcon name={'equipment'} size={40} color={BLACK} />

          <Text style={styles.volText}>Aquarium Volume</Text>
        </View>
      </View>
    );
  };

  fishRow = () => {
    return (
      <View style={styles.volumeRowContainer}>
        <View style={styles.volumeRow}>
          <Image
            source={require('../Images/fish.png')}
            resizeMode={'cover'}
            style={styles.image}
          />

          <View>
            <Text style={styles.volText}>Aquarium Volume</Text>
            <Text style={styles.detailText}>sebbierius fishtus</Text>
          </View>
        </View>
      </View>
    );
  };

  iconRow = (icon, iconColor, text, detailText) => {
    return (
      <View style={styles.iconRow}>
        <View style={styles.iconRowContainer}>
          <FontIcon name={icon} color={iconColor} size={22} />
          <View>
            <Text style={styles.iconRowText}>{text}</Text>
            {detailText !== null ? (
              <Text style={styles.iconRowTextDetail}>{detailText}</Text>
            ) : null}
          </View>
        </View>
      </View>
    );
  };

  issuesView = () => {
    return (
      <View style={styles.issueContainer}>
        <Text style={styles.headingText}>Wait a second!</Text>
        <Text style={styles.issuesText}>
          There are 3 issues in your current aquarium selection. Unlock all
          features to see the issues
        </Text>
      </View>
    );
  };

  buttonView = () => {
    return (
      <View style={styles.buttonView}>
        <Button
          title={'Choose your option'}
          type={'solid'}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
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
          buttonStyle={styles.buttonStar}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.titleStar}
        />
      </View>
    );
  };

  render() {
    return (
      <ThemeProvider theme={Theme}>
      <Container style={styles.container}>
        <Content contentContainerStyle={[Theme.content, styles.contentContainer]}>
          <Text style={styles.text}>
            Issues with your current aquarium setup
          </Text>
          <Divider color={GREY_LINE} styles={styles.divider} />
          {this.volumeRow()}
          <Divider color={GREY_LINE} styles={styles.divider} />
          {this.iconRow('stop', 'red', 'required 150 vs 100I', null)}
          <Divider color={GREY_LINE} style={styles.divider} />
          {this.fishRow()}
          <Divider color={GREY_LINE} style={styles.divider} />
          {this.iconRow(
            'stop',
            'red',
            'Fish eat other fish ...',
            'required with different fishes',
          )}
          <Divider color={GREY_LINE} />
          {this.iconRow(
            'warning',
            YELLOW,
            'Water Hardness',
            'required ...vs ...',
          )}
          <Divider color={GREY_LINE} style={styles.divider} />
          {this.issuesView()}
          {this.buttonView()}
        </Content>
      </Container>
      </ThemeProvider>
    );
  }
}

export default IssuesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SETTING_BG,
  },
  content: {},
  contentContainer: {
    backgroundColor: WHITE
  },
  text: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: 'SFProDisplay-Regular',
  },
  volumeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  volumeRowContainer: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    height: 45,
    width: 55,
  },
  volText: {
    marginLeft: 20,
    fontFamily: 'SFProDisplay-Regular',
  },
  detailText: {
    color: GREY_LINE,
    fontSize: 15,
    marginLeft: 20,
    fontFamily: 'SFProDisplay-Regular',
  },
  iconRow: {
    paddingHorizontal: 45,
    paddingVertical: 10,
  },
  iconRowContainer: {
    flexDirection: 'row',
  },
  iconRowText: {
    marginLeft: 20,
    fontFamily: 'SFProDisplay-Regular',
  },
  iconRowTextDetail: {
    marginLeft: 20,
    color: GREY_LINE,
    fontSize: 15,
    paddingTop: 10,
    fontFamily: 'SFProDisplay-Regular',
  },
  issueContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontFamily: 'SFProDisplay-Bold',
    textAlign: 'center',
    fontSize: 18,
  },
  issuesText: {
    paddingTop: 20,
    fontSize: 17,
    fontFamily: 'SFProDisplay-Regular',
  },
  buttonView: {
    backgroundColor: SETTING_BG,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: PRIMARY_BLUE,
    fontFamily: 'SFProDisplay-Regular',
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: PRIMARY_BLUE,
  },
  buttonStar: {
    borderRadius: 10,
    borderColor: YELLOW,
    borderWidth: 1,
    backgroundColor: WHITE,
  },
  titleStar: {
    color: YELLOW,
  },
  divider: { height: 0.5 },
});
