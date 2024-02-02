import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GreetingPage from "./pages/GreetingPage/GreetingPage";
import TodoListPage from "./pages/TodoListPage/TodoListPage";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GreetingPage />} />
                <Route path="/main" element={<TodoListPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;