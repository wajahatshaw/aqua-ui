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
import { GREY_LINE, SETTING_BG } from '../Theme/colors';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import PremiumVersionCard from '../components/PremiumVersionCard';

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Settings</Text>
      ),
      headerLeft: (
        <TouchableOpacity
          style={{ paddingHorizontal: 10 }}
          onPress={() => navigation.pop()}
        >
          <Text style={{ color: 'blue', fontSize: 18 }}>Close</Text>
        </TouchableOpacity>
      ),
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
      <View style={{ flex: 1 }}>
        <View style={styles.languageSelectorRowOuter}>
          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Language</Text>
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
              style={{ paddingLeft: 5, paddingTop: 5 }}
            />
          </View>
        </View>
        <Divider style={{ backgroundColor: GREY_LINE }} />
      </View>
    );
  };

  checkBoxRow = (language, pressed) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.checkBoxRowOuter}>
          <TouchableOpacity
            style={[
              styles.checkBoxRowInner,
              {
                backgroundColor:
                  this.state.checked === pressed ? '#157EFB' : '#FFFFFF',
              },
            ]}
            onPress={() => {
              this.setState({ checked: pressed });
            }}
          >
            {this.state.checked === pressed ? (
              <IconFontAwesome name={'check'} color={'#FFFFFF'} size={15} />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.textCheckBoxRowInner}>{language}</Text>
        </View>
        <Divider style={{ backgroundColor: GREY_LINE }} />
      </View>
    );
  };

  aquerakeCard = () => {
    return (
      <Card containerStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar
              rounded={true}
              size={'medium'}
              source={require('../from-real-app/assets/logo.png')}
            />
            <Text style={{ fontSize: 20, fontWeight: '500', paddingLeft: 20 }}>
              Aqureake Dev
            </Text>
          </View>
          <View>
            <IconFontAwesome name={'sign-out'} size={30} color={'#000000'} />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text>Last synchronisation: Today</Text>
        </View>
        <Button
          title={'Synchronise now'}
          icon={
            <IconFontAwesome
              name={'refresh'}
              size={20}
              color={'#157EFB'}
              style={{ fontWeight: '200', paddingRight: 10 }}
            />
          }
          type={'outline'}
          buttonStyle={{
            borderRadius: 10,
            borderColor: '#157EFB',
            borderWidth: 1,
          }}
          containerStyle={{ marginTop: 15 }}
          titleStyle={{ color: '#157EFB' }}
        />
      </Card>
    );
  };

  facebookCard = () => {
    return (
      <Card containerStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              paddingLeft: 20,
              textAlign: 'center',
            }}
          >
            Sign in to save your aquarium on your server
          </Text>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>
            You can download them on all your devices.
          </Text>
          <Text style={{ textAlign: 'center' }}>
            It's completely free. Aquareka will never spam you or your friends.
            Ever
          </Text>
        </View>
        <SocialIcon
          type={'facebook'}
          title={'Sign in with Facebook'}
          button={true}
          style={{ borderRadius: 10, marginTop: 10 }}
        />
      </Card>
    );
  };

  render() {
    return (
      <ThemeProvider>
        <View
          style={{ alignItems: 'center', flex: 1, backgroundColor: SETTING_BG }}
        >
          <ScrollView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#FFFFFF' }}>
              {this.languageSelectorRow()}
              {this.checkBoxRow('English', 1)}
              {this.checkBoxRow('Deutsch', 2)}
              {this.checkBoxRow('Francais', 3)}
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: '500', color: GREY_LINE }}
              >
                Measurements
              </Text>
            </View>
            <Divider style={{ backgroundColor: GREY_LINE }} />
            {this.aquerakeCard()}
            {this.facebookCard()}
            <PremiumVersionCard />
          </ScrollView>
        </View>
      </ThemeProvider>
    );
  }

  getPaddingDeviceSize = () => {
    if (Dimensions.get('window').width > 786) {
      return { paddingHorizontal: 200 };
    } else {
      return { paddingHorizontal: 0 };
    }
  };
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
});

export default SettingsScreen;
