import React, { Component } from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";

export default class leftRightHeader extends Component {
    render() {
        const { text, navigation, iconName, onPress } = this.props;
        return (
            <View>
            {
                text !== null ?
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => navigation.pop()}
                    >
                        <Text style={styles.text}>{text}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={onPress}>
                        <Icon
                            name={iconName}
                            size={35}
                            color={'blue'}
                            style={styles.iconStyle}
                        />
                    </TouchableOpacity>
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        paddingHorizontal: 10
    },
    buttonStyle: {
        paddingHorizontal: 10
    },
    text: {
        color: 'blue', fontSize: 18
    },
});
