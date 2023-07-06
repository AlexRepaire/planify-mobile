import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

//const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        flex: 1,
    },
    content: {
        padding: 46,
        backgroundColor: colors.white,
    },
    title: {
        color: colors.black,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22,
    },
    subtitle: {
        fontSize: 15,
        color: colors.grey,
        textAlign: "center",
        marginVertical: 16,
    },
    footer: {
        position: 'absolute',
        height: 20,
        width: '100%',
        bottom: 0,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
})