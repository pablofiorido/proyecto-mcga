import axios from "axios";
import {
  addTodoPending,
  addTodoFulfilled,
  addTodoRejected,
  fetchTodosFulfilled,
  fetchTodosPending,
  fetchTodosRejected,
  editTodoFulfilled,
  editTodoRejected,
  editTodoPending,
  deleteTodoFulfilled,
  deleteTodoRejected,
  deleteTodoPending,
} from "./actions";

export const addTodo =
  (data) =>
  async (dispatch, _getState, { apiUrl }) => {      //APIURL LO INJECTA EN LA CONFIG DEL STORE
    //agregado lo de abajo
    const authstate = _getState().auth;     //CHEQUEA LOGIN.
    console.log("console 1 entro")        //DEBUG
    try {
      dispatch(addTodoPending());   //DESCPACHO ACTION PENDING PARA PONER LA UI EN ISLOADING
      const { data: response } = await axios.post(`${apiUrl}/todos/add`, data, {headers: {authorization: authstate.jwt}});    //METO EL TOKEN EN EL HEADER POR QUE ME DABA ERROR :(
      if (response.success) {       //SI SALIO BIEN LA REQ DESPACHO LA ACTION SI NO DESPACHO UN REJECT
        dispatch(addTodoFulfilled(response));
      } else {
        dispatch(addTodoRejected(response.message));
      }
    } catch (error) {       //POR SI SE ROMPE TODO
      dispatch(addTodoRejected(error.message));
    }
  };



export const fetchTodos =
  () =>
  async (dispatch, _getState, { apiUrl }) => {
    console.log("console 2 entro")
    try {
      dispatch(fetchTodosPending());
      const authstate = _getState().auth;
      const { data: response } = await axios.get(`${apiUrl}/todos`, {headers: {authorization: authstate.jwt}});
      if (response.success) {
        console.log(response)
        dispatch(fetchTodosFulfilled(response.data));
      } else {
        dispatch(fetchTodosRejected(response.message));
      }
    } catch (error) {
      dispatch(fetchTodosRejected(error.message));
    }
  };

/*export const editTodo =
  (id, value) =>
  async (dispatch, _getState, { apiUrl }) => {
    console.log("console 3 entro")
    try {
      dispatch(editTodoPending());
      //agregado lo de abajo
      const authstate = _getState().auth;
      const { data: response } = await axios.put(`${apiUrl}/todos/edit/${id}`,{headers: {authorization: authstate.jwt}}, {
        id: id,
        description: value,
      });
      if (response.success) { 
        dispatch(editTodoFulfilled(response));
      } else {
        dispatch(editTodoRejected(response.message));
      }
    } catch (error) {
      dispatch(editTodoRejected(error.message));
    }
  }; */

  export const editTodo =
  (id, value) =>
  async (dispatch, getState, { apiUrl }) => {
    try {
      dispatch(editTodoPending());
      const authState = getState().auth;
      const { data: response } = await axios.put(
        `${apiUrl}/todos/edit/${id}`,
        {
          id: id,
          description: value,
        },
        {
          headers: {
            authorization: authState.jwt,
          },
        }
      );
      if (response.success) {
        dispatch(editTodoFulfilled(response));
      } else {
        dispatch(editTodoRejected(response.message));
      }
    } catch (error) {
      dispatch(editTodoRejected(error.message));
    }
  };


export const deleteTodo =
  (id) =>
  async (dispatch, _getState, { apiUrl }) => {
    //agregado lo de abajo
    const authstate = _getState().auth;
    console.log("console 4 entro")
    try {
      dispatch(deleteTodoPending());
      console.log(`${apiUrl}/todos/${id}`);
      const { data: response } = await axios.delete(`${apiUrl}/todos/${id}`, {headers: {authorization: authstate.jwt}});
      if (response.success) {
        dispatch(deleteTodoFulfilled(response));
      } else {
        dispatch(deleteTodoRejected(response.message));
      }
    } catch (error) {
      dispatch(deleteTodoRejected(error.message));
    }
  };