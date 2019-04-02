import React,{Component} from 'react'
import {View, ImageBackground, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

class onBoardingScreen extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ImageBackground style={{flex: 1}} source={require('../from-real-app/assets/onboarding.jpg')} resizeMode={'cover'}>
                <View style={{flex: 0.35, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../from-real-app/assets/logo.png')} style={{height: 80, width: 250}} resizeMode={'contain'} />
                    <Text style={styles.text}>The App helps you plan your own aquarium</Text>
                </View>
                <View style={{flex: 0.35}}>

                </View>
                <View style={{flex: 0.3, justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Catalogues')} style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 25, borderRadius: 5, backgroundColor: '#000000', opacity: 0.5, paddingVertical: 15}}>
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 55,
        textAlign: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18
    }
})



export default onBoardingScreen
