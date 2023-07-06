import { View, Text, SafeAreaView, Pressable, ActivityIndicator, Alert, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import Title from '../../components/Title';
import Input from '../../components/Input';

import Categories from '../../components/Categories/Categories';
import { categories } from '../../constants/categories';
import moment from 'moment';
import Button from '../../components/Button';
import DateInput from '../../components/DatePicker/DateInput';
import { fetchTasks } from '../../fetch/taskFetch';
import { TaskContext } from '../../context/TaskContext';

const AddTask = ({ navigation }) => {
    const { setTasks } = useContext(TaskContext);
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [deadline, setDeadline] = useState(new Date());
    const [loading, setLoading] = useState(false);

    const handleBack = () => {
        navigation.goBack();
    }

    const onSubmit = () => {
        const today = moment(new Date()).format('YYYY-MM-DD');
        const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
        if (!title) {
            Alert.alert('Please enter the task title');
            return;
        }
        if (moment(deadlineFormatted).isBefore(today)) {
            Alert.alert('Please enter future date');
            return;
        }

        setLoading(true);
        fetch(`http://localhost:5008/api/tasks/add-task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "task": {
                    title,
                    category,
                    deadline: deadlineFormatted,
                    completed: false
                }
            }),
        }).then(() => {
            setLoading(false);
            fetchTasks("all", setTasks);
            navigation.navigate('Tasks');
            setTitle('');
            setDeadline(new Date());
            setCategory(null);
        }).catch(e => {
            setLoading(false);
            Alert.alert(e.message);
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={handleBack} hitSlop={8} style={styles.backContainer}>
                <Ionicons style={styles.backIcon} name="arrow-back" size={24} color="black" />
            </Pressable>
            <ScrollView>
                <Title type='thin'>Add New Task</Title>

                <Text style={styles.label}>Describe the task</Text>
                <Input
                    value={title}
                    onChangeText={setTitle}
                    outlined
                    placeholder="Type here..."
                />

                <Text style={styles.label}>Type</Text>
                <Categories
                    categories={categories}
                    selectedCategory={category}
                    onCategoryPress={setCategory}
                />
                <Text style={styles.label}>Deadline</Text>
                <DateInput value={deadline} setDeadline={setDeadline} />


                {loading ? (
                    <ActivityIndicator />
                ) : (
                    <Button type="blue" onPress={onSubmit}>
                        Add the Task
                    </Button>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddTask