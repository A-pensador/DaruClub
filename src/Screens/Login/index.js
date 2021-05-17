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
class Login extends Component {
    constructor() {
        super();
        this.state = {
            errorMsg: 'Enter Valid phone number',
        };
    }
    render() {
        return (
            <ImageBackground
                resizeMode={'stretch'} // or cover
                style={styles.backgroundStyle} // must be passed from the parent, the number may vary depending upon your screen size
                source={Images.loginBackground}>
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior="padding">
                        <View style={styles.header}>
                            <Image source={Images.logo} style={{ width: width * 0.35, height: height * 0.19, borderRadius: 111 }} />
                            <Text style={{ marginTop: '5%' }}>
                                <Text style={{ fontSize: 22, color: 'yellow', fontWeight: 'bold' }}> WELCOME</Text>
                                <Text style={{ fontSize: 22, color: '#fff', fontWeight: 'bold' }}> To DaruClub</Text>
                            </Text>
                        </View>
                        <View style={styles.loginText}>
                            <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}> Please Enter Your Mobile No:</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', marginLeft: '10%', marginRight: '10%', borderBottomColor: '#fff',
                                borderBottomWidth: 1, marginTop: 10
                            }}>
                                <Image style={{ width: 25, height: 25, marginTop: 10 }}
                                    source={require('../../assets/Images/flag.png')} />
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    style={styles.textinput}
                                    keyboardType='numeric'
                                    maxLength={10}
                                // value={this.state.phoneNo}
                                // onChangeText={phoneNo => this.setState({ phoneNo })}
                                // placeholderTextColor="#808080"
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '5%' }}>
                                <CheckBox
                                    style={{}}
                                    value={this.state.checked}
                                    tintColors={{ true: 'red', false: '#A0A0A0' }}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                />
                                <Text style={{ marginTop: 5, fontWeight: 'bold', color: '#fff' }}> I am 25+</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.04 }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.boxBtn}
                                    onPress={() => this.props.navigation.navigate('OTP')}>
                                    <Text style={styles.btnText}> Continue </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </ImageBackground>
        );
    }
}
export default Login;
