import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../components/Header';
import PlusIcon from '../../components/PlusIcon/PlusIcon';
import Title from '../../components/Title';
import StatusCard from "../../components/StatusCard"
import moment from 'moment';
import { fetchTasks } from '../../fetch/taskFetch';
import Categories from '../../components/Categories/Categories';
import { categories } from '../../constants/categories';
import Checkbox from '../../components/Checkbox/Checkbox';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
    const { data,
        toUpdated } = useContext(TaskContext);
    const [counts, setCounts] = useState({});
    const today = moment(new Date()).format('YYYY-MM-DD');
    const [category, setCategory] = useState('all');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //TODO fetch data from back    
        setLoading(true);

        fetchTasks(`category=${category}&deadline=${today}`);
        setLoading(false);

    }, [data, toUpdated, category]);

    useEffect(() => {
        if (data?.length) {
            const highPriority = data?.filter(
                data => data?.category === 'urgent' || data?.category === 'important',
            );
            const dateLimit = data?.filter(data => {
                const deadline = data?.deadline?.seconds * 1000;
                const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
                return moment(deadlineFormatted).isBefore(today);
            });
            const quick = data?.filter(data => data?.category === 'quick_task');

            setCounts({
                highPriority: highPriority?.length,
                dateLimit: dateLimit?.length,
                quick: quick?.length,
            });
        }
    }, [data]);

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
            <Header title="Home" />
            <ScrollView>
                <Title type='thin'>Daily Tasks:</Title>
                <View style={styles.row}>
                    <StatusCard label="High Priority" count={counts?.highPriority} />
                    <StatusCard
                        label="Date limit"
                        type="error"
                        count={counts?.dateLimit}
                    />
                    <StatusCard label="Quick" count={counts?.quick} />
                </View>

                {data && loading == false ? <FlatList
                    ListHeaderComponent={
                        <View style={{ marginBottom: 24 }}>
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
                /> : <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Tasks')}>
                    <Text style={styles.title}>Check all my tasks</Text>
                    <Text style={styles.subtitle}>
                        See all tasks and filter them by categories you have selected when
                        creating them
                    </Text>
                </TouchableOpacity>}
            </ScrollView>
            <PlusIcon />
        </SafeAreaView>
    );
}

export default React.memo(Home);