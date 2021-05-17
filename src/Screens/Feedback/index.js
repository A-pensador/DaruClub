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
class Feedback extends Component {
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
                            <Text style={styles.barText}>FEEDBACK</Text>
                        </View>
                        <View style={{ justifyContent: 'center', width }}>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row', marginLeft: '5%', marginRight: '5%', borderBottomColor: '#808080',
                            borderBottomWidth: 1, marginTop: 25, alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 16, color: '#fff', marginBottom: '2.5%' }}>Name:</Text>
                            <TextInput style={[styles.textinput, { marginLeft: '22%' }]}
                                underlineColorAndroid="transparent"
                                // placeholder="Anubhav Singh"
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
                                // placeholder="Anubhav@gmail.com"
                                // value={this.state.profile.email_id}
                                // onChangeText={name => this.state.profile.email_id = name}
                                placeholderTextColor="#fff"
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row', marginLeft: '5%', marginRight: '5%', borderBottomColor: '#808080',
                            borderBottomWidth: 1, marginTop: '1%', alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 16, color: '#fff', marginBottom: '2.5%' }}>Contact No:</Text>
                            <TextInput style={[styles.textinput, { marginLeft: '10%' }]}
                                underlineColorAndroid="transparent"
                                // placeholder="987654456778"
                                // value={this.state.profile.email_id}
                                // onChangeText={name => this.state.profile.email_id = name}
                                placeholderTextColor="#fff"
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row', marginLeft: '5%', marginRight: '5%', borderBottomColor: '#808080',
                            borderBottomWidth: 1, marginTop: '1%', alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 16, color: '#fff', marginBottom: '2.5%' }}>Summary:</Text>
                            <TextInput style={[styles.textinput, { marginLeft: '10%', }]}
                                underlineColorAndroid="transparent"
                                // placeholder="987654456778"
                                // value={this.state.profile.email_id}
                                // onChangeText={name => this.state.profile.email_id = name}
                                multiline={true}
                                textAlignVertical='top'
                                placeholderTextColor="#fff"
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.04, }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={[styles.boxBtn, { backgroundColor: '#4d4dff' }]}
                                onPress={() => this.props.navigation.navigate('OTP')}>
                                <Text style={styles.btnText}> SUBMIT </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
export default Feedback;
