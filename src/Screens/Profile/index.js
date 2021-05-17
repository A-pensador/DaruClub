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
class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <KeyboardAvoidingView behavior="padding">
                        <View style={styles.upperBar}>
                            <View style={styles.backIconContainer}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <Image source={Images.backIcon} style={styles.barMenuIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.headingContainer}>
                                <Text style={styles.barText}>MY PROFILE</Text>
                            </View>
                            <View style={{ justifyContent: 'center', width }}>
                            </View>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '9%', marginBottom: '10%' }}>
                            <TouchableOpacity onPress={this.selectImage}>
                                <View style={styles.profileImgWrapper}>
                                    <Image source={Images.profilePic} style={{ height: 90, width: 90, borderRadius: 50, }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={{
                                flexDirection: 'row', marginLeft: '5%', marginRight: '5%', borderBottomColor: '#808080',
                                borderBottomWidth: 1, marginTop: 25, alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 16, color: '#fff', marginBottom: '2.5%' }}>Name:</Text>
                                <TextInput style={[styles.textinput, { marginLeft: '22%' }]}
                                    underlineColorAndroid="transparent"
                                    placeholder="Anubhav Singh"
                                    // value={this.state.profile.email_id}
                                    // onChangeText={name => this.state.profile.email_id = name}
                                    placeholderTextColor="#fff"
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row', marginLeft: '5%', marginRight: '5%', borderBottomColor: '#808080',
                                borderBottomWidth: 1, marginTop: '1%', alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 16, color: '#fff', marginBottom: '2.5%' }}>Email:</Text>
                                <TextInput style={[styles.textinput, { marginLeft: '22%' }]}
                                    underlineColorAndroid="transparent"
                                    placeholder="Anubhav@gmail.com"
                                    // value={this.state.profile.email_id}
                                    // onChangeText={name => this.state.profile.email_id = name}
                                    placeholderTextColor="#fff"
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row', marginLeft: '5%', marginRight: '5%', borderBottomColor: '#808080',
                                borderBottomWidth: 1, marginTop: '1%', alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 16, color: '#fff', marginBottom: '2.5%' }}>Phone No:</Text>
                                <TextInput style={[styles.textinput, { marginLeft: '13%' }]}
                                    underlineColorAndroid="transparent"
                                    placeholder="987654456778"
                                    // value={this.state.profile.email_id}
                                    // onChangeText={name => this.state.profile.email_id = name}
                                    placeholderTextColor="#fff"
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row', marginLeft: '5%', marginRight: '5%', borderBottomColor: '#808080',
                                borderBottomWidth: 1, marginTop: '1%', alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 16, color: '#fff', marginBottom: '2.5%' }}>Date Of Birth:</Text>
                                <TextInput style={[styles.textinput, { marginLeft: '7%' }]}
                                    underlineColorAndroid="transparent"
                                    placeholder="DD-MM-YYYY"
                                    // value={this.state.profile.email_id}
                                    // onChangeText={name => this.state.profile.email_id = name}
                                    placeholderTextColor="#fff"
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row', marginLeft: '5%', marginRight: '5%', borderBottomColor: '#808080',
                                borderBottomWidth: 1, marginTop: '1%', alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 16, color: '#fff', marginBottom: '2.5%' }}>Company:</Text>
                                <TextInput style={[styles.textinput, { marginLeft: '15%' }]}
                                    underlineColorAndroid="transparent"
                                    placeholder="TCS"
                                    // value={this.state.profile.email_id}
                                    // onChangeText={name => this.state.profile.email_id = name}
                                    placeholderTextColor="#fff"
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row', marginLeft: '5%', marginRight: '5%', borderBottomColor: '#808080',
                                borderBottomWidth: 1, marginTop: '1%', alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 16, color: '#fff', marginBottom: '2.5%' }}>Password:</Text>
                                <TextInput style={[styles.textinput, { marginLeft: '15%' }]}
                                    underlineColorAndroid="transparent"
                                    placeholder="********"
                                    // value={this.state.profile.email_id}
                                    // onChangeText={name => this.state.profile.email_id = name}
                                    placeholderTextColor="#fff"
                                />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.04, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={[styles.boxBtn, { backgroundColor: 'green' }]}
                                    onPress={() => this.props.navigation.navigate('OTP')}>
                                    <Text style={styles.btnText}> SAVE </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={[styles.boxBtn, { backgroundColor: 'red' }]}
                                    onPress={() => this.props.navigation.navigate('OTP')}>
                                    <Text style={styles.btnText}> RESET </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}
export default Profile;
