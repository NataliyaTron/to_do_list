import React, {ChangeEvent, useState} from 'react';
import {Button, Paper, TextField} from "@mui/material";
import {Add as AddIcon} from "@mui/icons-material";

const Panel = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const onClickHandler = () => {
        console.log("@", name, description);
      setName("");
      setDescription("");
    }
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setName(value);
    }
    return (
        <Paper variant="elevation" sx={{width: "400px", padding: "25px 30px", borderRadius: 2, display: "flex", justifyContent: "space-between", alignContent: "center", gap: 2}}>
            <TextField value={name} onChange={onChange} name="name" label="name" />
            <TextField value={name} onChange={onChange} name="description" label="todo description" />
            <Button startIcon={<AddIcon />} variant="outlined" onClick={onClickHandler}>ADD</Button>
        </Paper>
    );
};

export default Panel;