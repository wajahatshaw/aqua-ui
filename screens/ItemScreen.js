import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';
import { Button } from 'react-native-elements';
import LeftRightHeader from '../components/Headers/leftRightHeader';
import TitleHeader from '../components/Headers/titleHeader';
import { OptimalCondition } from '../components/OptimalCondition';
import HeadingBar from '../components/HeadingBar';
import PremiumVersionCard from '../components/PremiumVersionCard';
import {
  BLACK,
  DRAWER_GREY,
  GREY_LINE,
  PRIMARY_BLUE,
  SETTING_BG,
} from '../Theme/colors';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection';
import { MAX_WIDTH_IPAD } from '../utils/utilities';
const FontIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icons.ttf',
);

class ItemScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <TitleHeader navigation={navigation} text={'African Banded Barb'} />
      ),
      headerLeft: (
        <LeftRightHeader
          text={'Fish'}
          navigation={navigation}
          // onPress={() => navigation.goBack()}
        />
      ),
    };
  };

  cameraRow = text => (
    <View style={styles.cameraRow}>
      <Text style={styles.cameraRowText}>{text}</Text>
      <FontIcon name={'camera'} size={20} color={BLACK} style={styles.icon} />
    </View>
  );

  characteristicRow = (text1, text2) => (
    <View style={styles.lengthRow}>
      <Text>{text1}</Text>
      <Text style={styles.cameraRowText}>{text2}</Text>
    </View>
  );

  render() {
    return (
      <Container style={styles.container}>
        {Dimensions.get('window').width > MAX_WIDTH_IPAD ? (
          <Content contentContainerStyle={styles.tabView}>
            <View style={styles.tabViewRight}>
              <Image
                source={require('../Images/goldfish.png')}
                resize={'cover'}
                style={styles.image}
              />
              {this.cameraRow('Peter Miguire')}
            </View>
            <View style={styles.tabViewLeft}>
              <HeadingBar heading={'OPTIMAL CONDITIONS'} />
              <OptimalCondition />
              <HeadingBar heading={'SCIENTIFIC NAME'} />
              <Text style={styles.name}>Barbus Fascilatous</Text>
              <PremiumVersionCard />
            </View>
            {/*<HeadingBar heading={'CHARACTERISTICS'} />*/}
            {/*{this.characteristicRow('Max. Length', '8cm')}*/}
          </Content>
        ) : (
          <Content style={styles.content}>
            <Image
              source={require('../Images/goldfish.png')}
              resize={'cover'}
              style={styles.image}
            />
            {this.cameraRow('Peter Miguire')}
            <HeadingBar heading={'OPTIMAL CONDITIONS'} />
            <OptimalCondition />
            <HeadingBar heading={'SCIENTIFIC NAME'} />
            <Text style={styles.name}>Barbus Fascilatous</Text>
            <HeadingBar heading={'CHARACTERISTICS'} />
            {this.characteristicRow('Max. Length', '8cm')}
            <PremiumVersionCard />
          </Content>
        )}
        <View style={styles.buttonContent}>
          <Button
            title={'Add to Aquarium'}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
          />
        </View>
      </Container>
    );
  }
}

export default ItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.9,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width > MAX_WIDTH_IPAD ? 350 : 250,
  },
  cameraRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: SETTING_BG,
  },
  lengthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cameraRowText: {
    color: GREY_LINE,
    fontSize: 15,
    fontFamily: 'SFProDisplay-Regular',
  },
  icon: {
    marginHorizontal: 10,
  },
  name: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonContent: {
    flex: 0.1,
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
  tabView: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tabViewLeft: {
    width: Dimensions.get('window').width * 0.33,
  },
  tabViewRight: {
    width: Dimensions.get('window').width * 0.66,
  },
});
