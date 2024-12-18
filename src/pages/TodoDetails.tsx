import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTodoQuery } from '~/store/service/todos';

export const TodoDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: todo, isLoading, error } = useGetTodoQuery(id!,{
        refetchOnMountOrArgChange: true
    });

    return (
        <div>
            <h2>Todo Details</h2>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {JSON.stringify(error,null,2)}</div>}
            {todo && (
                <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
                </div>
            )}
        </div>
    );
};
