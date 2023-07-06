import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import { AuthContext } from '../../../context/AuthContext';

const Signup = ({ navigation }) => {
    const [agreed, setAgreed] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { login } = useContext(AuthContext);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const onCheckboxPress = () => {
        setAgreed(value => !value);
    }

    const handleSignup = () => {
        if (password !== passwordConfirmation) {
            setIsError(true);
            setMessage('Passwords do not match');
            return;
        }
        if (password.length < 4) {
            setIsError(true);
            setMessage('Password must be at least 8 characters long');
            return;


        }
        if (!agreed) {
            setIsError(true);
            setMessage('Please agree to the terms and conditions');
            return;
        }

        const payload = {
            email,
            password,
            firstName,
            lastName,
        };
        fetch(`http://localhost:5008/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
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
            <Title>Join the hub!</Title>

            <Input placeholder="First Name" onChangeText={setFirstName} />
            <Input placeholder="Last Name" onChangeText={setLastName} />
            <Input placeholder="Email" onChangeText={setEmail} />
            <Input placeholder="Password" onChangeText={setPassword} secureTextEntry />
            <Input placeholder="Confirm Password" onChangeText={setPasswordConfirmation} secureTextEntry />

            <View style={styles.row}>
                <Checkbox checked={agreed} onPress={onCheckboxPress} />
                <Text style={styles.agreeText}>
                    I agree to the
                    <Text style={styles.link}> Terms and conditions</Text> and
                    <Text style={styles.link}> Privacy Policy</Text>
                </Text>
            </View>

            <Button type="blue" onPress={handleSignup}>Create new account</Button>

            <Text style={styles.footerText}>Already Registered ? <Text
                onPress={() => navigation.navigate('Register')}
                style={styles.footerLink}>Register!</Text></Text>
        </SafeAreaView>
    );
}

export default React.memo(Signup);
