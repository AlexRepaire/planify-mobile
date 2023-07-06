import { Alert } from "react-native";

const fetchTasks = async (filter, setTasks) => {

    //const response = await fetch(`http://localhost:5008/api/tasks/tasks?category=${category}`)
    const response = await fetch(`http://localhost:5008/api/tasks/tasks?${filter}`)
        .catch((error) => {
            Alert.alert(error)
        });
    const data = await response.json();
    setTasks(data);

}

export { fetchTasks };