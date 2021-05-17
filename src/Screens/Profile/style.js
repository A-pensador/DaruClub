import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height:height*1.1,
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: '#262626'
    },
    upperBar: {
        width,
        height: height * 0.085,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4
    },
    backIconContainer: {
    },
    headingContainer: {
        // width: '60%',
        marginLeft: '5%',
        alignItems: 'center',
    },
    barText: {
        color: "#fff",
        fontSize: height * 0.03,
        fontWeight: 'bold'
    },
    barMenuIcon: {
        height: height * 0.04,
        width: height * 0.04,
        marginLeft: width * 0.04,
    },
    profileImgWrapper: {
        height: height * 0.10,
        width: height * 0.15,
        // marginTop:height*0.02, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput: {
        fontSize: 16,
        width: '67%',
        textAlign: 'left',
        color: '#fff'
    },
    boxBtn: {
        width: width * 0.25,
        height: height * 0.07,
        display: 'flex',
        // backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
    },
    btnText: {
        // width:'100%',
        fontWeight: 'bold',
        textShadowColor: '#ffffff',
        fontSize: 16,
        color: '#fff'
    },
});