// @flow
/* eslint-disable no-underscore-dangle */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import createHistory from "history/createBrowserHistory";
import { Route, RouteProps } from "react-router-dom";
import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer
} from "react-router-redux";

import App from "@src/components/App";
import reducers from "@src/reducers";

// CSS escape hatch: name files with myfile.legacy.css
const legacyCss = require("./styles/style.legacy.css");

// https://github.com/emotion-js/emotion/pull/419
// import { ThemeProvider } from "emotion-theming";
import styled from "react-emotion";

// Extend window for TypeScript
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "http://localhost:8080/graphql" })
});

// Redux devtools are still enabled in production!
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionsBlacklist: []
    })
  : compose;

const appReducer = combineReducers({
  ...reducers,
  router: routerReducer
});

const history = createHistory();
const middleware = [thunkMiddleware, routerMiddleware(history)];

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

// Example of extending extra props on library components
interface MyRouteProps extends RouteProps {
  unusedProp: string;
}
class MyRoute extends Route<MyRouteProps> {}

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <MyRoute path="/" component={App} unusedProp="unused" />
        </div>
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
