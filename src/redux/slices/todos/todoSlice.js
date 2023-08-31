import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        contador: 0,
        cantidadTareas: 0,
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, actions) => {
            state.isLoading = actions.payload.isLoading;
        },
        addTodo: (state, actions) => {
            state.todos.push({
                id: actions.payload.id,
                text: actions.payload.text,
                completed: false
            });
            state.cantidadTareas += 1;
        },
        showTodo: (state) => {
            console.log(state.todos)
        },
        setCompletedTodo: (state, actions) => {
            console.log(actions)
            state.todos.map(todo => {
                if (todo.id === actions.payload.id) {
                    if (actions.payload.completed === true) {

                        state.contador += 1;
                    } else {
                        state.contador -= 1;
                    }
                    todo.completed = actions.payload.completed;
                }
            })
        },
        deleteTodo: (state, actions) => {
            state.todos = state.todos.filter(todo => todo.id !== actions.payload.id)
            state.cantidadTareas -= 1;
        }
    }
});


export const { addTodo, showTodo, setCompletedTodo, deleteTodo, startLoadingPokemons } = todoSlice.actions;