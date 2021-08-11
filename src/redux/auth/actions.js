import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED } from "./constants";

/////////////

import { REGISTER_PENDING, REGISTER_FULFILLED, REGISTER_REJECTED } from "./constants";



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


//////////////


export const registerPending = () => ({
  type: REGISTER_PENDING,
});

export const registerFulfilled = (payload) => ({
  type: REGISTER_FULFILLED,
  payload: payload,
});

export const registerRejected = (err) => ({
  type: REGISTER_REJECTED,
  error: err,
});