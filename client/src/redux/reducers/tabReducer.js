import *as actionType from '../action/type';


export const tabReducer = (state= actionType.ALL_TODOS, action) => {
    switch (action.type) {
        case actionType.TOGGLE_TAB:
            return action.selected
            default:
            return state;
    }
}
