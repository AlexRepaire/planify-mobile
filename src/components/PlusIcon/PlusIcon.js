import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const PlusIcon = ({ title }) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('AddTask');
    }

    return (
        <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
            <Text style={styles.plus}>+</Text>
        </Pressable>
    );
}


export default React.memo(PlusIcon);
