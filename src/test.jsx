// store.js
import { createStore, combineReducers } from 'redux';

// Actions
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        text
    }
});

const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {
        id
    }
});

// Reducers
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [ ...state,{id: Math.random(),text: action.payload.text
                }
            ];
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todos
});

// Store
const store = createStore(rootReducer);

export { store, addTodo, removeTodo };
