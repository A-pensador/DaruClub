import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
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
    wrapper: {
        width: width * 1,
        padding: 10,
        backgroundColor: '#000',
        marginTop: '0.5%'
        // alignItems: 'center'
    },
});