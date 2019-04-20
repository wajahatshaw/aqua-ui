import React,{Component} from 'react'
import {View,TouchableOpacity, StyleSheet} from 'react-native'
import {PRIMARY_BLUE, WHITE} from "../Theme/colors";
import {createIconSetFromIcoMoon} from 'react-native-vector-icons'
import icoConfig from '../selection'
const FontIcon = createIconSetFromIcoMoon(icoConfig, 'icomoon', 'icons.ttf')

class ListButton extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.container}>
                <FontIcon
                name={this.props.name}
                size={35}
                color={WHITE}
                style={styles.icon}
                />
            </TouchableOpacity>
        )
    }
}

export default ListButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_BLUE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 60,
        width: 60
    }
})
