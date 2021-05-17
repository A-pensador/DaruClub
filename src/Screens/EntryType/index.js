import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image, Picker, FlatList, ImageBackground
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
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
class EntryType extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    resizeMode={'stretch'} // or cover
                    style={styles.backgroundStyle} // must be passed from the parent, the number may vary depending upon your screen size
                    source={Images.homeBackground}>
                    <KeyboardAvoidingView behavior="padding">
                        <View style={styles.upperBar}>
                            <View style={styles.backIconContainer}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <Image source={Images.backIcon} style={styles.barMenuIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.headingContainer}>
                                <Text style={styles.barText}>ENTRY TYPE</Text>
                            </View>
                            <View style={{ justifyContent: 'center', width }}>
                            </View>
                        </View>
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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '20%' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brands')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: 1, justifyContent: 'center', borderRadius: 100, marginRight: 10, minWidth: height * 0.15, minHeight: height * 0.15 }}>
                                    <Image source={Images.stag} style={{ height: height * 0.18, width: height * 0.18, }} />
                                </View>
                                <Text style={{ color: '#fff', marginTop: '5%', fontWeight: 'bold' }}>Stag Entry</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brands')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: 1, justifyContent: 'center', borderRadius: 100, marginRight: 10, minWidth: height * 0.15, minHeight: height * 0.15 }}>
                                    <Image source={Images.couple} style={{ height: height * 0.18, width: height * 0.18, }} />
                                </View>
                                <Text style={{ color: '#fff', marginTop: '5%', fontWeight: 'bold' }}>Couple Entry</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}
export default EntryType;
