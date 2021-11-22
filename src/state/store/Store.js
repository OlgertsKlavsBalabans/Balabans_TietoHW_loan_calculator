import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/Reducers";


export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);