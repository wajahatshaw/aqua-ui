import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {LIGHT_BLUE} from "../Theme/colors";
import {Button,Card} from "react-native-elements";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

class PremiumVersionCard extends Component{
    constructor(props){
        super(props)
    }


    render() {
        return (<Card containerStyle={{backgroundColor: LIGHT_BLUE, paddingVertical: 10, paddingHorizontal: 15, marginTop: 15}}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: '700', paddingLeft: 20, textAlign: 'center'}}>
                    Discover Quickly!
                </Text>
                <Text style={{textAlign: 'center', marginTop: 10}}>In the premium version you can filter for compatibility with your selection</Text>
            </View>
            <Button type={'outline'}
                    title={'Unlock Premium'}
                    icon={
                        <IconFontAwesome
                            name={'star'}
                            size={20}
                            color={'lightgreen'}
                            style={{fontWeight: '200', paddingRight: 10}}
                        />
                    }
                    type={'outline'}
                    buttonStyle={{ borderRadius: 10, borderColor: 'lightgreen', borderWidth: 1, backgroundColor: '#FFFFFF'}}
                    containerStyle={{marginTop: 15}}
                    titleStyle={{color: 'lightgreen'}}/>
        </Card>)
    }
}

export default PremiumVersionCard
