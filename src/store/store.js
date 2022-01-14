import {applyMiddleware, createStore} from "redux";
import {charReducer} from "./reduсer/charReducer";
import thunk from "redux-thunk";

export const store = createStore(charReducer, applyMiddleware(thunk))



