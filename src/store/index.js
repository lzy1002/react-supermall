import {createStore, applyMiddleware} from "redux";
import reduxLogger from "redux-logger";

import reducer from "./reducers/index.js";

const store = createStore(reducer, applyMiddleware(reduxLogger));

export default store;
