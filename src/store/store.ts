import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { counterReducer, dateReducer, tooltipReducer  } from './slices';
import { todosApi } from './service/todos';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['date', 'counter']
};

const rootReducer = combineReducers({
    tooltip: tooltipReducer,
    date: dateReducer,
    counter: counterReducer, // Add your other reducers here
    [todosApi.reducerPath]: todosApi.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(todosApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Inferred type: Dispatch<AnyAction>

export const persistor = persistStore(store);
