import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
        display: 'flex',
        backgroundColor:'#262626'
       
    },
    searchWrapper: {
        height: height * 0.065,
        width: width * 0.9,
        alignSelf: "center",
        marginTop: height * 0.06,
        // backgroundColor: "#dedede",
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:5,
        marginBottom:10
    },
    searchIcon: {
        height: height * 0.03,
        width: height * 0.04,
        marginLeft: width * 0.15,
    },
    searchInputStyle: {
        height: '100%',
        width: "70%",
        // borderWidth: 2,
        paddingTop: 10,
        paddingLeft: 15,
        borderRadius: 10,
        // marginTop: 7,
        // borderColor: '#29E093',
        // backgroundColor:'#FFFFFF'
    },
   
});