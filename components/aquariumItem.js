import React from 'react'
import {Image,View, TouchableOpacity,Text, ImageBackground} from 'react-native'
import {Card} from 'react-native-elements'
import Icon from 'react-native-vector-icons/EvilIcons'

const item = (textItem) => {
    return(
            <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>

                    <Image source={require('../Images/fish.png')} resizeMode={'cover'} style={{height: 180, width: 350, borderRadius: 20, borderWidth: 1}}/>

                    <Image  source = {
                        require('../Images/fish.png')} resizeMode={'cover'} style={{position: 'absolute', top: 142, left: 0,height: 38, width: 350, borderWidth: 1, borderRadius: 10, borderColor: 'transparent'}} blurRadius={50}/>


                <View style={{flexDirection: 'row', top: 145, left: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', paddingTop: 2}}>
                <View style={{flex: 0.5}}>
                </View>
                <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 20}}>Browse Fish</Text>
            <Icon name={'chevron-right'} size={30} color={'#FFFFFF'} />
                </View>
            </View>
            </TouchableOpacity>
    )
}

export default item
