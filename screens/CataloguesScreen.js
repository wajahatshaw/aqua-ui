import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Switch,
  Dimensions,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Card, Divider, Button, ThemeProvider } from 'react-native-elements';
import { BlurView } from 'react-native-blur';
import Icon from 'react-native-vector-icons/EvilIcons';
import PremiumVersionCard from '../components/PremiumVersionCard';
import { BLACK, GREY_LINE, PRIMARY_BLUE, WHITE } from '../Theme/colors';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import TitleHeader from '../components/Headers/titleHeader';
import LeftRightHeader from '../components/Headers/leftRightHeader';
import icoConfigMoon from '../selection';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import {Theme} from "../Theme/ThemeProvider";
import DeviceInfo from 'react-native-device-info';
const FontIcon = createIconSetFromIcoMoon(
  icoConfigMoon,
  'icomoon',
  'icons.ttf',
);

class CataloguesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <LeftRightHeader
          text={null}
          navigation={navigation}
          iconName={'gear'}
          onPress={() => navigation.navigate('Settings')}
        />
      ),
      headerTitle: <TitleHeader navigation={navigation} text={'Catalogues'} />,
      headerLeft: (
        <LeftRightHeader
          text={null}
          navigation={navigation}
          iconName={'navicon'}
          onPress={() => navigation.openDrawer()}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
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

  componentDidMount(){
      const deviceId = DeviceInfo.getDeviceId();
      console.log(deviceId)
  }

  createAquariumContainer = () => {
    return (
      <ThemeProvider theme={Theme}>
      <Card containerStyle={styles.createAquariumContainer}>
        <View>
          <Text style={styles.createAquariumHeadingText}>
            Create your virtual aquarium with plants and animals of your choice
          </Text>
          <Text style={styles.createAquariumText}>
            You will get notes about compatibility and optimal conditions
          </Text>
          <Button
            title={'Create your first aquarium'}
            type={'solid'}
            buttonStyle={Theme.buttonStyle}
            containerStyle={styles.createAquariumButtonContainer}
          />
        </View>
      </Card>
      </ThemeProvider>
    );
  };

  viewAquariumConatiner = () => {
    return (
       <ThemeProvider theme={Theme}>
      <Card containerStyle={styles.viewAquariumContainer}>
        <View>
          <Text style={styles.viewAquariumHeadingText}>Aquarium</Text>
          <Text style={styles.viewAquariumText}>Current: Livingroom 200I</Text>
          <View style={styles.viewAquariumIconView}>
            <View style={styles.viewAquariumInnerIconView}>
              <FontIcon name={'fish'} color={BLACK} size={30} />
              <Text style={styles.iconText}>5</Text>
            </View>
            <View style={styles.viewAquariumInnerIconView}>
              <FontIcon name={'plants'} color={BLACK} size={30} />
              <Text style={styles.iconText}>2</Text>
            </View>
            <View style={styles.viewAquariumInnerIconView}>
              <FontIcon name={'crustacean'} color={BLACK} size={30} />
              <Text style={styles.iconText}>0</Text>
            </View>
            <View style={styles.viewAquariumInnerIconView}>
              <FontIcon name={'snail'} color={BLACK} size={30} />
              <Text style={styles.iconText}>1</Text>
            </View>
          </View>
          <View style={styles.bubbleView}>
            <Text>virtual aquarium</Text>
          </View>
          <Button
            title={'Go to your aquarium'}
            type={'clear'}
            buttonStyle={Theme.buttonStyle}
            containerStyle={styles.createAquariumButtonContainer}
          />
          <Divider color={GREY_LINE} />
          <Button
            title={'Show all aquariums'}
            icon={
              <IconFontAwesome
                name={'feed'}
                size={20}
                color={PRIMARY_BLUE}
                style={styles.showButtonIcon}
              />
            }
            type={'clear'}
            buttonStyle={styles.showButton}
            containerStyle={styles.createAquariumButtonContainer}
          />
          <Button
            title={'Add new aquarium'}
            icon={
              <IconFontAwesome
                name={'plus'}
                size={20}
                color={PRIMARY_BLUE}
                style={styles.newButtonIcon}
              />
            }
            type={'clear'}
            buttonStyle={styles.newButton}
            containerStyle={styles.createAquariumButtonContainer}
          />
        </View>
      </Card>
       </ThemeProvider>
    );
  };

  loginAquariumConatiner = () => {
    return (
      <ThemeProvider theme={Theme}>
      <Card containerStyle={styles.createAquariumContainer}>
        <View>
          <Text style={styles.createAquariumHeadingText}>
            Are you already registered?
          </Text>
          <Text style={styles.createAquariumText}>
            Log in to synchronise your aquarium and settings
          </Text>
          <Button
            title={'Log in'}
            type={'clear'}
            buttonStyle={Theme.buttonStyle}
            containerStyle={styles.createAquariumButtonContainer}
          />
        </View>
      </Card>
      </ThemeProvider>
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
      <ScrollView style={styles.container}>
        {Dimensions.get('window').width >= 1024 ? (
          <View style={styles.floatingView}>
            <View style={styles.cataloguesView}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.data}
                renderItem={this.item}
                numColumns={2}
              />
              {this.viewAquariumConatiner()}
            </View>

            <View style={styles.leftColumn}>
              <PremiumVersionCard />
              <View style={styles.switchRow}>
                <Text style={styles.switchText}>Show on compatible</Text>
                <Switch />
              </View>
              <Divider color={GREY_LINE} />
              {this.createAquariumContainer()}
              {this.loginAquariumConatiner()}
            </View>
          </View>
        ) : (
          <View>
            <PremiumVersionCard />
            <View style={styles.switchRow}>
              <Text style={styles.switchText}>Show on compatible</Text>
              <Switch />
            </View>
            <Divider color={GREY_LINE} />
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.data}
              renderItem={this.item}
              numColumns={Dimensions.get('window').width >= 1024 ? 2 : 1}
            />
            {this.createAquariumContainer()}
            {this.viewAquariumConatiner()}
            {this.loginAquariumConatiner()}
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  createAquariumContainer: {
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  createAquariumHeadingText: {
    fontSize: 18,
    fontFamily: 'SFProDisplay-Bold',
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
    fontFamily: 'SFProDisplay-Bold',
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
  iconText: {
    fontSize: 18,
    fontFamily: 'SFProDisplay-Regular',
  },
  bubbleView: {
    borderRadius: 20,
    backgroundColor: GREY_LINE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
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
    fontFamily: 'SFProDisplay-Regular',
  },
  container: {
    flex: 1,
    marginBottom: DeviceInfo.getDeviceId() === 'iPhone10,3'? 20: 0
  },
  floatingView: {
    flex: 1,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cataloguesView: {
    width: Dimensions.get('window').width * 0.66,
  },
  leftColumn: {
    width: Dimensions.get('window').width * 0.33,
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
    fontFamily: 'SFProDisplay-Regular',
  },
});

export default CataloguesScreen;
