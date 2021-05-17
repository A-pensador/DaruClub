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
    ImageBackground
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
//Libraries
import CheckBox from '@react-native-community/checkbox';
class OTP extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <ImageBackground
                resizeMode={'stretch'} // or cover
                style={styles.backgroundStyle} // must be passed from the parent, the number may vary depending upon your screen size
                source={Images.otpBackground}>
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior="padding">
                        <View style={styles.header}>
                            <Image source={Images.otp} style={{ width: width * 0.35, height: height * 0.19, }} />
                            <Text style={{ marginTop: '5%' }}>
                                <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Enter One Time Password (OTP)</Text>
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
                            <TextInput style={styles.textinput}
                                // underlineColorAndroid="#fff"
                                keyboardType='numeric'
                                maxLength={4}
                            // placeholder="Enter Phone-No "
                            // value={this.state.phoneNo}
                            // onChangeText={phoneNo => this.setState({ phoneNo })}
                            // placeholderTextColor="#808080"
                            />
                            <Text style={{ marginTop: '5%' }}>
                                <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}> Resend OTP    |</Text>
                                <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>    33 Seconds Remaining</Text>
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.06 }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.boxBtn}
                                    onPress={() => this.props.navigation.navigate('AppHome')}>
                                    <Text style={styles.btnText}> Login </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </ImageBackground>
        );
    }
}
export default OTP;
