import * as actionTypes from '../action/type';

export const todosReducers = (state= [], action) => { 
 
    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
            return[action.payload, ...state]
        case action.type.GETALL_TODO:
            return action.payload

        default:
        return state;
    }
}

