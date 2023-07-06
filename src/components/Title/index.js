import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const Title = ({ children, type }) => {
    return <Text style={[styles.title, type === 'thin' ? styles.thin : {}]}>{children}</Text>;
}

export default React.memo(Title);
