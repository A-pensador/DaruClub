import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image, Picker, FlatList
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
const bookings = [
    {
        id: '1',
        name: 'Shreeram Sweets',
        adress: 'Uttam Nagar',
        price: 'Rs. 300 >',
        image: Images.cash
    },
    {
        id: '2',
        name: 'Shreeram Sweets',
        adress: 'Uttam Nagar',
        price: 'Rs. 300 >',
        image: Images.cash
    },
    {
        id: '3',
        name: 'Shreeram Sweets',
        adress: 'Uttam Nagar',
        price: 'Rs. 300 >',
        image: Images.cash
    },
    {
        id: '1',
        name: 'Shreeram Sweets',
        adress: 'Uttam Nagar',
        price: 'Rs. 300 >',
        image: Images.cash
    },
];
class MyBooking extends Component {
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
                            <Text style={styles.barText}>MY BOOKINGS</Text>
                        </View>
                        <View style={{ justifyContent: 'center', width }}>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={bookings}
                            renderItem={({ item }) => (
                                <>
                                    <View style={styles.bookingWrapper}>
                                        <View
                                            style={[styles.bookingInnrWrapper]}>
                                            <View style={styles.Wrapper}>
                                                <Text style={styles.barNameText}>
                                                    {item.name}
                                                </Text>
                                                <Text style={styles.barAddrsText}>
                                                    {item.adress}
                                                </Text>
                                                <Text style={styles.barAddrsText}>
                                                    {item.price}
                                                </Text>
                                            </View>
                                            <Image
                                                style={styles.payTypeImg}
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
                </KeyboardAvoidingView>
            </View>
        );
    }
}
export default MyBooking;
