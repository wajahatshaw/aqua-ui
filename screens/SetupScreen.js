import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import LeftRightHeader from '../components/Headers/leftRightHeader';
import { Container, Content } from 'native-base';
import icoConfigMoon from '../selection';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import {
  BLACK,
  DRAWER_GREY,
  GREY_LINE,
  PRIMARY_BLUE,
  SETTING_BG,
  SKIN,
  WHITE,
} from '../Theme/colors';
import {
  Button,
  Divider,
  ListItem,
  ThemeProvider,
} from 'react-native-elements';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Theme } from '../Theme/ThemeProvider';
import DeviceInfo from "react-native-device-info";
const FontIcon = createIconSetFromIcoMoon(
  icoConfigMoon,
  'icomoon',
  'icons.ttf',
);

class SetupScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <LeftRightHeader
          text={'Aquarium'}
          navigation={navigation}
          onPress={() => navigation.goBack()}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      checkedTwo: true,
      list: [
        {
          id: 1,
          title: '1. Equipment and Accessories',
          icon: 'lock',
          custom: true,
        },
        {
          id: 2,
          title: '2. Add plants',
          icon: 'lock',
          custom: false,
        },
      ],
    };
  }
  firstAquariumView = () => {
    return (
      <View style={styles.innerContainer}>
        <Text style={styles.headingText}>
          Are you ready to turn your selection into a real aquarium?
        </Text>
        <Text style={styles.text}>
          Aquareka will take you through a step-by-step process to help you get
          a good start! You can safely press "Close" at any time and continue
          the process later. No progress will be lost.
        </Text>
        <Text style={styles.text}>
          All steps are skipable. You can skip a step at your own risk.
        </Text>
      </View>
    );
  };

  warningView = () => {
    return (
      <View style={styles.warningContainer}>
        <View style={styles.warningHeading}>
          <FontIcon name={'warning'} color={BLACK} size={20} />
          <Text style={styles.warningHeadingText}>Caution</Text>
        </View>
        <Text style={styles.text}>
          Aquareka does not take any resposiblity in case something goes wrong
          while you follow the step!
        </Text>
      </View>
    );
  };

  termsView = () => {
    return (
      <View style={styles.innerContainer}>
        <Text>
          The process serves to structure your activities. It's not a success to
          guarantee! Please be careful and inform yourself additionally at each
          step.
        </Text>
      </View>
    );
  };

  checkBoxRow = (language, pressed) => {
    return (
      <View style={styles.rowContainer}>
        <View style={styles.checkBoxRowOuter}>
          <TouchableOpacity
            style={[
              styles.checkBoxRowInner,
              {
                backgroundColor: this.state.checked ? PRIMARY_BLUE : WHITE,
              },
            ]}
            onPress={() => {
              this.setState({ checked: !this.state.checked });
            }}
          >
            {this.state.checked ? (
              <IconFontAwesome name={'check'} color={WHITE} size={15} />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.textCheckBoxRowInner}>{language}</Text>
        </View>
        <Divider style={styles.divider} />
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

  onPressCheckedTwo = () => {
    this.setState({ checkedTwo: !this.state.checkedTwo });
  };

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
            <Content contentContainerStyle={Theme.content}>
              {this.firstAquariumView()}
              {this.warningView()}
              {this.termsView()}
              <Divider color={GREY_LINE} style={Theme.divider} />
              {this.checkBoxRow('I accept the terms', 1)}
              <Divider color={GREY_LINE} style={Theme.divider} />
              <View style={styles.confirmContainer}>
                <FontIcon name={'lightbulb'} color={GREY_LINE} size={30} />
                <Text style={styles.confirmText}>
                  Read completely and confirm
                </Text>
              </View>
              <View style={styles.settingsBg}>
                <Text style={styles.greyText}>MANDATORY EQUIPMENT</Text>
                <Text style={styles.greyText}>
                  Very often the best choice is to buy a complete package
                  including the tank. Send all the mandatory equipment
                </Text>
              </View>
              <View style={styles.tankView}>
                <Text style={styles.tankText}>Tank</Text>
                <View style={styles.tankRow}>
                  <FontIcon name={'relation'} color={BLACK} size={25} />
                  <Text style={styles.greyText}>Minimum 280I</Text>
                </View>
              </View>
              <Divider color={GREY_LINE} style={Theme.divider} />
              {this.fishRow('fullscreen', BLACK)}
              <Divider color={GREY_LINE} style={Theme.divider} />
              {this.flatListContent()}
            </Content>
          </ScrollView>
          <View style={styles.footer}>
            <Button
              title={'Next'}
              titleStyle={styles.buttonText}
              type={'solid'}
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
            />
          </View>
        </Container>
      </ThemeProvider>
    );
  }
}

export default SetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
      marginBottom: DeviceInfo.getDeviceId() === 'iPhone10,3'? 20: 0
  },
  content: { flex: 0.8 },
  contentContainer: {
    marginHorizontal: Dimensions.get('window').width >= 1024 ? 300 : 0,
  },
  footer: {
    flex: 0.1,
    backgroundColor: SETTING_BG,
  },
  warningHeadingText: {
    marginLeft: 3,
    fontFamily: 'SFProDisplay-Regular',
  },
  warningContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: SKIN,
  },
  warningHeading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 20,
    fontFamily: 'SFProDisplay-Bold',
    textAlign: 'center',
  },
  text: {
    marginTop: 15,
    fontFamily: 'SFProDisplay-Regular',
  },
  divider: {
    height: 1,
  },
  checkBoxRowOuter: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
  textCheckBoxRowInner: {
    paddingLeft: 10,
  },
  rowContainer: {
    flex: 1,
  },
  confirmText: {
    marginLeft: 5,
    fontFamily: 'SFProDisplay-Semibold',
    color: GREY_LINE,
  },
  greyText: {
    color: GREY_LINE,
    marginHorizontal: 15,
    marginVertical: 10,
    fontFamily: 'SFProDisplay-Regular',
  },
  confirmContainer: {
    paddingVertical: 10,
    backgroundColor: SETTING_BG,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsBg: {
    backgroundColor: DRAWER_GREY,
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
  view: {
    flex: 0.25,
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
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    maxWidth: 350,
    alignSelf: 'center',
  },
  buttonText: {
    color: WHITE,
    fontFamily: 'SFProDisplay-Regular',
  },
  button: {
    borderRadius: 5,
    backgroundColor: PRIMARY_BLUE,
    minWidth: 350,
  },
  tankView: {
    backgroundColor: WHITE,
    paddingHorizontal: 15,
  },
  tankText: {
    paddingVertical: 10,
    fontFamily: 'SFProDisplay-Regular',
  },
  tankRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatListContainerStyle: {
    backgroundColor: WHITE,
  },
  listText: {
    fontSize: 20,
    fontFamily: 'SFProDisplay-Semibold',
    paddingLeft: 8,
  },
});
