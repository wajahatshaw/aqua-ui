import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import { Container, Content } from 'native-base';
import { BLACK, DRAWER_GREY, GREY_LINE, WHITE } from '../Theme/colors';
import Icon from 'react-native-vector-icons/EvilIcons';
import icoConfigMoon from '../selection';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
const FontIcon = createIconSetFromIcoMoon(
    icoConfigMoon,
    'icomoon',
    'icons.ttf',
);

class DrawerScreen extends Component {
  static navigationOptions = {
    header: (
      <Image
        source={require('../from-real-app/assets/logo.png')}
        resizeMode={'contain'}
        style={{
          height: 80,
          width: 180,
        }}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          title: 'Catalogues',
          icon: 'catalogues',
        },
        {
          id: 2,
          title: 'Aquariums',
          icon: 'fish',
        },
        {
          id: 1,
          title: 'Settings',
          icon: 'settings',
        },
        {
          id: 1,
          title: 'Credits',
          icon: 'credits',
        },
        {
          id: 1,
          title: 'Feedback',
          icon: 'feedback',
        },
      ],
    };
  }

  onPressRow = text => {
    if (text === 'Catalogues') {
      return 'catalogues';
    } else if (text === 'Aquariums') {
      return 'fullscreen';
    } else if (text === 'Settings') {
      return 'settings';
    } else if (text === 'Credits') {
      return 'credits';
    } else if(text === 'Feedback'){
      return 'feedback';
    }
  };

  onPress = item => this.props.navigation.navigate(this.onPressRow(item.title));

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        onPress={this.onPress}
        key={index}
        title={item.title}
        bottomDivider
        titleStyle={styles.text}
        leftIcon={() => {
          return(
              <FontIcon
              name={item.icon}
              color={BLACK}
              size={30}
              />
          )
        }}
        chevron
      />
    );
  };

  logoContent = () => (
    <View style={styles.imageView}>
      <Image
        source={require('../from-real-app/assets/logo.png')}
        resizeMode={'contain'}
        style={styles.drawerHeaderImageStyle}
      />
    </View>
  );

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

  render() {
    return (
      <Container>
        <Content style={styles.drawerContentStyle}>
          {this.logoContent()}
          {this.flatListContent()}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  drawerContentStyle: {
    flex: 1,
    backgroundColor: DRAWER_GREY,
  },
  flatListContainerStyle: {
    backgroundColor: WHITE,
  },
  drawerHeaderImageStyle: {
    height: 80,
    width: 180,
  },
  drawerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 8,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default DrawerScreen;
