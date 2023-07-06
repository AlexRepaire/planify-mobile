import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from '../screens/auth/Signup';
import Register from '../screens/auth/Register';
import Onboarding from '../screens/auth/Onboarding';
import Home from '../screens/Accueil';
import AddTask from '../screens/addTask';
import Tasks from '../screens/tasks';
import { AuthContext } from '../context/AuthContext';
import Settings from '../screens/settings';
import Articles from '../screens/article';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import DrawerContent from '../components/DrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
    const { token } = useContext(AuthContext);

    const Tabs = () => (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={focused ? 'home' : 'home-outline'}
                        size={24}
                        color={focused ? colors.blue : colors.secondary}
                    />
                )
            }} />
            <Tab.Screen
                name="Tasks"
                component={Tasks}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'calendar' : 'calendar-outline'}
                            size={24}
                            color={focused ? colors.blue : colors.secondary}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )

    if (token) {
        return (
            <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="Tabs" component={Tabs} />
                <Drawer.Screen name="AddTask" component={AddTask} />
            </Drawer.Navigator>
        )
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Routes;
