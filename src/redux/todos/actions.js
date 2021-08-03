import {
    ADD_TODO_PENDING,
    ADD_TODO_FULFILLED,
    ADD_TODO_REJECTED,
    FETCH_TODOS_FULFILLED,
    FETCH_TODOS_REJECTED,
    FETCH_TODOS_PENDING,
    EDIT_TODO_FULFILLED,
    EDIT_TODO_REJECTED,
    EDIT_TODO_PENDING,
    DELETE_TODO_FULFILLED,
    DELETE_TODO_REJECTED,
    DELETE_TODO_PENDING,
  } from "./constants";
  
  export const addTodoPending = () => ({
    type: ADD_TODO_PENDING,
  });
  
  export const addTodoFulfilled = (payload) => ({
    type: ADD_TODO_FULFILLED,
    payload: payload,
  });
  
  export const addTodoRejected = (err) => ({
    type: ADD_TODO_REJECTED,
    error: err,
  });
  
  export const fetchTodosPending = () => ({
    type: FETCH_TODOS_PENDING,
  });
  
  export const fetchTodosFulfilled = (payload) => ({
    type: FETCH_TODOS_FULFILLED,
    payload: payload,
  });
  
  export const fetchTodosRejected = (err) => ({
    type: FETCH_TODOS_REJECTED,
    error: err,
  });

  export const editTodoFulfilled = (payload) => ({
    type: EDIT_TODO_FULFILLED,
    payload: payload,
  });
  
  export const editTodoPending = () => ({
    type: EDIT_TODO_PENDING,
  });
  
  export const editTaskFulfilled = (payload) => ({
    type: EDIT_TODO_FULFILLED,
    payload: payload,
  });
  
  export const editTodoRejected = (err) => ({
    type: EDIT_TODO_REJECTED,
    error: err,
  });
  
  export const deleteTodoPending = () => ({
    type: DELETE_TODO_PENDING,
  });
  
  export const deleteTodoFulfilled = (payload) => ({
    type: DELETE_TODO_FULFILLED,
    payload: payload,
  });
  
  export const deleteTodoRejected = (err) => ({
    type: DELETE_TODO_REJECTED,
    error: err,
  });
