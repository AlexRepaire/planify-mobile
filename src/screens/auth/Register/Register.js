import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { AuthContext } from '../../../context/AuthContext';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        const payload = {
            email,
            password,
        };
        fetch(`http://localhost:5008/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "user": payload }),
        })
            .then(async res => {
                try {
                    const jsonRes = await res.json();
                    if (res.status !== 200) {
                        setIsError(true);
                        setMessage(jsonRes.message);
                    } else {
                        login(jsonRes.token);
                        setIsError(false);
                        setMessage(jsonRes.message);
                    }
                } catch (err) {
                    console.log(err);
                };
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Title>Welcome back!</Title>

            <Input placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
            <Input placeholder="Password" onChangeText={setPassword} secureTextEntry />

            <Button onPress={handleLogin}>Login</Button>
            <Text style={styles.footerText}>Not Registered ? <Text
                onPress={() => navigation.navigate('Signup')}
                style={styles.footerLink}>Sign up!</Text></Text>
        </SafeAreaView>
    );
}

export default React.memo(Register);
