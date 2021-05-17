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
    bottomWrapper: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },
    barDetailWrapper: {
        width: '50%',
        marginLeft: 20,
        display: 'flex',
        marginTop: 3,
        flexDirection: 'column',
    },
    priceWrapper: {
        width: '50%',
        marginLeft: 20,
        display: 'flex',
        marginTop: 3,
        flexDirection: 'column',
    },
    priceText: {
        fontFamily: 'Helvetica Neue',
        color: '#00FFFF',
        fontSize: width * 0.045,
        fontWeight: 'bold',
        paddingBottom: 1,
        paddingVertical: 5,
        textDecorationLine: 'underline',
    },
    barNameText: {
        fontFamily: 'Helvetica Neue',
        color: '#fff',
        fontSize: width * 0.045,
        fontWeight: 'normal',
        paddingBottom: 1,
        paddingVertical: 5
    },
    barAddrsText: {
        color: '#fff',
        fontSize: width * 0.033,
        fontWeight: 'normal',
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
    },
    barImgWrapper: {
        width: width * 1,
        height: height * 0.4,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginTop: 20,
        shadowColor: 'rgba(1, 1, 1, 1)',
        // marginLeft: 18,
    },
    barImageWrapper: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },
    barDetailImg: {
        width: width * 1,
        height: width * 0.5,
        // borderRadius: 50,
        // borderWidth: 1,
        borderColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 1,
        marginRight: 10,
        // elevation: 5,
        // marginBottom: 4
    },
});