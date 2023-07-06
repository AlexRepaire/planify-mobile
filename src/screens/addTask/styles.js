import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backContainer: {
        padding: 24,
    },
    backIcon: {
        height: 32,
        width: 32,
    },
    label: {
        fontSize: 12,
        color: colors.black,
        marginHorizontal: 24,
        fontWeight: '500',
    }
})