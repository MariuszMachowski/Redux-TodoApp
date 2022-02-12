import types from "../todos/types";

const filter = (state = types.SHOW_ALL, action) => {
    switch (action.type) {
        case types.CHANGE_FILTER:
            return action.filter
        default:
            return state;
    }
}

export default filter