import types from "./types";

let index = 0;

const addTask = (text) => ({
    type: types.ADD_TASK,
    id: index++,
    complete: false,
    text
})
const removeTask = (id) => ({
    type: types.REMOVE_TASK,
    id
})

const doneTask = (id) => ({
    type: types.DONE_TASK,
    id
})
const changeFilter = (filter) => ({
    type: types.CHANGE_FILTER,
    filter
})

export default {
    addTask, removeTask, doneTask, changeFilter
}