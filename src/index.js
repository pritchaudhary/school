import "react-app-polyfill/ie9"; // For IE 9-11 support
import "react-app-polyfill/stable";
// import 'react-app-polyfill/ie11'; // For IE 11 support
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import localForage from "localforage";
import { getStoredState } from "redux-persist";
import "./index.css";
import App from "./App";
//import * as serviceWorker from "./serviceWorker";
import createStore from "../src/redux/create";
import apiClient from "../src/helpers/apiClient";
import { createBrowserHistory } from "history";

const client = apiClient();
const providers = {
  client,
};
(async () => {
  const persistConfig = {
    key: "root",
    storage: localForage,
    stateReconciler(inboundState, originalState) {
      // Ignore state from cookies, only use preloadedState from window object
      return originalState;
    },
    whitelist: [
      "doctors",
      "departments",
      "services",
      "subDepartments",
      "parameters",
    ],
  };

  const preloadedState = await getStoredState(persistConfig);
  const history = await createBrowserHistory();

  const store = createStore({
    history,
    data: {
      ...preloadedState,
      ...window.__data,
    },
    helpers: providers,
    persistConfig,
  });

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
})();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
