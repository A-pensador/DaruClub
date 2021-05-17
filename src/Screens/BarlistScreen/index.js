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
import StarRating from 'react-native-star-rating';
const BarDesc = [
    {
        id: '1',
        barName: 'Shreeram Sweets',
        barAdress: '52, Road no 226, sector 20, Near by HDFC Bank,Dwarka',
        price: 'Rs. 157',
        barImage: Images.s2,
        rating: 3
    },
    {
        id: '2',
        barName: 'Shreeram Sweets',
        barAdress: '52, Road no 226, sector 20, Near by HDFC Bank,Dwarka',
        price: 'Rs. 159',
        barImage: Images.s3,
        rating: 2
    },
    {
        id: '3',
        barName: 'Shreeram Sweets',
        barAdress: '52, Road no 226, sector 20, Near by HDFC Bank,Dwarka',
        price: 'Rs. 157',
        barImage: Images.s5,
        rating: 5
    },
    {
        id: '4',
        barName: 'Shreeram Sweets',
        barAdress: '52, Road no 226, sector 20, Near by HDFC Bank,Dwarka',
        price: 'Rs. 157',
        barImage: Images.s7,
        rating: 3
    },
];
class BarlistScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.upperBar}>
                        <View style={styles.backIconContainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image source={Images.backIcon} style={styles.barMenuIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headingContainer}>
                            <Text style={styles.barText}>BARS</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', marginLeft: '40%' }}>
                            <Text style={styles.barText}>DWARKA</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={BarDesc}
                            renderItem={({ item }) => (
                                <>
                                    <View style={styles.barImgWrapper}>
                                        <View
                                            style={[styles.barImageWrapper]}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BarDetails')}>
                                                <Image
                                                    style={styles.barDetailImg}
                                                    // source={require('../../Assets/profile_default.png')}
                                                    source={item.barImage}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View
                                            style={[styles.bottomWrapper]}>
                                            <View style={styles.barDetailWrapper}>
                                                <Text style={styles.barNameText}>
                                                    {item.barName}
                                                </Text>
                                                <Text style={styles.barAddrsText}>
                                                    {item.barAdress}
                                                </Text>
                                            </View>
                                            <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                                <View style={styles.priceWrapper}>
                                                    <Text style={styles.priceText}>
                                                        {item.price}
                                                    </Text>
                                                    <View style={{ marginRight: 10, marginTop: 10 }}>
                                                        <StarRating fullStarColor="#ffc121" emptyStarColor="grey" starSize={10}
                                                            disabled={false} maxStars={6} rating={item.rating} />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
export default BarlistScreen;
