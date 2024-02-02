import React from 'react';
import {Box, IconButton, Paper, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Todo} from "../../types";
import {style} from "./style";

interface TodoItemProps {
    todo: Todo;
    onDeleteTodo: (id: Todo["id"]) => void;
    onCheckTodo: (id: Todo["id"]) => void;
    onEdit: (id: Todo["id"]) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({todo, onDeleteTodo, onCheckTodo, onEdit}) => {
    return (
        <Paper variant="elevation" sx={style.paper}>
            <Box sx={style.box}>
                    <Typography onClick={() => onCheckTodo(todo.id)} sx={style.typography} variant="h5" component="h5" gutterBottom>{todo.name}</Typography>
                    <Typography variant="subtitle1" component="div" gutterBottom>{todo.description}</Typography>
            </Box>
            <Box display="flex">
                <IconButton onClick={() => onDeleteTodo(todo.id)} color="error" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => onEdit(todo.id)} color="primary" aria-label="label">
                    <EditIcon />
                </IconButton>
            </Box>
        </Paper>
    );
};

export default TodoItem;