import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class titleHeader extends Component {
    render() {
        const { text } = this.props;
        return <Text style={styles.text}>{text}</Text>;
    }
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});
