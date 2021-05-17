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
const brands = [
    {
        id: '1',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
    {
        id: '2',
        brandName: 'Signature',
        image: Images.wisky
    },
    {
        id: '3',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
    {
        id: '4',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
    {
        id: '5',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
    {
        id: '6',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
    {
        id: '7',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
    {
        id: '8',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
    {
        id: '9',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
    {
        id: '10',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
    {
        id: '11',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
    {
        id: '12',
        brandName: 'Johnnie walker',
        image: Images.wisky
    },
];
class Brands extends Component {
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
                                <Text style={styles.barText}>BRANDS</Text>
                            </View>
                            <View style={{ justifyContent: 'center', width }}>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                // horizontal={true}
                                data={brands}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('BarlistScreen')} style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                                            <View style={{ padding: 1, justifyContent: 'center', borderRadius: 100, marginRight: 10, minWidth: height * 0.15, minHeight: height * 0.15 }}>
                                                <Image source={item.image} style={{ height: height * 0.16, width: height * 0.16, }} />
                                            </View>
                                            <Text style={{ color: '#fff', marginTop: '5%', fontWeight: 'bold' }}>{item.brandName}</Text>
                                        </TouchableOpacity>
                                    </>
                                )}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}
export default Brands;
