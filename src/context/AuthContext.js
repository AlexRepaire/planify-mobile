import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                setToken(JSON.parse(token));
            }
        };
        getToken();
    }, []);


    const login = async (token) => {
        setToken(token);
        await AsyncStorage.setItem('token', JSON.stringify(token));
    };

    const logout = async () => {
        setToken(null);
        await AsyncStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
