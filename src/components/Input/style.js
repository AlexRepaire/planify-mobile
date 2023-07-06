import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.lightgrey,
        paddingHorizontal: 24,
        paddingVertical: 13,
        borderRadius: 10,
        color: colors.grey,
        marginVertical: 12,
        fontSize: 15,
    },
    outlined: {
        borderWidth: 1,
        borderColor: colors.grey,
        backgroundColor: colors.white,
        marginHorizontal: 24,
    }
})
