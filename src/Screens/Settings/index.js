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
class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperBar}>
                    <View style={styles.backIconContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={Images.backIcon} style={styles.barMenuIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.barText}>SETTINGS</Text>
                    </View>
                    <View style={{ justifyContent: 'center', width }}>
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>My Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyBooking')}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>My Bookings</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Feedback</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FAQs')}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>FAQs</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Settings;
