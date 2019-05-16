import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LeftRightHeader from '../components/Headers/leftRightHeader';
import TitleHeader from '../components/Headers/titleHeader';
import { Button, Card, Divider, ListItem, ThemeProvider } from 'react-native-elements';
import {
  BLACK,
  DRAWER_GREY,
  GREY_LINE,
  PRIMARY_BLUE,
  WHITE,
} from '../Theme/colors';
import { Content, Container } from 'native-base';
import icoMoonConfig from '../selection';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { MAX_WIDTH_IPAD } from '../utils/utilities';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import HeadingBar from '../components/HeadingBar';
import {Theme} from "../Theme/ThemeProvider";
import DeviceInfo from "react-native-device-info";
const FontIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icons.ttf',
);

class AquariumsScreen extends Component {
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
      headerTitle: <TitleHeader navigation={navigation} text={'Aquariums'} />,
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
      list: [
        {
          id: 1,
          title: 'Equipment and Accessories',
          icon: 'selection_overview',
          custom: false,
        },
        {
          id: 2,
          title: 'Equipments only',
          icon: 'info',
          custom: false,
        },
        {
          id: 3,
          title: 'Fishes',
          icon: 'fullscreen',
          custom: false,
        },
      ],
    };
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
            buttonStyle={Theme.buttonStyle}
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
            buttonStyle={Theme.buttonStyle}
            containerStyle={styles.createAquariumButtonContainer}
          />
        </View>
      </Card>
        </ThemeProvider>
    );
  };

  loginAquariumContainer = () => {
    return (
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
            buttonStyle={styles.createAquariumButton}
            containerStyle={styles.createAquariumButtonContainer}
          />
        </View>
      </Card>
    );
  };

  flatListContent = () => (
    <View style={styles.flatListContainerStyle}>
      <Divider color={GREY_LINE} />

      <FlatList
        data={this.state.list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
      />
    </View>
  );

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        // onPress={() =>
        //     this.props.navigation.navigate(this.onPressRow(item.title))
        // }
        key={index}
        title={item.title}
        bottomDivider
        titleStyle={styles.listText}
        leftIcon={() => {
          if (item.custom !== true) {
            return <FontIcon name={item.icon} color={BLACK} size={25} />;
          } else {
            return (
              <TouchableOpacity
                style={[
                  styles.checkBoxRowInner,
                  {
                    backgroundColor: this.state.checkedTwo
                      ? PRIMARY_BLUE
                      : WHITE,
                  },
                ]}
                onPress={this.onPressCheckedTwo}
              >
                {this.state.checkedTwo ? (
                  <IconFontAwesome name={'check'} color={WHITE} size={15} />
                ) : null}
              </TouchableOpacity>
            );
          }
        }}
        chevron
      />
    );
  };

  render() {
    return (
      <ThemeProvider theme={Theme}>
      <Container style={styles.container}>
        <ScrollView style={styles.content}>
          {Dimensions.get('window').width > MAX_WIDTH_IPAD ? (
            <Content contentContainerStyle={styles.tabView}>
              <View style={styles.tabViewRight}>
                <HeadingBar heading={'YOUR OTHER AQUARIUMS'} />
                {this.flatListContent()}
              </View>
              <View style={styles.tabViewLeft}>
                {this.loginAquariumContainer()}
                {this.createAquariumContainer()}
                {this.viewAquariumConatiner()}
              </View>
            </Content>
          ) : (
            <Content contentContainerStyle={styles.content}>
              {this.loginAquariumContainer()}
              {this.createAquariumContainer()}
              {this.viewAquariumConatiner()}
              <HeadingBar heading={'YOUR OTHER AQUARIUMS'} />
              {this.flatListContent()}
            </Content>
          )}
        </ScrollView>
        <View style={styles.footer}>
          <Button
            title={'Add new aquarium'}
            containerStyle={styles.buttonContainer}
            buttonStyle={Theme.buttonStyle}
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
      marginBottom: DeviceInfo.getDeviceId() === 'iPhone10,3'? 20: 0
  },
  content: {
    flex: 0.9,
  },
  footer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DRAWER_GREY,
  },
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
    fontFamily: 'SFProDisplay-Regular',
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
    fontFamily: 'SFProDisplay-Regular',
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
    fontFamily: 'SFProDisplay-SemiBold',
    paddingRight: 10,
  },
  showButton: {
    borderRadius: 10,
    borderColor: PRIMARY_BLUE,
    borderWidth: 1,
    backgroundColor: WHITE,
  },
  newButtonIcon: {
    fontFamily: 'SFProDisplay-SemiBold',
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
  buttonContainer: {
    backgroundColor: PRIMARY_BLUE,
    marginHorizontal: 15,
    marginVertical: 10,
    minWidth: 350,
  },
  button: {
    borderRadius: 5,
  },
  flatListContainerStyle: {
    backgroundColor: WHITE,
  },
  listText: {
    fontSize: 20,
    paddingLeft: 8,
    fontFamily: 'SFProDisplay-Regular',
  },
  checkBoxRowInner: {
    borderRadius: 12.5,
    height: 25,
    width: 25,
    borderColor: GREY_LINE,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default AquariumsScreen;
