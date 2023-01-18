import { createStore, combineReducers } from 'redux';



const reducer = combineReducers({
    todos: todoReducers,
})

const store = createStore(

) 