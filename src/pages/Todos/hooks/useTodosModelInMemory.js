import { useCallback, useState } from "react";

const dataDI = [
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


const useTodosModel = (data = dataDI) => {
    const [todos, setTodos] = useState(data);

    const deleteTodo = useCallback((id) => {
        setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
    }, [todos]);

    return {
        todos,
        error: null,
        isLoading: false,
        deleteTodo
    };
};

export default useTodosModel;
