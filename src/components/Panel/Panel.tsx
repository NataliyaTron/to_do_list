import React, {ChangeEvent, useState} from 'react';
import {Button, Paper, TextField} from "@mui/material";
import {Add as AddIcon} from "@mui/icons-material";
import type {Todo} from "../../pages/TodoListPage/TodoListPage";

const DEFAULT_TODO = {name: "", description: ""};
interface PanelProps {
    onAddTodo: ({name, description}: Omit<Todo, "id" | "checked">) => void;
}
const Panel: React.FC<PanelProps> = ({onAddTodo}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = () => {
        onAddTodo({name: name, description: description});
        console.log("click");

    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setName(value);
    }

    const handleDescription=(event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setDescription(value);
    }

    return (
        <Paper variant="elevation" sx={{width: "800px", padding: "25px 30px", borderRadius: 2, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, marginTop: "50px"}}>
            <TextField value={name} onChange={handleChange} name="name" label="name" />
            <TextField value={description} onChange={handleDescription} name="description" label="todo description" />
            <Button startIcon={<AddIcon />} variant="outlined" onClick={handleClick} sx={{backgroundColor: "white", fontWeight: 700, height: "50px"}}>ADD</Button>
        </Paper>
    );
};

export default Panel;