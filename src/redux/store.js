import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TodoReducer } from "./todos/reducers";
import { apiUrl } from "../helpers/constants";
import { LoginReducer } from "./auth/reducers";

//CREA LA STORE
export const store = createStore(
  combineReducers({ todos: TodoReducer, auth: LoginReducer }),    //JUNTO LOS REDUCERS QUE CREA DE LOS MODULOS AUTH Y TASK
  applyMiddleware(thunk.withExtraArgument({ apiUrl }))        // aplico el extraArgument para usar el apiUrl en los thunks (llega como 3er parametro en el thunk).
);