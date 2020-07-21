import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { todos } from "./reducers";
import rootSaga from "./rootSaga";

export const rootReducer = combineReducers({
  todosReducer: todos
});

// eslint-disable-next-line no-undef
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  // Combine all middlewares into single enhancer
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // Compose all enhancer into single function
  const enhancers = [middlewareEnhancer];
  const composeFunction = process.env.NODE_ENV !== "production" ? composeWithDevTools : compose;

  // Create store with preloaded state and enhancers
  const store = createStore(rootReducer, ...enhancers);

  // Run all sagas
  sagaMiddleware.run(rootSaga);

  return store;
}

