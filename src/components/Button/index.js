import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

const ButtonCustom = ({ onPress, type, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, type === "blue" ? styles.blueBg : {}]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(ButtonCustom);