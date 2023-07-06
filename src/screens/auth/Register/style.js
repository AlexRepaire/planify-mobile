import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    footerText: {
        fontSize: 15,
        textAlign: 'center',
        color: colors.grey,
        marginTop: 28,
    },
    footerLink: {
        paddingLeft: 5,
        color: colors.purple,
        fontWeight: 'bold',
    }
})