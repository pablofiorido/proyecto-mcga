import { LOGIN_FULFILLED, LOGIN_PENDING, LOGIN_REJECTED } from "./constants";

const INITIAL_STATE = {
  userId: undefined,
  isLoading: false,
  error: "",
  isAuthed: false,
  isAdmin: false,
};

export const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isAdmin: action.payload.isAdmin,
        isAuthed: !!action.payload.jwt,
        jwt: action.payload.jwt,
        userId: action.payload._id,
      };
    case LOGIN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};