import React from 'react';
import TodoList from "../../components/TodoList/TodoItem/TodoList";
import Header from "../../components/Header/Header";
import Panel from "../../components/Panel/Panel";

const TodoListPage = () => {
    return (
        <div>
            <Header />
            <Panel />
            <TodoList />
        </div>
    );
};

export default TodoListPage;