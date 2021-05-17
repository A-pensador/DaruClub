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
const reviews = [
    {
        id: '1',
        Instructions: 'This Is Dummy',
        image: Images.profilePic,
        rating: 3
    },
];
class BarDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    resizeMode={'stretch'} // or cover
                    style={styles.backgroundStyle} // must be passed from the parent, the number may vary depending upon your screen size
                    source={Images.barDeailsBackground}>
                    <KeyboardAvoidingView behavior="padding">
                        <View style={styles.upperBar}>
                            <View style={styles.backIconContainer}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <Image source={Images.backIcon} style={styles.barMenuIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.headingContainer}>
                                <Text style={styles.barText}>Yo Yo Restro & Lounge</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end', position: 'absolute', left: '85%' }}>
                                <Text style={styles.barText}>3.4</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.barImgWrapper}>
                                <Image
                                    style={styles.barImgStyle}
                                    // source={require('../../Assets/profile_default.png')}
                                    source={Images.s2}
                                />
                            </View>
                            <View style={{ marginTop: '5%', width: '80%' }}>
                                <Text style={{ marginTop: '5%', textAlign: 'center', }}>
                                    <Text style={{ fontSize: 18, color: 'orange', fontWeight: 'bold' }}>Address:-</Text>
                                    <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'bold' }}>  52, Road no 226, sector 20, Near by HDFC Bank,Dwarka</Text>
                                </Text>
                            </View>
                            <View style={{ marginTop: '5%', width: '80%' }}>
                                <Text style={{ marginTop: '5%', textAlign: 'center', }}>
                                    <Text style={{ fontSize: 14, color: 'orange', fontWeight: 'bold' }}>Hours:-</Text>
                                    <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold', }}>  12am-12am</Text>
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.08, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={[styles.boxBtn,]}
                                    onPress={() => this.props.navigation.navigate('BarDetails')}>
                                    <Text style={styles.btnText}> Navigate </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={[styles.boxBtn,]}
                                    onPress={() => this.props.navigation.navigate('BarDetails')}>
                                    <Text style={styles.btnText}> Book Now </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginLeft: '5%', marginTop: '8%' }}>
                            <Text style={{ fontSize: 16, color: "orange" }}> Top Reviews </Text>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={reviews}
                            renderItem={({ item }) => (
                                <>
                                    <View style={styles.reviewsWrapper}>
                                        <View
                                            style={[styles.profileImgWrapper, { marginTop: 10 }]}>
                                            <Image
                                                style={styles.profileImgStyle}
                                                // source={require('../../Assets/profile_default.png')}
                                                source={item.image}
                                            />
                                            <View style={styles.ratingWrapper}>
                                                <Text style={styles.docNameText}>
                                                    {item.Instructions}
                                                </Text>
                                                <View style={{ marginTop: 5, flexDirection: 'row' }}>
                                                    <StarRating fullStarColor="#ffc121" emptyStarColor="grey" starSize={17}
                                                        disabled={false} maxStars={5} rating={item.rating} containerStyle={{ width: 100, }} />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}
export default BarDetails;
