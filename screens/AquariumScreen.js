import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LeftRightHeader from '../components/Headers/leftRightHeader';
import TitleHeader from '../components/Headers/titleHeader';
import HeadingBar from '../components/HeadingBar';
import { Container, Content } from 'native-base';
import { OptimalCondition } from '../components/OptimalCondition';
import icoConfigMoon from '../selection';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
const FontIcon = createIconSetFromIcoMoon(
  icoConfigMoon,
  'icomoon',
  'icons.ttf',
);
import {
  BLACK,
  DRAWER_GREY,
  GREY_LINE,
  PRIMARY_BLUE,
  SETTING_BG,
  WHITE,
} from '../Theme/colors';
import { Button } from 'react-native-elements';
import ListButton from '../components/ListButton';
import { BlurView } from 'react-native-blur';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MAX_WIDTH_IPAD } from '../utils/utilities';

class AquariumScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <LeftRightHeader
          text={'Edit'}
          navigation={navigation}
          iconName={null}
          onPress={() => navigation.goBack()}
        />
      ),
      headerTitle: (
        <TitleHeader navigation={navigation} text={'Livingroom 200I'} />
      ),
      headerLeft: (
        <LeftRightHeader
          text={'Back'}
          navigation={navigation}
          onPress={() => navigation.goBack()}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      fishes: [
        {
          id: 1,
          key: '1',
        },
        {
          id: 2,
          key: '2',
        },
        {
          id: 3,
          key: '3',
        },
        {
          id: 4,
          key: '4',
        },
      ],
      plants: [
        {
          id: 1,
          key: '1',
        },
        {
          id: 2,
          key: '2',
        },
        {
          id: 3,
          key: '3',
        },
        {
          id: 4,
          key: '4',
        },
      ],
      crustoceans: [
        {
          id: 1,
          key: '1',
        },
        {
          id: 2,
          key: '2',
        },
        {
          id: 3,
          key: '3',
        },
      ],
      snails: [
        {
          id: 1,
          key: '1',
        },
        {
          id: 2,
          key: '2',
        },
        {
          id: 3,
          key: '3',
        },
      ],
      data: [
        {
          id: 1,
          text: 'Browse Fish',
        },
        {
          id: 2,
          text: 'Browse Fish',
        },
        {
          id: 3,
          text: 'Browse Fish',
        },
        {
          id: 4,
          text: 'Browse Fish',
        },
      ],
    };
  }

  conditionsView = () => {
    return (
      <View style={styles.conditionContainer}>
        <OptimalCondition />
        <Button
          title={'Turn into real aquarium'}
          titleStyle={styles.buttonText}
          type={'outline'}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
      </View>
    );
  };

  horizontalListView = () => {
    return (
      <View style={styles.listViewContainer}>
        <View style={styles.rowBlock}>
          <Text style={styles.headingText}>FISH</Text>
          <ScrollView horizontal={true} style={styles.listRow}>
            <View>
              <FlatList
                data={this.state.fishes}
                keyExtractor={(item, index) => item.key}
                horizontal={true}
                renderItem={item => {
                  return (
                    <Image
                      source={require('../Images/fish.png')}
                      style={styles.listImage}
                      resizeMode={'cover'}
                    />
                  );
                }}
              />
            </View>
            <View>
              <ListButton name={'fish'} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.rowBlock}>
          <Text style={styles.headingText}>PLANTS</Text>
          <ScrollView horizontal={true} style={styles.listRow}>
            <View>
              <FlatList
                data={this.state.plants}
                horizontal={true}
                renderItem={item => {
                  return (
                    <Image
                      source={require('../Images/plants.png')}
                      style={styles.listImage}
                      resizeMode={'cover'}
                    />
                  );
                }}
              />
            </View>
            <View>
              <ListButton name={'plants'} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.rowBlock}>
          <Text style={styles.headingText}>CRUSTACEANS</Text>
          <ScrollView horizontal={true} style={styles.listRow}>
            <View>
              <FlatList
                data={this.state.crustoceans}
                horizontal={true}
                renderItem={item => {
                  return (
                    <Image
                      source={require('../Images/crusaceans.png')}
                      style={styles.listImage}
                      resizeMode={'cover'}
                    />
                  );
                }}
              />
            </View>
            <View>
              <ListButton name={'crustacean'} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.rowBlock}>
          <Text style={styles.headingText}>SNAILS</Text>
          <ScrollView horizontal={true} style={styles.listRow}>
            <View>
              <FlatList
                data={this.state.snails}
                horizontal={true}
                renderItem={item => {
                  return (
                    <Image
                      source={require('../Images/snail.png')}
                      style={styles.listImage}
                      resizeMode={'cover'}
                    />
                  );
                }}
              />
            </View>
            <View>
              <ListButton name={'snail'} />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();

  item = textItem => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <ImageBackground
          source={require('../Images/fish.png')}
          resizeMode={'cover'}
          style={styles.itemImage}
        >
          <BlurView
            viewRef={null}
            blurType={'dark'}
            blurAmount={10}
            style={styles.itemImageBlur}
          >
            <View style={styles.itemBottomView}>
              <View style={styles.itemBottomTextViewLeft} />
              <View style={styles.itemBottomTextViewRight}>
                <Text style={styles.itemBottomText}>Browse Snails</Text>
                <Icon name={'chevron-right'} size={30} color={WHITE} />
              </View>
            </View>
          </BlurView>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          {Dimensions.get('window').width > MAX_WIDTH_IPAD ? (
            <View style={styles.floatingView}>
              <View style={styles.leftColumn}>
                <HeadingBar heading={'IN THIS AQUARIUM'} />
                {this.horizontalListView()}
                <HeadingBar heading={'CATALOGUES'} />
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={this.state.data}
                  renderItem={this.item}
                  numColumns={Dimensions.get('window').width >= 1024 ? 2 : 1}
                />
              </View>
              <View style={styles.cataloguesView}>
                {/*<View style={styles.notification}>*/}
                {/*<View style={styles.bubbleView}>*/}
                {/*<View style={styles.bubble}>*/}
                {/*<Text style={styles.bubbleText}>1</Text>*/}
                {/*</View>*/}
                {/*</View>*/}
                {/*<View style={styles.bubbleTextView}>*/}
                {/*<Text style={styles.bubbleText}>*/}
                {/*Browse our catalogues to yourself inspired*/}
                {/*</Text>*/}
                {/*</View>*/}
                {/*</View>*/}
                <HeadingBar heading={'OPTIMAL CONDITIONS'} />
                {this.conditionsView()}
              </View>
            </View>
          ) : (
            <View>
              <View style={styles.notification}>
                <View style={styles.bubbleView}>
                  <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>1</Text>
                  </View>
                </View>
                <View style={styles.bubbleTextView}>
                  <Text style={styles.bubbleText}>
                    Browse our catalogues to yourself inspired
                  </Text>
                </View>
              </View>
              <HeadingBar heading={'OPTIMAL CONDITIONS'} />
              {this.conditionsView()}
              <HeadingBar heading={'IN THIS AQUARIUM'} />
              {this.horizontalListView()}
              <HeadingBar heading={'CATALOGUES'} />
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.data}
                renderItem={this.item}
                numColumns={Dimensions.get('window').width >= 1024 ? 2 : 1}
              />
            </View>
          )}
        </Content>
      </Container>
    );
  }
}

