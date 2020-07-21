import { ITodosReducer } from "../../types";
import { TodosActions } from "../../types/actions";

const initialState: ITodosReducer = {
  todos: [],
  color: "DANGER"
};


export const todos = (state: ITodosReducer = initialState, action: TodosActions): ITodosReducer => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos:  [action.payload, ...state.todos]
      };

    case "SET_COLOR":
      return {
        ...state,
        color: action.payload
      };
    default:
      return state
  }
};

