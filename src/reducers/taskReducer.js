import types from "../todos/types";
import { produce } from 'immer';
const tasks = (state = [], action) => {
    switch (action.type) {
        case types.ADD_TASK:
            return produce(state, draftState => {
                draftState.unshift({ id: action.id, text: action.text, complete: action.complete })
            })
        case types.REMOVE_TASK:
            return produce(state, draftState => {
                const index = draftState.findIndex(task => task.id === action.id);
                draftState.splice(index, 1);
            })
        case types.DONE_TASK:
            return produce(state, draftState => {
                const index = draftState.findIndex(task => task.id === action.id);
                draftState[index].complete = true;
            })
        default:
            return state
    }
}

export default tasks;