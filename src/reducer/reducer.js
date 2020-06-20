export const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE';
export const TOGGLE_TODO_IMPORTANT = 'TOGGLE_TODO_IMPORTANT';
export const ON_TOGGLE_DELETE = 'ON_TOGGLE_DELETE';
export const ON_ADD_ITEM = 'ON_ADD_ITEM';
let maxId = 4;
let initialState = {
    todo: [
        {id: 1, text: 'React App1', done: false, important: false},
        {id: 2, text: 'React App2', done: false, important: false},
        {id: 3, text: 'React App3', done: false, important: false},

    ],
    newItemText: ''
};

const setToggle = (state, value, itemProps) => {

    const todoIdx = state.todo.findIndex(item => item.id === value);
    const todoItem = state.todo[todoIdx];
    const newTodoItem = {...todoItem, [itemProps] : !todoItem[itemProps]};
    return [
        ...state.todo.slice(0, todoIdx), newTodoItem, ...state.todo.slice(todoIdx + 1)];
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TODO_DONE :
            const newTodoArray = setToggle(state, action.payload, 'done');
            return {
                ...state,
                todo: newTodoArray
            };
        case TOGGLE_TODO_IMPORTANT :
            const newImpArray = setToggle(state, action.payload, 'important');
            return {
                ...state,
                todo: newImpArray
            };
        case ON_TOGGLE_DELETE :
            const delId = action.payload;
            const delIdx = state.todo.findIndex(item => item.id === delId);
            const newArr = [...state.todo.slice(0, delIdx), ...state.todo.slice(delIdx + 1)];
            return {
                ...state, todo: newArr
            };
        case ON_ADD_ITEM :
            const newItem = {id: maxId++, text: action.payload, done: false, important: false};
            const newArray = [...state.todo];
            newArray.push(newItem);
            return {
             todo: newArray
            };
        default:
            return state;
    }
};
export default reducer;