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
          icon: 'selection_overview',
        },
        {
          id: 3,
          title: 'Settings',
          icon: 'settings',
        },
        {
          id: 4,
          title: 'Credits',
          icon: 'credits',
        },
        {
          id: 5,
          title: 'Feedback',
          icon: 'feedback',
        },
        {
          id: 6,
          title: 'Catalogue',
          icon: 'catalogues',
        },
        {
          id: 7,
          title: 'Item',
          icon: 'fullscreen',
        },
          {
              id: 8,
              title: 'Edit',
              icon: 'info',
          },
          {
              id: 9,
              title: 'Issues',
              icon: 'fullscreen',
          },
          {
              id: 10,
              title: 'Setup',
              icon: 'undo',
          },
      ],
    };
  }

  onPressRow = text => {
    if (text === 'Catalogues') {
      return 'Catalogues';
    } else if (text === 'Aquariums') {
      return 'Aquarium';
    } else if (text === 'Settings') {
      return 'Settings';
    } else if (text === 'Credits') {
      return 'Credits';
    } else if (text === 'Feedback') {
      return 'Feedback';
    } else if (text === 'Catalogue') {
      return 'Catalogue';
    } else if (text === 'Item') {
      return 'Item';
    } else if (text === 'Edit') {
        return 'Edit';
    } else if (text === 'Issues') {
        return 'Issues';
    } else if (text === 'Setup') {
        return 'Setup';
    } else if (text === 'Item') {
        return 'Item';
    } else if (text === 'Item') {
        return 'Item';
    } else if (text === 'Item') {
        return 'Item';
    }
  };

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        onPress={() =>
          this.props.navigation.navigate(this.onPressRow(item.title))
        }
        key={index}
        title={item.title}
        bottomDivider
        titleStyle={styles.text}
        leftIcon={() => {
          return <FontIcon name={item.icon} color={BLACK} size={30} />;
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
