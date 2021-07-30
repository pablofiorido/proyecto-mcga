import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TodoReducer } from "./todos/reducers";
import { apiUrl } from "../helpers/contants";

export const store = createStore(
  combineReducers({ tasks: TodoReducer }),
  applyMiddleware(thunk.withExtraArgument({ apiUrl }))
);