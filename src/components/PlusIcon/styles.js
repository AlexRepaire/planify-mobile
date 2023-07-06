import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width: 60,
        height: 60,
        backgroundColor: colors.blue,
        position: 'absolute',
        bottom: 24,
        right: 24,

    },
    plus: {
        fontSize: 25,
        marginTop: -2,
        fontWeight: '600',
        color: colors.white,
    },
})
