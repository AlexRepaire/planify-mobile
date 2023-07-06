import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { styles } from './style'
import Button from '../../../components/Button'
import { AuthContext } from '../../../context/AuthContext'

const Onboarding = ({ navigation }) => {
    const { token } = useContext(AuthContext);

    useEffect(() => async () => {
        if (token) {
            login(token);
            navigation.navigate('Home');
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image style={styles.image} source={require("../../../assets/onboarding.png")} />
                <View style={styles.footer}></View>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Best task management app</Text>
                <Text style={styles.subtitle}>Get organized by sorting out all your tasks and boost your productivity</Text>
                <Button onPress={() => navigation.navigate("Register")}>Log in</Button>
                <Button onPress={() => navigation.navigate("Signup")} type={"blue"}>Get started</Button>
            </View>
        </View>
    )
}

export default Onboarding