import {
    ADD_TODO_FULFILLED,
    ADD_TODO_PENDING,
    ADD_TODO_REJECTED,
    FETCH_TODOS_PENDING,
    FETCH_TODOS_REJECTED,
    FETCH_TODOS_FULFILLED,
    EDIT_TODO_PENDING,
    EDIT_TODO_REJECTED,
    EDIT_TODO_FULFILLED,
    DELETE_TODO_FULFILLED,
    DELETE_TODO_REJECTED,
    DELETE_TODO_PENDING,
  } from "./constants";
  
  const INITIAL_STATE = {
    list: [],
    isLoading: false,
    error: "",
  };
  
  export const TodoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_TODOS_PENDING:
      case DELETE_TODO_PENDING:
      case EDIT_TODO_PENDING:
      case ADD_TODO_PENDING:
        return {
          ...state,
          isLoading: true,
        };
      case ADD_TODO_FULFILLED:
        return {
          ...state,
          isLoading: false,
          list: [...state.list, action.payload],
        };
      case DELETE_TODO_FULFILLED:
        const idx = state.list.findIndex((t) => t._id === action.payload._id)
        const updatedList = [...state.list]
        if (idx !== -1) {
          updatedList.splice(idx, 1)
          return {
            ...state,
            isLoading: false,
            list: updatedList
          };
        } else {
          return {
            ...state,
            isLoading: false,
            error: `Ha ocurrido un error al eliminar la tarea: ${action.payload._id}`
          }
        }
      case EDIT_TODO_FULFILLED:
        const index = state.list.findIndex((t) => t._id === action.payload._id)
        const editedList = [...state.list]
        if (index !== -1) {
          editedList.splice(index, 1, {...action.payload})
          return {
            ...state,
            isLoading: false,
            list: editedList
          };
        } else {
          return {
            ...state,
            isLoading: false,
            error: `Ha ocurrido un error al editar la tarea: ${action.payload._id}`
          }
        }
      case FETCH_TODOS_FULFILLED:
        return {
          ...state,
          isLoading: false,
          list: action.payload,
        };
      case ADD_TODO_REJECTED:
      case EDIT_TODO_REJECTED:
      case FETCH_TODOS_REJECTED:
      case DELETE_TODO_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };