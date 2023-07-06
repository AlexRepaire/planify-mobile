import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import { styles } from './styles';
import PlusIcon from '../../components/PlusIcon/PlusIcon';
import Title from '../../components/Title';
import { TaskContext } from '../../context/TaskContext';
import Categories from '../../components/Categories/Categories';
import Checkbox from '../../components/Checkbox/Checkbox';
import { categories } from '../../constants/categories';
import { fetchTasks } from '../../fetch/taskFetch';
import { Ionicons } from '@expo/vector-icons';

const Tasks = () => {
    const { data, setTasks } = useContext(TaskContext);
    const [category, setCategory] = useState('all');
    //const [filteredTasks, setFilteredTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        try {
            fetchTasks(`category=${category}`, setTasks);
            setLoading(false);
        } catch (error) {
            Alert.alert(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [category]);

    const onTaskUpdate = item => {
        fetch(`http://localhost:5008/api/tasks/update-task`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "task": {
                    id: item._id,
                    completed: !item.completed
                }
            })
        }).then(() => {
            fetchData()
        }).catch(e => {
            setLoading(false);
            Alert.alert(e.message);
        });
    };

    const deleteTask = id => {
        fetch(`http://localhost:5008/api/tasks/delete-task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                fetchData()
            }).catch(e => {
                setLoading(false);
                Alert.alert(e.message);
            });
    };

    const renderTask = ({ item }) => {
        return (
            <View style={[styles.row, { justifyContent: "space-between" }]}>
                <View style={styles.row}>
                    <Checkbox checked={item.completed} onPress={() => onTaskUpdate(item)} />
                    <Text style={[styles.taskText, item?.checked ? styles.checked : {}]}>
                        {item.title}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => deleteTask(item._id)}>
                    <View style={{ backgroundColor: "brown", borderRadius: "50px", width: 30, alignItems: "center" }}>
                        <Ionicons name='remove' size={20} style={{ color: "white" }} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Tasks" />
            {loading ? <ActivityIndicator /> : <FlatList
                ListHeaderComponent={
                    <View style={{ marginBottom: 24 }}>
                        <Title type="thin">To Do Tasks</Title>
                        <Categories
                            categories={[{ label: 'All', value: 'all' }, ...categories]}
                            selectedCategory={category}
                            onCategoryPress={setCategory}
                        />
                    </View>
                }
                data={data}
                renderItem={renderTask}
                keyExtractor={item => String(item?._id)}
            />}
            <PlusIcon />
        </SafeAreaView>
    )
}

export default React.memo(Tasks)