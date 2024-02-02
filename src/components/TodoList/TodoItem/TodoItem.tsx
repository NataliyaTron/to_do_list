import React from 'react';
import {Box, IconButton, Paper, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Todo} from "../../types";

interface TodoItemProps {
    todo: Todo;
    onDeleteTodo: (id: Todo["id"]) => void;
    onCheckTodo: (id: Todo["id"]) => void;
    onEdit: (id: Todo["id"]) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({todo, onDeleteTodo, onCheckTodo, onEdit}) => {
    return (
        <Paper variant="elevation" sx={{marginTop: "15px", width: "800px", padding: "20px 28px", borderRadius: 2, display: "flex", justifyContent: "space-between", alignContent: "center", gap: 2, opacity: todo.checked ? 0.5 : 1}}>
            <Box textAlign="left">
                    <Typography onClick={() => onCheckTodo(todo.id)} sx={{cursor: "pointer", textDecorationLine: todo.checked ? "line-through" : "none"}} variant="h5" component="h5" gutterBottom>{todo.name}</Typography>
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