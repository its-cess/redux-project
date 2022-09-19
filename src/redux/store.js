import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/index";

// createStore takes2 arguments. (reducers, state{empty object}, then add the Redux devtools.)
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
