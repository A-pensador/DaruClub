import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height:height*1.1,
        display: 'flex',
        alignItems: 'center',
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
    searchWrapper: {
        height: height * 0.070,
        width: width * 0.98,
        // alignSelf:"center",
        backgroundColor: "#b6f2f2",
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
    },
});
