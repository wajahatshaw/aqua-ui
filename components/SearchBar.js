import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {Container, Header, Item, Input, Icon, Button, Text} from 'native-base'
import {DRAWER_GREY, GREY_LINE, SETTING_BG} from "../Theme/colors";

class SearchBar extends Component{
    render(){
        return(
                <View style={styles.container}>
                    <Item style={styles.item}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 15,
        backgroundColor: DRAWER_GREY,
        paddingHorizontal: 5
    },
    item: {

    }
})

export default SearchBar
