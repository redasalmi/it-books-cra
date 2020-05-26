import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initialState = {};
const middleware = [thunk, logger];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
