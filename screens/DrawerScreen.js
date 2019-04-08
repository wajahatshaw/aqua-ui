import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import { Container, Content } from 'native-base';
import { BLACK, DRAWER_GREY, GREY_LINE, WHITE } from '../Theme/colors';
import Icon from 'react-native-vector-icons/EvilIcons';

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
          icon: 'chart',
        },
        {
          id: 2,
          title: 'Aquariums',
          icon: 'trophy',
        },
        {
          id: 1,
          title: 'Settings',
          icon: 'gear',
        },
        {
          id: 1,
          title: 'Credits',
          icon: 'heart',
        },
        {
          id: 1,
          title: 'Feedback',
          icon: 'comment',
        },
      ],
    };
  }

  onPressRow = text => {
    if (text === 'Catalogues') {
      return 'Catalogues';
    } else if (text === 'Aquariums') {
      return 'Settings';
    } else if (text === 'Settings') {
      return 'Settings';
    } else if (text === 'Credits') {
      return 'Settings';
    } else {
      return 'Settings';
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
        leftIcon={() => <Icon name={item.icon} color={BLACK} size={35} />}
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
