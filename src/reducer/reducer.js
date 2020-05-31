export const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE';

let initialState = {
    todo: [
        {id: 1, text: 'React App', done: false, important: false},
        {id: 2, text: 'React App', done: false, important: false},
        {id: 3, text: 'React App', done: false, important: false},
    ]
};
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_TODO_DONE :
            const id = action.payload;
            const todoIdx = state.todo.findIndex(item => item.id === id);
            const todoItem = state.todo[todoIdx];
            const newTodoItem = {...todoItem, done: !todoItem['done']};
            const newTodoArray = [
                ...state.todo.slice(0, todoIdx), newTodoItem, ...state.todo.slice(todoIdx + 1)];

            return {
                ...state,
                todo: newTodoArray
            };
        default:
            return state;
    }
};
export default reducer;