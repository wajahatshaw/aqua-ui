import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {BLACK} from "../Theme/colors";
import icoConfigMoon from '../selection';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
const FontIcon = createIconSetFromIcoMoon(
    icoConfigMoon,
    'icomoon',
    'icons.ttf',
);

export const OptimalCondition = ({}) => (
    <View style={styles.iconRow}>
        <View style={styles.rowColumn}>
            <FontIcon name={'equipment'} size={25} color={BLACK} />
            <Text style={styles.conditionText}>100I</Text>
        </View>
        <View style={styles.rowColumn}>
            <FontIcon name={'temperature'} size={25} color={BLACK} />
            <Text style={styles.conditionText}>21c - 25c</Text>
        </View>
        <View style={styles.rowColumn}>
            <FontIcon name={'pH'} size={25} color={BLACK} />
            <Text style={styles.conditionText}>6 - 6.5</Text>
        </View>
        <View style={styles.rowColumn}>
            <FontIcon name={'dKH'} size={25} color={BLACK} />
            <Text style={styles.conditionText}>4 - 10</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 50,
        marginVertical: 15,
    },
    rowColumn: {
        alignItems: 'center',
    }
})
