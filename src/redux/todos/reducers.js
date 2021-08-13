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
  

  //ESTADO INICIAR DEL MODULO TODO. ACA GUARDA LA LISTA, ERRORES Y ISLOADING DE LAS TODO'S.
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
      case ADD_TODO_FULFILLED:      //SI LA REQ FUE EXITOSA HACE PUSH A LA LISTA Y RESETEA EL STATE
        return {
          ...state,
          isLoading: false,
          list: [...state.list, action.payload],      //es lo mismo que hacer [...state.list].push(action.payload)
        };
      case DELETE_TODO_FULFILLED:
        const idx = state.list.findIndex((t) => t._id === action.payload._id)       //BUSCA EN EL INDEX LA POSICION DE LO QUE QUIERO BORRAR
        const updatedList = [...state.list]
        if (idx !== -1) {                   //SI EL INDEX NO EXISTE ES -1
          updatedList.splice(idx, 1)
          return {
            ...state,
            isLoading: false,
            list: updatedList
          };
        } else {                //SI NO ENCUENTRA EL ELEMENTO EN LA LISTA:
          return {
            ...state,
            isLoading: false,
            error: `Ha ocurrido un error al eliminar la tarea: ${action.payload._id}`
          }
        }
      case EDIT_TODO_FULFILLED:                       //HAGO LO MISMO QUE EN EL DELETE PERO LE MANDO UN 3 PARAMETRO QUE ES EL DATO QUE VA A INSERTAR
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
          list: action.payload,               //EL BACK ME DEVUELVE LA LISTA ASI QUE LA ALMACENO EN LA LISTA COMPLETA
        };
      case ADD_TODO_REJECTED:                     //EN CASO DE ERROR LO ALMACENO PARA PODER MOSTRARLO
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