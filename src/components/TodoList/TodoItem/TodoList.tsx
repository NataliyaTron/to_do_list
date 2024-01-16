import React from 'react';
import {Box} from "@mui/material";

const TodoList = () => {
    const todoList = [
        {id: 1, name: "task 1", description: "test1", checked: false},
        {id: 2, name: "task 2", description: "test2", checked: false},
        {id: 3, name: "task 3", description: "testagjkfdkfagjfdfjkgldk", checked: true},
    ]
    return (
        <Box>
            {todoList.map((todo, index) => (
            <Box key={index}>{todo.description}</Box>
            ))}
            </Box>

    );
};

export default TodoList;