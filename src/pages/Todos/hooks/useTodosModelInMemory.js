import { useCallback, useState } from "react";

const data = {
    "todos": [
        {
            "id": "3",
            "title": "Pay bills",
            "description": "Electricity, water, and internet",
            "status": false,
            "dueDate": "2021-12-31"
        },
        {
            "id": "4",
            "title": "Go to the gym",
            "description": "Cardio and strength training",
            "status": false,
            "dueDate": "2023-06-15"
        },
        {
            "id": "5",
            "title": "Call mom",
            "description": "Check in and catch up",
            "status": true,
            "dueDate": "2023-06-10"
        },
    ]
}

const useTodosModel = () => {
    const [todos, setTodos] = useState(()=>data.todos);

    const deleteTodo = useCallback((id) => {
        setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
    }, [todos]);

    return {
        todos,
        error: null,
        isLoading: true,
        deleteTodo
    };
};

export default useTodosModel;
