import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Todos from './pages/Todos/Todos';
import NotFoundPage from './pages/NotFoundPage';
import { ROUTES } from './resources/routes-constants';
import './styles/main.sass';
import { TodoDetails } from './pages/TodoDetails';

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />}>
                    <Route path={ROUTES.TODOS_ROUTE} element={<Todos />} />
                    <Route path={ROUTES.TODO_DETAILS_ROUTE} element={<TodoDetails />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default RootComponent;
