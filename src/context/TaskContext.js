import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [toUpdated, setToUpdated] = useState(null);

    const setTasks = (data) => {
        setData(data);
    };

    const setUpdated = () => {
        setToUpdated(Math.random());
    };

    return (
        <TaskContext.Provider
            value={{
                data,
                toUpdated,
                setTasks,
                setUpdated,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
