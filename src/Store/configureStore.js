import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "./rootReducer";
import { createHashHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";

export const history = createHashHistory();

const initialState = {};

const middleWare = [routerMiddleware(history)];
const composedEnhancers = compose(applyMiddleware(...middleWare));

export default createStore(
  connectRouter(history)(combineReducers),
  initialState,
  composedEnhancers
);
