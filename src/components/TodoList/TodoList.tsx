import React from 'react';
import {Box} from "@mui/material";
import TodoItem from "./TodoItem/TodoItem";
import EditTodoItem from "./EditTodoItem/EditTodoItem";
import {Todo} from "../types";


interface TodoListProps {
    editTodoId: Todo["id"] | null;
    todoList: Todo[];
    onDeleteTodo: (id: Todo["id"]) => void;
    onCheckTodo: (id: Todo["id"]) => void;
    onEdit: (id: Todo["id"]) => void;
    onChangeTodo: (todo: Omit<Todo, "id" | "checked">) => void;
}

const TodoList: React.FC<TodoListProps> = ({editTodoId, todoList, onChangeTodo, onDeleteTodo, onCheckTodo, onEdit}) => {
    return (
        <Box>
            {todoList.map((todo) => {
                if (todo.id === editTodoId) {
                    return (
                        <EditTodoItem todo={todo} key={todo.id} onChangeTodo={onChangeTodo}/>
                    );
                } else {
                    return (
                        <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onCheckTodo={onCheckTodo} onEdit={() => onEdit(todo.id)} key={todo.id} />
                    );
                }
            })}
        </Box>
    );
};

export default TodoList;
