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
    },
    barImgWrapper: {
        width: width * 1,
        // height: height * 0.15,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginTop: 5,
        shadowColor: 'rgba(1, 1, 1, 1)',
        // marginLeft: 18,
    },
    barImg: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },
    barImgStyle: {
        width: width * 1,
        height: width * 0.7,
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