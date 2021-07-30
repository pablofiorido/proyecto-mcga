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
  async (dispatch, _getState, { apiUrl }) => {
    try {
      dispatch(addTodoPending());
      const { data: response } = await axios.post(`${apiUrl}/todos/add`, data);
      if (response.success) {
        dispatch(addTodoFulfilled(response.data));
      } else {
        dispatch(addTodoRejected(response.message));
      }
    } catch (error) {
      dispatch(addTodoRejected(error.message));
    }
  };

export const fetchTodos =
  () =>
  async (dispatch, _getState, { apiUrl }) => {
    try {
      dispatch(fetchTodosPending());
      const { data: response } = await axios.get(`${apiUrl}/todos`);
      if (response.success) {
        dispatch(fetchTodosFulfilled(response.data));
      } else {
        dispatch(fetchTodosRejected(response.message));
      }
    } catch (error) {
      dispatch(fetchTodosRejected(error.message));
    }
  };

export const editTodo =
  (id, value) =>
  async (dispatch, _getState, { apiUrl }) => {
    try {
      dispatch(editTodoPending());
      const { data: response } = await axios.put(`${apiUrl}/todos/edit/${id}`, {
        id: id,
        description: value,
      });
      if (response.success) {
        dispatch(editTodoFulfilled(response.data));
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
    try {
      dispatch(deleteTodoPending());
      console.log(`${apiUrl}/todos/${id}`);
      const { data: response } = await axios.delete(`${apiUrl}/todos/${id}`);
      if (response.success) {
        dispatch(deleteTodoFulfilled(response.data));
      } else {
        dispatch(deleteTodoRejected(response.message));
      }
    } catch (error) {
      dispatch(deleteTodoRejected(error.message));
    }
  };