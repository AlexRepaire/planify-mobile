import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={openDrawer} hitSlop={8}>
                <Ionicons name="menu" size={24} color="black" />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.icon} />
        </View>
    );
}


export default React.memo(Header);