export default AquariumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {},
  conditionContainer: {
    backgroundColor: WHITE,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginVertical: 15,
  },
  rowColumn: {
    alignItems: 'center',
  },
  conditionText: {
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: PRIMARY_BLUE,
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: PRIMARY_BLUE,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  bubbleView: { flex: 0.15, alignItems: 'center', justifyContent: 'center' },
  bubble: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SETTING_BG,
  },
  bubbleTextView: {
    flex: 0.85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleText: { fontSize: 18 },
  listViewContainer: {},
  headingText: {
    color: GREY_LINE,
    marginBottom: 10,
  },
  listRow: { flexDirection: 'row' },
  listImage: {
    height: 60,
    width: 60,
    marginHorizontal: 1,
  },
  rowBlock: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  //==================================================== copied from Catalogues screen ================================
  createAquariumContainer: {
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  createAquariumHeadingText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  createAquariumText: {
    textAlign: 'center',
    paddingLeft: 20,
  },
  createAquariumButton: {
    borderRadius: 10,
    borderColor: PRIMARY_BLUE,
    borderWidth: 1,
  },
  createAquariumButtonContainer: {
    marginTop: 15,
  },
  viewAquariumContainer: {
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  viewAquariumHeadingText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  viewAquariumText: {
    textAlign: 'center',
    paddingLeft: 20,
  },
  viewAquariumIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  viewAquariumInnerIconView: {
    alignItems: 'center',
  },
  viewAquariumIcon: {
    padding: 5,
    fontWeight: '500',
  },
  iconText: {
    fontSize: 18,
  },
  showButtonIcon: {
    fontWeight: '200',
    paddingRight: 10,
  },
  showButton: {
    borderRadius: 10,
    borderColor: PRIMARY_BLUE,
    borderWidth: 1,
    backgroundColor: WHITE,
  },
  newButtonIcon: {
    fontWeight: '200',
    paddingRight: 10,
  },
  newButton: {
    borderRadius: 10,
    borderColor: PRIMARY_BLUE,
    borderWidth: 1,
    backgroundColor: WHITE,
  },
  itemContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  itemImage: {
    height: 180,
    width:
      Dimensions.get('window').width > 786
        ? (Dimensions.get('window').width * 0.66) / 2.2
        : 350,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  itemImageBlur: {
    position: 'absolute',
    top: 142,
    left: 0,
    height: 38,
    width:
      Dimensions.get('window').width > 786
        ? (Dimensions.get('window').width * 0.66) / 2.2
        : 350,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderColor: 'transparent',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  itemBottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBottomOuterView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBottomTextViewLeft: {
    flex: 0.5,
  },
  itemBottomTextViewRight: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBottomText: {
    color: 'white',
  },
  floatingView: {
    flex: 1,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cataloguesView: {
    width: Dimensions.get('window').width * 0.33,
  },
  leftColumn: {
    width: Dimensions.get('window').width * 0.66,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  switchText: {
    fontSize: 20,
  },
});
