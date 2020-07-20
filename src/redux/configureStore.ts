import { createStore, applyMiddleware, combineReducers } from "redux";
import { todos } from "./reducers";
import { AppActions } from "../types/actions";

export const rootReducer = combineReducers({
  todos
});

// eslint-disable-next-line no-undef
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
