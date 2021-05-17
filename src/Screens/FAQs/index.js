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
import InputField from '../../Commons/input';
import { Images } from '../../utils'
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
//import for the animation of Collapse and Expand
import Collapsible from 'react-native-collapsible';
//import for the collapsible/Expandable view
import Accordion from 'react-native-collapsible/Accordion';
const CONTENT = [
    {
        title: '1. Collapsible Gropup Item #1 ',
        content: 'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
    },
    {
        title: '1. Collapsible Gropup Item #2',
        content: 'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
    },
    {
        title: '1. Collapsible Gropup Item #3',
        content: 'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
    },
]
class FAQs extends Component {
    state = { activeSections: [], };
    setSections = sections => {
        //setting up a active section state
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };
    renderHeader = (section, _, isActive) => {
        //Accordion Header view
        return (
            <Animatable.View
                // duration={400}
                // style={[styles.header, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor">
                <View style={styles.searchWrapper}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: '2%' }}>{section.title}</Text>
                </View>
            </Animatable.View>
        );
    };
    renderContent(section, _, isActive) {
        //Accordion Content view
        return (
            <Animatable.View
                // duration={400}
                style={[styles.content, isActive ? styles.active : styles.inactive]}
            // transition="backgroundColor"
            >
                <Animatable.Text
                    // animation={isActive ?'bounceIn' : undefined}
                    style={{ textAlign: 'left', width: width * 0.98, backgroundColor: '#FFFFFF', elevation: 4, paddingLeft: 25, paddingBottom: 20, paddingTop: 10, fontSize: 16 }}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    }
    render() {
        const { multipleSelect, activeSections } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.upperBar}>
                    <View style={styles.backIconContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={Images.backIcon} style={styles.barMenuIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.barText}>FAQs</Text>
                    </View>
                    <View style={{ justifyContent: 'center', width }}>
                    </View>
                </View>
                <ScrollView>
                    {/*Code for Accordion/Expandable List starts here*/}
                    <Accordion
                        activeSections={activeSections}
                        sections={CONTENT}
                        touchableComponent={TouchableOpacity}
                        // expandMultiple={multipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        // duration={400}
                        onChange={this.setSections}
                    />
                    {/*Code for Accordion/Expandable List ends here*/}
                </ScrollView>
            </View>
        );
    }
}
export default FAQs;
