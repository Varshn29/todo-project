import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../Action/Constants";

const initialState = [];

let todoId = 0;

export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { payload } = action;
            return [...state,
            { task: payload.task, description: payload.description, isComplete: false, id: ++todoId }]
        }

        case COMPLETE_TODO: {
            return state.map((todo) => (todo.id === payload.id) ? { ...todo, isComplete: true } : todo)

        }
        case DELETE_TODO: {
            return state.filter((todo) => todo.id !== action.id)
        }
        default: return state;
    }
}