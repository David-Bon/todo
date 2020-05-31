import {TOGGLE_TODO_DONE} from "../reducer/reducer";

export const setToggleImportant = (id) => ({
    type: TOGGLE_TODO_DONE,
    payload: id
});