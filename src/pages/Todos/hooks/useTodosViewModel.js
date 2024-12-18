import { useCallback } from "react";
import useTodosModelDI from "./useTodosModel"

const useTodosViewModel = ({ useTodosModel = useTodosModelDI } = {}) => {
    const { todos, deleteTodo, isLoading, error } = useTodosModel();

    const handleDeleteTodo = useCallback((id) => {
        deleteTodo(id);
    }, [deleteTodo]);

    return {
        todos,
        isLoading,
        error,
        handleDeleteTodo,
    };
};

export default useTodosViewModel;
