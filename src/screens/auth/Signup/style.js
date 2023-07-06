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
        color: colors.purple,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    agreeText: {
        fontSize: 12,
        color: colors.grey,
        marginLeft: 8,
    },
    link: {
        textDecorationLine: 'underline',
    }
})