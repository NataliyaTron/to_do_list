import React, {useState} from 'react';
import TodoList from "../../components/TodoList/TodoList";
import Panel from "../../components/Panel/Panel";
import {Box} from "@mui/material";

export type Todo = {
    id: number;
    name: string;
    description: string;
    checked: boolean;
}
const TodoListPage = () => {
    const [editTodoId, setEditTodoId] = useState<number | null>(null);
    const [todoList, setTodoList] = useState([
        {id: 1, name: "Чтение статьи по JS", description: "Чтение learnJS", checked: false},
        {id: 2, name: "Работа над приложением", description: "Сделать логику приложения", checked: false},
        {id: 3, name: "UI фреймворки", description: "Практиковать UI фреймворки (MUi)", checked: true},
    ]);

    const onEdit = (id: Todo["id"]) => {
        setEditTodoId(id);
    };
    const onDeleteTodo = (id: Todo["id"]) => {
      setTodoList(todoList.filter(todo => todo.id !== id))
    };

    const onAddTodo = ({name, description}: Omit<Todo, "id" | "checked">) => {
        setTodoList([...todoList, {id: todoList[todoList.length - 1].id + 1, description, name, checked: false}]);
    };

    const onCheckTodo = (id: Todo["id"]) => {
        setTodoList(todoList.map(todo => {
            if (todo.id === id) {
                return {...todo, checked: !todo.checked};
            }
            return todo;
        }));
    };
        const onChangeTodo = ({name, description}: Omit<Todo, "id" | "checked">) => {
            setTodoList(todoList.map(todo => {
                if(todo.id === editTodoId) {
                    return {...todo, name, description };
                }
                return todo;
            }));
            setEditTodoId(null);
    };

    console.log("@@@", editTodoId)
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Panel onAddTodo={onAddTodo} />
            <TodoList editTodoId={editTodoId} todoList={todoList} onDeleteTodo={onDeleteTodo} onCheckTodo={onCheckTodo} onEdit={onEdit} onChangeTodo={onChangeTodo}/>
        </Box>
    );
};

export default TodoListPage;