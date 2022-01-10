import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";




const reducers = {}; 
const initialState = {};
const Middleware = applyMiddleware(thunk);

const store = createStore( reducers, initialState, Middleware)

export default store;