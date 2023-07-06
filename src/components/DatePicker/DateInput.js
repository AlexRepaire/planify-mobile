import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from "@expo/vector-icons"
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

//import DatePicker from 'react-native-date-picker';

const DateInput = ({ value, setDeadline, ...props }) => {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('date');

    const onDateOpen = () => {
        setOpen(true);
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setOpen(false);
        setDeadline(currentDate);
    };

    return (
        <>
            <TouchableOpacity onPress={onDateOpen} style={styles.outlined}>
                <Ionicons name="calendar" size={16} color="grey" style={styles.icon} />

                <DateTimePicker
                    mode={mode}
                    value={value}
                    is24Hour={true}
                    onChange={onChange}
                    display='default'
                />
            </TouchableOpacity>
        </>
    );
}


export default React.memo(DateInput);
