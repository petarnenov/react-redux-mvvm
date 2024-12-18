import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todos } from '../../types/todos';
import { createEntityAdapter } from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter<Todos>({
    sortComparer: (a, b) => b.dueDate.localeCompare(a.dueDate)
});

// Define the initial state for the Todos slice
const initialState = todosAdapter.getInitialState();

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1111' }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query<any, void>({
            query: () => '/todos',
            transformResponse: (data: Todos[]) => todosAdapter.setAll(initialState, data),
            providesTags: ['Todos']
        }),
        getTodo: builder.query<Todos, string>({
            query: (id) => `/todos/${id}`
        }),
        deleteTodo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todos']
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, useGetTodoQuery, useDeleteTodoMutation } = todosApi;

export const { selectIds } = todosAdapter.getSelectors();
