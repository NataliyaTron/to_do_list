import React, {useState} from 'react';
import {Button, IconButton, Paper, TextField} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

type Todo = {
    id: number;
    name: string;
    description: string;
    checked: boolean;
}
interface EditTodoItemProps {
    todo: Todo;
    onChangeTodo: ({name, description}: Omit<Todo, "id" | "checked">) => void;
}
const EditTodoItem: React.FC<EditTodoItemProps> = ({todo, onChangeTodo}) => {
    const[editTodo, setEditTodo] = useState({name: todo.name, description: todo.description});
    const handleClick = () => {
        onChangeTodo(editTodo);
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setEditTodo({...todo, [name]: value});
    }

    return (
        <Paper variant="elevation" sx={{marginTop: "15px", width: "800px", padding: "20px 28px", borderRadius: 2, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2}}>
            <TextField value={editTodo.name} onChange={handleChange} name="name" label="name" />
            <TextField value={editTodo.description} onChange={handleChange} name="description" label="todo description" />
            <Button startIcon={<EditIcon />} variant="outlined" onClick={handleClick}>EDIT</Button>
        </Paper>
    );
};

export default EditTodoItem;