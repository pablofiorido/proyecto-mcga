import axios from "axios";

import { loginPending, loginFulfilled, loginRejected } from "./actions";

////

import { registerPending, registerFulfilled, registerRejected } from "./actions";


export const login =
  (data) =>
  async (dispatch, _getState, { apiUrl }) => {
    try {
      dispatch(loginPending());
      const { data: response } = await axios.post(`${apiUrl}/auth/login`, data);
      if (response.success) {
        return dispatch(loginFulfilled(response));
      } else {
        return dispatch(loginRejected(response.message));
      }
    } catch (error) {
      return dispatch(loginRejected(error.message));
    }
  };
  
//////////////

export const register =
  (data) =>
  async (dispatch, _getState, { apiUrl }) => {
    
    try {
      dispatch(registerPending());
      const { data: response } = await axios.post(`${apiUrl}/auth/register`, data);
      if (response.success) {
        return dispatch(registerFulfilled(response));
      } else {
        return dispatch(registerRejected(response.message));
      }
    } catch (error) {
      return dispatch(registerRejected(error.message));
    }
  };
  

  