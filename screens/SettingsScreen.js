import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  Divider,
  Card,
  Avatar,
  Button,
  SocialIcon,
  ThemeProvider,
} from 'react-native-elements';
import {
  BLACK,
  GREY_LINE,
  LIGHT_BLUE,
  PRIMARY_BLUE,
  SETTING_BG,
  WHITE,
} from '../Theme/colors';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import PremiumVersionCard from '../components/PremiumVersionCard';
import TitleHeader from '../components/Headers/titleHeader';
import LeftHeader from '../components/Headers/leftRightHeader';

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <TitleHeader text={'Settings'} />,
      headerLeft: <LeftHeader navigation={navigation} text={'Close'} />,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: 1,
    };
  }

  languageSelectorRow = () => {
    return (
      <View style={styles.rowContainer}>
        <View style={styles.languageSelectorRowOuter}>
          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <Text style={styles.languageText}>Language</Text>
          </View>
          <View style={styles.languageSelectorRowInner}>
            <Text style={styles.innerText}>
              {this.state.checked === 1 ? 'English' : ''}
              {this.state.checked === 2 ? 'Deutsch' : ''}
              {this.state.checked === 3 ? 'Francais' : ''}
            </Text>
            <IconEvil
              name={'chevron-up'}
              size={40}
              color={GREY_LINE}
              style={styles.languageIcon}
            />
          </View>
        </View>
        <Divider style={styles.divider} />
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
                backgroundColor:
                  this.state.checked === pressed ? PRIMARY_BLUE : WHITE,
              },
            ]}
            onPress={() => {
              this.setState({ checked: pressed });
            }}
          >
            {this.state.checked === pressed ? (
              <IconFontAwesome name={'check'} color={WHITE} size={15} />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.textCheckBoxRowInner}>{language}</Text>
        </View>
        <Divider style={styles.divider} />
      </View>
    );
  };

  aquerakeCard = () => {
    return (
      <Card containerStyle={styles.aquarekaContainer}>
        <View style={styles.aquarekaContainerOuter}>
          <View style={styles.logoView}>
            <Avatar
              rounded={true}
              size={'medium'}
              source={require('../from-real-app/assets/logo.png')}
            />
            <Text style={styles.aquarekaIconText}>Aqureake Dev</Text>
          </View>
          <View>
            <IconFontAwesome name={'sign-out'} size={30} color={BLACK} />
          </View>
        </View>
        <View style={styles.syncText}>
          <Text>Last synchronisation: Today</Text>
        </View>
        <Button
          title={'Synchronise now'}
          icon={
            <IconFontAwesome
              name={'refresh'}
              size={20}
              color={PRIMARY_BLUE}
              style={styles.syncButtonIcon}
            />
          }
          type={'outline'}
          buttonStyle={styles.syncButton}
          containerStyle={{ marginTop: 15 }}
          titleStyle={styles.syncButtonTitle}
        />
      </Card>
    );
  };

  facebookCard = () => {
    return (
      <Card containerStyle={styles.aquarekaContainer}>
        <View style={styles.syncText}>
          <Text style={styles.fbHeadingText}>
            Sign in to save your aquarium on your server
          </Text>
          <Text style={styles.fbText}>
            You can download them on all your devices.
          </Text>
          <Text style={styles.syncText}>
            It's completely free. Aquareka will never spam you or your friends.
            Ever
          </Text>
        </View>
        <SocialIcon
          type={'facebook'}
          title={'Sign in with Facebook'}
          button={true}
          style={styles.socialIcon}
        />
      </Card>
    );
  };

  render() {
    return (
      <ThemeProvider>
        <ScrollView style={styles.rowContainer}>
          <View style={styles.settingView}>
            <View style={styles.languageContainer}>
              {this.languageSelectorRow()}
              {this.checkBoxRow('English', 1)}
              {this.checkBoxRow('Deutsch', 2)}
              {this.checkBoxRow('Francais', 3)}
            </View>
            <View style={styles.measurementContainer}>
              <Text style={styles.measurementText}>Measurements</Text>
            </View>
            <Divider style={styles.divider} />
            {this.aquerakeCard()}
            {this.facebookCard()}
            <PremiumVersionCard />
          </View>
        </ScrollView>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  languageSelectorRowOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languageSelectorRowInner: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {
    fontSize: 18,
    fontWeight: '500',
    color: GREY_LINE,
  },
  checkBoxRowOuter: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxRowInner: {
    borderRadius: 15,
    height: 30,
    width: 30,
    borderColor: GREY_LINE,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCheckBoxRowInner: {
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 10,
  },
  languageIcon: {
    paddingLeft: 5,
    paddingTop: 5,
  },
  languageText: {
    fontSize: 18,
    fontWeight: '500',
  },
  divider: {
    backgroundColor: GREY_LINE,
  },
  aquarekaContainer: {
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  aquarekaContainerOuter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aquarekaIconText: {
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 20,
  },
  syncText: { alignItems: 'center' },
  syncButtonIcon: {
    fontWeight: '200',
    paddingRight: 10,
  },
  syncButton: {
    borderRadius: 10,
    borderColor: PRIMARY_BLUE,
    borderWidth: 1,
  },
  syncButtonTitle: { color: PRIMARY_BLUE },
  fbHeadingText: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 20,
    textAlign: 'center',
  },
  fbText: {
    textAlign: 'center',
    marginTop: 10,
  },
  socialIcon: {
    borderRadius: 10,
    marginTop: 10,
  },
  rowContainer: {
    flex: 1,
  },
  settingView: {
    flex: 1,
    backgroundColor: SETTING_BG,
    marginHorizontal: Dimensions.get('window').width >= 1024 ? 300 : 0,
  },
  languageContainer: { backgroundColor: WHITE },
  measurementContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  measurementText: { fontSize: 18, fontWeight: '500', color: GREY_LINE },
});

export default SettingsScreen;
