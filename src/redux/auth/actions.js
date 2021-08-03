import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED } from "./constants";

export const loginPending = () => ({
  type: LOGIN_PENDING,
});

export const loginFulfilled = (payload) => ({
  type: LOGIN_FULFILLED,
  payload: payload,
});

export const loginRejected = (err) => ({
  type: LOGIN_REJECTED,
  error: err,
});