import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTodosViewModel as useTodosViewModelDI } from './hooks';
import { useTodosModel as useTodosModelDI } from './hooks';
import { useTodosModelInMemory as useTodosInMemoryDI } from './hooks';

function Todos({ useTodosViewModel = useTodosViewModelDI, useTodosModel = useTodosInMemoryDI }) {
    const { todos, isLoading, error, handleDeleteTodo } = useTodosViewModel({ useTodosModel });

    const renderData = useMemo(
        () =>
            todos && (
                <ul>
                    {todos.map(({ id, dueDate, title, components }) => (
                        <li key={id} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                            <Link to={`/todos/${id}`} style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', flex: 1 }}>
                                <span>{dueDate}</span>
                                <span>{title}</span>
                                <span>{components ? '✔' : '❌'}</span>
                            </Link>
                            <button onClick={() => handleDeleteTodo(id.toString())}>Delete</button>
                        </li>
                    ))}
                </ul>
            ),
        [todos]
    );

    return (
        <div>
            <h2>Todos</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.toString()}</p>}
            {renderData}
        </div>
    );
}

export default Todos;
