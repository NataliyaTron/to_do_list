import React, {useState} from 'react';
import {Button, Paper, TextField} from "@mui/material";
import {Add as AddIcon} from "@mui/icons-material";
import {style} from "./style";
import {Todo} from "../types";

interface PanelProps {
    onAddTodo: ({name, description}: Omit<Todo, "id" | "checked">) => void;
}
const Panel: React.FC<PanelProps> = ({onAddTodo}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = () => {
        onAddTodo({name: name, description: description});
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
        <Paper variant="elevation" sx={style.paper}>
            <TextField value={name} onChange={handleChange} name="name" label="name" />
            <TextField value={description} onChange={handleDescription} name="description" label="todo description" />
            <Button startIcon={<AddIcon />} variant="outlined" onClick={handleClick} sx={style.button}>ADD</Button>
        </Paper>
    );
};

export default Panel;