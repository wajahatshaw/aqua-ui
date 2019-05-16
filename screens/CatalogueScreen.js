import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import { Container, Content } from 'native-base';
import { Button } from 'react-native-elements';
import { BLACK, GREY_LINE, SETTING_BG, WHITE } from '../Theme/colors';
import LeftRightHeader from '../components/Headers/leftRightHeader';
import TitleHeader from '../components/Headers/titleHeader';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection';
import SearchBar from '../components/SearchBar';
import { MAX_WIDTH_IPAD } from '../utils/utilities';
import DeviceInfo from "react-native-device-info";
const FontIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icons.ttf',
);

class CatalogueScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <LeftRightHeader
          text={'Filters'}
          navigation={navigation}
          iconName={null}
          // onPress={() => navigation.navigate('Catalogues')}
        />
      ),
      headerTitle: <TitleHeader navigation={navigation} text={'Fish'} />,
      headerLeft: (
        <LeftRightHeader
          text={'Catalogues'}
          navigation={navigation}
          onPress={() => navigation.navigate('Catalogues')}
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
          image: '../Images/goldfish.png',
        },
        {
          id: 2,
          image: '../Images/smallfish.png',
        },
        {
          id: 3,
          image: '../Images/spider.png',
        },
        {
          id: 4,
          image: '../Images/longfish.png',
        },
        {
          id: 5,
          image: '../Images/goldfish.png',
        },
        {
          id: 6,
          image: '../Images/smallfish.png',
        },
        {
          id: 7,
          image: '../Images/spider.png',
        },
        {
          id: 8,
          image: '../Images/longfish.png',
        },
      ],
    };
  }

  CataloguesCard = item => {
    return (
      <TouchableOpacity style={styles.card}>
        <ImageBackground
          style={styles.background}
          source={require('../Images/goldfish.png')}
          resizeMode={'cover'}
        >
          <FontIcon
            name={'checked'}
            size={20}
            color={WHITE}
            style={styles.badge}
          />
        </ImageBackground>
        <View style={styles.backgroundLess}>
          <Text style={styles.greyText}>Barbus Fasciloutus</Text>
          <Text style={styles.headingText}>Acrossocheilus paradoxus</Text>
          {/*<View style={styles.row}>*/}
          <View style={styles.rowSpaceBetween}>
            <View styles={styles.innerCell}>
              <FontIcon
                name={'equipment'}
                size={20}
                color={BLACK}
                style={styles.icon}
              />
              <Text>761</Text>
            </View>
            <View styles={styles.innerCell}>
              <FontIcon
                name={'temperature'}
                size={20}
                color={BLACK}
                style={styles.icon}
              />
              <Text>21C - 26C</Text>
            </View>
            <View styles={styles.innerCell}>
              <FontIcon
                name={'measurement_horizontal'}
                size={20}
                color={BLACK}
                style={styles.icon}
              />
              <Text>12cm</Text>
            </View>
          </View>
          {/*</View>*/}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.contentContainerStyle}>
          <SearchBar />
        </View>
        <Content style={styles.content}>
          <View style={styles.listView}>
            <FlatList
              data={this.state.list}
              keyExtractor={(item, index) => item.id}
              renderItem={item => this.CataloguesCard(item)}
              numColumns={
                Dimensions.get('window').width > MAX_WIDTH_IPAD ? 2 : 1
              }
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default CatalogueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SETTING_BG,
      marginBottom: DeviceInfo.getDeviceId() === 'iPhone10,3'? 20: 0
  },
  content: {},
  contentContainerStyle: { backgroundColor: WHITE, paddingVertical: 10 },
  card: {
    flex: 1,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: WHITE,
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 0.8,
    elevation: 1,
    flexDirection: 'row',
    maxHeight: 150,
    overflow: 'hidden',
  },
  background: {
    flex: 0.5,
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundLess: {
    flex: 0.5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  greyText: {
    color: GREY_LINE,
    fontSize: 12,
    fontFamily: 'SFProDisplay-Bold',
  },
  headingText: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: 'SFProDisplay-Bold',
  },
  rowSpaceBetween: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerCell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  listView: {
    marginHorizontal: Dimensions.get('window').width >= 1024 ? 100 : 0,
  },
});
