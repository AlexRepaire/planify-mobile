import React from 'react';
import { styles } from './style';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import { Pressable, View } from 'react-native';

const Checkbox = ({ checked, onPress }) => {
    return <Pressable onPress={onPress} style={[styles.container, checked ? { borderWidth: 2 } : {}]} >
        {checked && <View style={styles.innerSquare} />}
    </Pressable>
}

export default React.memo(Checkbox);
