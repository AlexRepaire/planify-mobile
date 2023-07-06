import React from 'react';
import { styles } from './style';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../constants/colors';

const Input = ({ outlined, ...props }) => {
    return <TextInput placeholderTextColor={colors.midgrey} style={[styles.input, outlined ? styles.outlined : {}]} {...props} />;
}

export default React.memo(Input);
