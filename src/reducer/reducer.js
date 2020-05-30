let initialState = {
    todo: [
        {id: 1, text: 'React App', done: false, important: false},
        {id: 2, text: 'React App', done: false, important: false},
        {id: 3, text: 'React App', done: false, important: false},
    ]
};
let reducer = (state = initialState, action) => {
    return state
};
export default reducer;