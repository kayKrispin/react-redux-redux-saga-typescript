import { ITodo } from "../../types";
import { TodosActions } from "../../types/actions";

const initialState: ITodo [] = [];

export const todos = (state = initialState, action: TodosActions): ITodo [] => {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload, ...state];

    default:
      return state
  }
};

