import React, {Component} from 'react'
import {Text, View, TouchableOpacity, ScrollView, Switch, Dimensions, FlatList, Image} from 'react-native'
import {Card, Divider, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/EvilIcons'
import PremiumVersionCard from "../components/PremiumVersionCard";
import Item from '../components/aquariumItem'
import {GREY_LINE} from "../Theme/colors";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

class CataloguesScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerRight: <TouchableOpacity onPress={() => navigation.navigate('Settings')}><Icon name={'gear'}
                                                                                                 size={35}
                                                                                                 color={'blue'}
                                                                                                 style={{paddingHorizontal: 10}}/></TouchableOpacity>,
            headerTitle: <Text style={{fontWeight: 'bold', fontSize: 18}}>Catalogues</Text>,
            headerLeft: <TouchableOpacity onPress={() => navigation.openDrawer()}><Icon name={'navicon'} size={35}
                                                                                        color={'blue'}
                                                                                        style={{paddingHorizontal: 10}}/></TouchableOpacity>
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            data: [{
                id: 1,
                text: 'Browse Fish'
            }, {
                id: 2,
                text: 'Browse Fish'
            }, {
                id: 3,
                text: 'Browse Fish'
            }, {
                id: 4,
                text: 'Browse Fish'
            }]
        }
    }

    box1 = () => {
        return (
            <Card containerStyle={{borderRadius: 10, backgroundColor: '#FFFFFF'}}>
                <View>
                    <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>
                        Create your virtual aquarium with plants and animals of your choice
                    </Text>
                    <Text style={{textAlign: 'center', paddingLeft: 20}}>You will get notes about compatibility and
                        optimal conditions</Text>
                    <Button
                        title={'Create your first aquarium'}
                        type={'solid'}
                        buttonStyle={{borderRadius: 10, borderColor: '#157EFB', borderWidth: 1}}
                        containerStyle={{marginTop: 15}}
                    />
                </View>
            </Card>
        )
    }

    box2 = () => {
        return (
            <Card containerStyle={{borderRadius: 10, backgroundColor: '#FFFFFF'}}>
                <View>
                    <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>
                        Aquarium
                    </Text>
                    <Text style={{textAlign: 'center', paddingLeft: 20}}>Current: Livingroom 200I</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 40,
                        paddingVertical: 20
                    }}>
                        <View style={{alignItems: 'center'}}>
                            <IconFontAwesome name={'product-hunt'} size={40} style={{padding: 5, fontWeight: '500'}}/>
                            <Text style={{fontSize: 18}}>5</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <IconFontAwesome name={'product-hunt'} size={40} style={{padding: 5, fontWeight: '500'}}/>
                            <Text style={{fontSize: 18}}>2</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <IconFontAwesome name={'product-hunt'} size={40} style={{padding: 5, fontWeight: '500'}}/>
                            <Text style={{fontSize: 18}}>0</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <IconFontAwesome name={'product-hunt'} size={40} style={{padding: 5, fontWeight: '500'}}/>
                            <Text style={{fontSize: 18}}>1</Text>
                        </View>
                    </View>
                    <View style={{
                        borderRadius: 20,
                        backgroundColor: GREY_LINE,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        alignSelf: 'center'
                    }}>
                        <Text>virtual aquarium</Text>
                    </View>
                    <Button
                        title={'Go to your aquarium'}
                        type={'clear'}
                        buttonStyle={{borderRadius: 10, borderColor: '#157EFB', borderWidth: 1}}
                        containerStyle={{marginTop: 15}}
                    />
                    <Divider color={GREY_LINE}/>
                    <Button
                        title={'Show all aquariums'}
                        icon={
                            <IconFontAwesome
                                name={'feed'}
                                size={20}
                                color={'#157EFB'}
                                style={{fontWeight: '200', paddingRight: 10}}
                            />
                        }
                        type={'clear'}
                        buttonStyle={{
                            borderRadius: 10,
                            borderColor: '#157EFB',
                            borderWidth: 1,
                            backgroundColor: '#FFFFFF'
                        }}
                        containerStyle={{marginTop: 15}}
                    />
                    <Button
                        title={'Add new aquarium'}
                        icon={
                            <IconFontAwesome
                                name={'plus'}
                                size={20}
                                color={'#157EFB'}
                                style={{fontWeight: '200', paddingRight: 10}}
                            />
                        }
                        type={'clear'}
                        buttonStyle={{
                            borderRadius: 10,
                            borderColor: '#157EFB',
                            borderWidth: 1,
                            backgroundColor: '#FFFFFF'
                        }}
                        containerStyle={{marginTop: 15}}
                    />
                </View>

            </Card>
        )
    }


    box3 = () => {
        return (
            <Card containerStyle={{borderRadius: 10, backgroundColor: '#FFFFFF'}}>
                <View>
                    <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>
                        Are you already registered?
                    </Text>
                    <Text style={{textAlign: 'center', paddingLeft: 20}}>Log in to synchronise your aquarium and
                        settings</Text>
                    <Button
                        title={'Log in'}
                        type={'clear'}
                        buttonStyle={{
                            borderRadius: 10,
                            borderColor: '#157EFB',
                            borderWidth: 1,
                            backgroundColor: '#FFFFFF'
                        }}
                        containerStyle={{marginTop: 15}}
                    />
                </View>

            </Card>
        )
    }

    keyExtractor = (item, index) => index.toString()

    item = (textItem) => {
        return (
            <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>

                <Image source={require('../Images/fish.png')} resizeMode={'cover'} style={{
                    height: 180,
                    width: Dimensions.get('window').width > 786 ? (Dimensions.get('window').width * 0.66) / 2.2 : 350,
                    borderRadius: 10,
                    borderWidth: 1
                }}/>

                <Image source={
                    require('../Images/fish.png')} resizeMode={'cover'} style={{
                    position: 'absolute',
                    top: 142,
                    left: 0,
                    height: 38,
                    width: Dimensions.get('window').width > 786 ? (Dimensions.get('window').width * 0.66) / 2.2 : 350,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'transparent'
                }} blurRadius={50}/>


                <View style={{
                    flexDirection: 'row',
                    top: 145,
                    left: 0,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 2
                }}>
                    <View style={{flex: 0.5}}>
                    </View>
                    <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white'}}>Browse Snails</Text>
                        <Icon name={'chevron-right'} size={30} color={'#FFFFFF'}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                {Dimensions.get('window').width >= 768 ?
                    <View style={{flex: 1, flexDirection: 'row-reverse', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <View style={{width: Dimensions.get('window').width * 0.66}}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.data}
                                renderItem={this.item}
                                numColumns={2}
                            />
                            {this.box2()}
                        </View>

                        <View style={{width: Dimensions.get('window').width * 0.33}}>
                            <PremiumVersionCard/>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingVertical: 10,
                                paddingHorizontal: 10
                            }}>
                                <Text style={{fontSize: 20}}>Show on compatible</Text>
                                <Switch/>
                            </View>
                            <Divider color={GREY_LINE}/>
                            {this.box1()}
                            {this.box3()}

                        </View>
                    </View>
                    :
                    <View>
                        <PremiumVersionCard/>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 10,
                            paddingHorizontal: 10
                        }}>
                            <Text style={{fontSize: 20}}>Show on compatible</Text>
                            <Switch/>
                        </View>
                        <Divider color={GREY_LINE}/>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.data}
                            renderItem={this.item}
                            numColumns={Dimensions.get('window').width > 786 ? 2: 1}
                        />
                        {this.box1()}
                        {this.box2()}
                        {this.box3()}
                    </View>
                }
            </ScrollView>
        )
    }



}

export default CataloguesScreen
