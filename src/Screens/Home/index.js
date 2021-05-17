import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image, Picker,
    ImageBackground, FlatList
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
//Libraries
import CheckBox from '@react-native-community/checkbox';
import * as Animatable from 'react-native-animatable';
const BarImages = [
    {
        id: '1',
        image: Images.s2
    },
    {
        id: '2',
        image: Images.s3
    },
    {
        id: '3',
        image: Images.s4
    },
    {
        id: '4',
        image: Images.s8
    },
];
class Home extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <ScrollView>
                <Animatable.View animation="fadeInUpBig" duration={1000}
                    style={{ flex: 1, }}>
                    <View style={styles.container}>
                        <ImageBackground
                            resizeMode={'stretch'} // or cover
                            style={styles.backgroundStyle} // must be passed from the parent, the number may vary depending upon your screen size
                            source={Images.homeBackground}>
                            <KeyboardAvoidingView behavior="padding">
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        horizontal={true}
                                        data={BarImages}
                                        renderItem={({ item }) => (
                                            <>
                                                <View style={styles.barImgWrapper}>
                                                    <View
                                                        style={[styles.barImg]}>
                                                        <Image
                                                            style={styles.barImgStyle}
                                                            // source={require('../../Assets/profile_default.png')}
                                                            source={item.image}
                                                        />
                                                    </View>
                                                </View>
                                            </>
                                        )}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '5%' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EntryType')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ padding: 1, justifyContent: 'center', borderRadius: 100, marginRight: 10, minWidth: height * 0.15, minHeight: height * 0.15 }}>
                                            <Image source={Images.vodka} style={{ height: height * 0.18, width: height * 0.18, }} />
                                        </View>
                                        <Text style={{ color: '#fff', marginTop: '5%', fontWeight: 'bold' }}>Vodka</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EntryType')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ padding: 1, justifyContent: 'center', borderRadius: 100, marginRight: 10, minWidth: height * 0.15, minHeight: height * 0.15 }}>
                                            <Image source={Images.wine} style={{ height: height * 0.18, width: height * 0.18, }} />
                                        </View>
                                        <Text style={{ color: '#fff', marginTop: '5%', fontWeight: 'bold' }}>Wine</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '5%' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EntryType')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ padding: 1, justifyContent: 'center', borderRadius: 100, marginRight: 10, minWidth: height * 0.15, minHeight: height * 0.15 }}>
                                            <Image source={Images.wisky} style={{ height: height * 0.18, width: height * 0.18, }} />
                                        </View>
                                        <Text style={{ color: '#fff', marginTop: '5%', fontWeight: 'bold' }}>Whisky</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EntryType')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ padding: 1, justifyContent: 'center', borderRadius: 100, marginRight: 10, minWidth: height * 0.15, minHeight: height * 0.15 }}>
                                            <Image source={Images.beer} style={{ height: height * 0.18, width: height * 0.18, }} />
                                        </View>
                                        <Text style={{ color: '#fff', marginTop: '5%', fontWeight: 'bold' }}>Beer</Text>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        </ImageBackground>
                    </View>
                </Animatable.View>
            </ScrollView>
        );
    }
}
export default Home;
``