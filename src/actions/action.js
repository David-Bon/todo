import {
    ON_ADD_ITEM,
    ON_TOGGLE_DELETE,
    TOGGLE_TODO_DONE,
    TOGGLE_TODO_IMPORTANT
} from "../reducer/reducer";

export const setToggleDone = (id) => ({
    type: TOGGLE_TODO_DONE,
    payload: id
});

export const setToggleImportant = (id) => ({
   type: TOGGLE_TODO_IMPORTANT,
   payload: id
});

export const onToggleDelete = (id) => ({
    type: ON_TOGGLE_DELETE,
    payload: id
});

export const onAddItem = (addText) => ({
   type: ON_ADD_ITEM,
    payload: addText
});
