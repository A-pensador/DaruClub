import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, FlatList
} from "react-native";
//   import { Icon } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { Images } from '../../utils'
import styles from './style';
const { width, height } = Dimensions.get('window');
const projects = [
    {
        id: '1',
        name: 'Template GMP Protocol',
    },
];
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            value: '',
        }
        this.arrayholder = [];
    }
    async componentDidMount() {
        this.setState({
            data: projects,
            loading: true,
            viewAnimation: true,
        });
        this.arrayholder = projects;
    }
    searchFilterFunction = text => {
        this.setState({
            value: text,
        });
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchWrapper}>
                    <TextInput style={styles.searchInputStyle}
                        placeholder="Search..."
                        placeholderTextColor='#6f7a8c'
                        underlineColorAndroid="transparent"
                        textAlignVertical='center'
                        value={this.state.name}
                        onChangeText={text => this.searchFilterFunction(text)}
                    />
                    <Image source={require('../../assets/Images/search_grey.png')} style={styles.searchIcon} />
                </View>
            </View>
        );
    }
}
export default Search;
