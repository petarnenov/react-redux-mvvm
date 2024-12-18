import { useDeleteTodoMutation, useGetTodosQuery } from '~/store/service/todos';

const useTodosModel = () => {
    const { data: { ids = [], entities = {} } = {},
        error,
        isLoading
    } = useGetTodosQuery(undefined, {
        //pollingInterval: 3000,
        refetchOnMountOrArgChange: true
        //refetchInterval: 60000,
        //refetchOnWindowFocus: true,
        //refetchOnReconnect: true,
        //refetchOnMount: true,
        //refetchOnFocus: true,
    });
    const [deleteTodo] = useDeleteTodoMutation();

    return {
        todos: ids.map((id) => entities[id]),
        error,
        isLoading,
        deleteTodo
    };
};

export default useTodosModel;
