import React, {useState} from 'react';
import TodoList from "../../components/TodoList/TodoList";
import Panel from "../../components/Panel/Panel";
import {Box} from "@mui/material";
import {style} from "./style";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Todo} from "../../components/types";

const TodoListPage = () => {
    const [editTodoId, setEditTodoId] = useState<number | null>(null);
    const [todoList, setTodoList] = useState([
        {id: 1, name: "Задачи", description: "Решение алгоритмических задач", checked: false},
        {id: 2, name: "Пет-проект", description: "Сделать логику приложения", checked: false},
        {id: 3, name: "UI фреймворки", description: "Практиковать UI фреймворки (MUi)", checked: true},
    ]);

    const handleSetEditTodoId = (id: Todo["id"]) => {
        setEditTodoId(id);
    };
    const handleDeleteTodo = (id: Todo["id"]) => {
        setTodoList(prevTodoList => prevTodoList.filter(todo => todo.id !== id));
    };

    const handleAddTodo = ({name, description}: Omit<Todo, "id" | "checked">) => {
        setTodoList(prevTodoList => {
            const newId = prevTodoList.length > 0 ? prevTodoList[prevTodoList.length - 1].id + 1 : 1;
            return [...prevTodoList, {id: newId, description, name, checked: false}];
        });
    };

    const handleCheckTodo = (id: Todo["id"]) => {
        setTodoList(prevTodoList =>
            prevTodoList.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };
    const handleEditTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
        setTodoList(prevTodoList =>
            prevTodoList.map(todo =>
                todo.id === editTodoId ? { ...todo, name, description } : todo
            )
        );
        setEditTodoId(null);
    };

    return (
        <>
        <Header />
        <Box sx={style.box}>
            <Panel onAddTodo={handleAddTodo} />
            <TodoList editTodoId={editTodoId} todoList={todoList} onDeleteTodo={handleDeleteTodo} onCheckTodo={handleCheckTodo} onEdit={handleSetEditTodoId} onChangeTodo={handleEditTodo} />
        </Box>
        <Footer />
        </>
    );
};

export default TodoListPage;