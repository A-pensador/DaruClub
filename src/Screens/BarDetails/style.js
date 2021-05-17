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
    backgroundStyle: {
        flex: 1,
        backgroundColor: 'transparent',
        height: height * 1.1,
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
        fontSize: height * 0.025,
        fontWeight: 'bold'
    },
    barMenuIcon: {
        height: height * 0.04,
        width: height * 0.04,
        marginLeft: width * 0.04,
    },
    profileImgWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    barImgStyle: {
        width: width * 0.5,
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
    ratingWrapper: {
        width: '60%',
        marginLeft: 25,
        display: 'flex',
        marginTop: 3,
        flexDirection: 'column',
    },
    barImgWrapper: {
        width: width * 1,
        // height: height * 0.15,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderBottomColor: '#fff',
        // borderBottomWidth: 2,
        marginTop: '10%',
        shadowColor: 'rgba(1, 1, 1, 1)',
        // marginLeft: 18,
    },
    boxBtn: {
        width: width * 0.25,
        height: height * 0.04,
        display: 'flex',
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 0.5
    },
    btnText: {
        // width:'100%',
        fontWeight: 'normal',
        textShadowColor: '#ffffff',
        fontSize: 14,
        color: '#fff'
    },
    reviewsWrapper: {
        width: width * 0.9,
        height: height * 0.12,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: height * 0.02,
        // borderRadius: 10,
        shadowColor: 'rgba(1, 1, 1, 1)',
        elevation: 4,
        marginLeft: 18,
    },
    profileImgStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        // borderColor: colors.WHITE,
        // shadowColor: colors.BLACK,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
        marginBottom: 4
    },
});