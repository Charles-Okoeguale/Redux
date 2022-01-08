import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk) // this means the initial state which is usually empty.
)

