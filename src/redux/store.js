import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TodoReducer } from "./todos/reducers";
import { apiUrl } from "../helpers/contants";
import { LoginReducer } from "./auth/reducers";


export const store = createStore(
  combineReducers({ todos: TodoReducer, auth: LoginReducer }),
  applyMiddleware(thunk.withExtraArgument({ apiUrl }))
);