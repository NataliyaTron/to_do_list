import React, {useState} from 'react';
import {Button, Paper, TextField} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {style} from "./style";
import {Todo} from "../../types";

interface EditTodoItemProps {
    todo: Todo;
    onChangeTodo: ({name, description}: Omit<Todo, "id" | "checked">) => void;
}
const EditTodoItem: React.FC<EditTodoItemProps> = ({todo, onChangeTodo}) => {
    const[editTodo, setEditTodo] = useState({name: todo.name, description: todo.description});
    const handleClick = () => {
        onChangeTodo(editTodo);
    }
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setEditTodo(prevEditTodo => ({
            ...prevEditTodo,
            name: newName
        }));
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDescription = event.target.value;
        setEditTodo(prevEditTodo => ({
            ...prevEditTodo,
            description: newDescription
        }));
    };

    return (
        <Paper variant="elevation" sx={style.paper}>
            <TextField value={editTodo.name} onChange={handleNameChange} name="name" label="name" />
            <TextField value={editTodo.description} onChange={handleDescriptionChange} name="description" label="todo description" />
            <Button startIcon={<EditIcon />} variant="outlined" onClick={handleClick}>EDIT</Button>
        </Paper>
    );
};

export default EditTodoItem;