import axios from "axios";
import { loginPending, loginFulfilled, loginRejected } from "./actions";

export const login =
  (data) =>
  async (dispatch, _getState, { apiUrl }) => {
    try {
      dispatch(loginPending());
      const { data: response } = await axios.post(`${apiUrl}/auth/login`, data);
      if (response.success) {
        return dispatch(loginFulfilled(response.data));
      } else {
        return dispatch(loginRejected(response.message));
      }
    } catch (error) {
      return dispatch(loginRejected(error.message));
    }
  };
  