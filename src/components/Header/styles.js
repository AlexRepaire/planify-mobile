import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 24,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.purple,
    },
    icon: {
        width: 24,
        height: 24,
    }
})
