import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
        display: 'flex',
    },
    backgroundStyle: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    loginText: {
        marginTop: '10%',
        marginLeft: '5%'
    },
    numCont: {
        width: '80%',
        flexDirection: 'row'
        // height: height * 0.08,
        // backgroundColor: 'silver',
    },
    countryPicker: {
        width: '100%',
        height: '100%',
        // backgroundColor: 'pink',
    },
    loginError: {
        color: 'red',
        paddingTop: 3,
        paddingBottom: 5
    },
    boxBtn: {
        width: width * 0.3,
        height: height * 0.05,
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    btnText: {
        // width:'100%',
        fontWeight: 'bold',
        textShadowColor: '#ffffff',
        fontSize: 14,
        color: '#000'
    },
    textinput: {
        fontSize: 20,
        // alignself: 'self',
        color: '#fff',
        // marginBottom: 20,
        // borderBottomColor: '#fff',
        // borderBottomWidth: 1,
        width: '90%',
        paddingLeft: 10,
        textAlign: 'left'
    },
});