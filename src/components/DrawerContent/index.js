import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { Text } from "react-native";
import { styles } from "./style";
import { AuthContext } from "../../context/AuthContext";

function DrawerContent(props) {
    const { navigation } = props;
    const { logout } = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props}>
            <Text style={styles.link} onPress={() => navigation.navigate('Home')}>Home</Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Tasks')}>Tasks</Text>
            <Text style={styles.link}>Privacy Policy</Text>
            <Text style={styles.link}>Terms and Conditions</Text>
            <Text style={styles.link} onPress={logout}>Log out</Text>
        </DrawerContentScrollView>
    )
}

export default React.memo(DrawerContent);