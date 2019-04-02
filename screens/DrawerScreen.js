import React, {Component} from 'react'
import {View, Image, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native'
import {ListItem} from 'react-native-elements'
import {DRAWER_GREY, GREY_LINE} from "../Theme/colors";
import Icon from 'react-native-vector-icons/EvilIcons';

class DrawerScreen extends Component {
    static navigationOptions = {
        header: <Image source={require('../from-real-app/assets/logo.png')} resizeMode={'contain'} style={{
            height: 80,
            width: 180
        }}/>
    }

    constructor(props) {
        super(props)
        this.state = {
            list: [{
                id: 1,
                title: 'Catalogues',
                icon: 'chart'
            },
                {
                    id: 2,
                    title: 'Aquariums',
                    icon: 'trophy'
                },
                {
                    id: 1,
                    title: 'Settings',
                    icon: 'gear'
                },
                {
                    id: 1,
                    title: 'Credits',
                    icon: 'heart'
                },
                {
                    id: 1,
                    title: 'Feedback',
                    icon: 'comment'
                },

            ]
        }
    }

    onPressRow = (text) => {
        if (text === 'Catalogues') {
            return 'Catalogues'
        }
        else if (text === 'Aquariums') {
            return 'Settings'
        }
        else if (text === 'Settings') {
            return 'Settings'
        }
        else if (text === 'Credits') {
            return 'Settings'
        }
        else {
            return 'Settings'
        }
    }


    // drawerRow = (icon, text) => {
    //     return (
    //         <View>
    //             <TouchableOpacity style={styles.drawerRow}>
    //                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //                     <Icon name={icon} color={'#000000'} size={35}/>
    //                     <Text style={styles.text}>{text}</Text>
    //                 </View>
    //                 <View style={{justifyContent: 'center'}}>
    //                     <Icon name={'chevron-right'} color={GREY_LINE} size={35}/>
    //                 </View>
    //             </TouchableOpacity>
    //             <View style={{height: 1, backgroundColor: GREY_LINE}}>
    //             </View>
    //         </View>
    //     )
    // }

    renderItem = ({item, index}) => {
        return (
            <ListItem
                onPress={() => this.props.navigation.navigate(this.onPressRow(item.title))}
                key={index}
                title={item.title}
                bottomDivider
                titleStyle={styles.text}
                leftIcon={() => <Icon name={item.icon} color={'#000000'} size={35}/>}
                chevron
            />
        )
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: DRAWER_GREY}}>
                <View style={styles.imageView}>
                    <Image source={require('../from-real-app/assets/logo.png')} resizeMode={'contain'}
                           style={{height: 80, width: 180}}/>
                </View>
                <View style={{backgroundColor: '#FFFFFF'}}>
                    <View style={{height: 1, backgroundColor: GREY_LINE}}>
                    </View>

                    <FlatList
                        data={this.state.list}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderItem}
                    />


                    {/*{this.drawerRow('chart', 'Catalogues')}*/}
                    {/*{this.drawerRow('trophy', 'Aquariums')}*/}
                    {/*{this.drawerRow('gear', 'Settings')}*/}
                    {/*{this.drawerRow('heart', 'Credits')}*/}
                    {/*{this.drawerRow('comment', 'Feedback')}*/}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 8
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    }
})


export default DrawerScreen
