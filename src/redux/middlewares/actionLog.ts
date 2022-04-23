import { Middleware } from "redux";

export const actionLog: Middleware = ({ dispatch, getState }) => next => action => {
  console.log('dispatching', action);
  next(action);
  console.log('next state', getState());
  // return result;
};
