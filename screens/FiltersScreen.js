import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, Dimensions } from 'react-native';
import { Content, Container, Item, Input, Label } from 'native-base';
import { Button, Divider, ThemeProvider } from 'react-native-elements';
import LeftRightHeader from '../components/Headers/leftRightHeader';
import TitleHeader from '../components/Headers/titleHeader';
import HeadingBar from '../components/HeadingBar';
import { DRAWER_GREY, GREY_LINE, WHITE } from '../Theme/colors';
import PremiumVersionCard from '../components/PremiumVersionCard';
import {Theme} from "../Theme/ThemeProvider";
import DeviceInfo from "react-native-device-info";

class FiltersScreen extends Component {
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
      headerTitle: <TitleHeader navigation={navigation} text={'Filters'} />,
      headerLeft: (
        <LeftRightHeader
          text={'Cancel'}
          navigation={navigation}
          onPress={() => navigation.goBack()}
        />
      ),
    };
  };

  render() {
    return (
      <ThemeProvider theme={Theme}>
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <HeadingBar heading={'SCIENTIFIC NAME'} />
          <View style={styles.item}>
            <Item floatingLabel={true}>
              <Label style={styles.label}>Volume</Label>
              <Input style={styles.item} />
            </Item>
          </View>
          <View style={styles.row}>
            <Text>Show only compatible</Text>
            <Switch />
          </View>
          <Divider style={styles.divider} />
          <PremiumVersionCard />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
      marginBottom: DeviceInfo.getDeviceId() === 'iPhone10,3'? 20: 0
  },
  content: {
    flex: 1,
    backgroundColor: DRAWER_GREY,
    marginHorizontal: Dimensions.get('window').width >= 1024 ? 300 : 0,
  },
  label: {
    color: GREY_LINE,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontFamily: 'SFProDisplay-Regular',
  },
  divider: {
    backgroundColor: GREY_LINE,
    height: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  item: {
    paddingVertical: 5,
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

export default FiltersScreen;
