import * as types from "../actionTypes";
import { ModelTypes, ITodo } from "../../types";
import { ColorsActions, TodosActions } from "../../types/actions";

export const addTodoRequest = (): TodosActions => ({
  type: types.ADD_TODO,
  payload: todo
});

export const addTodo = (todo: ITodo): TodosActions => ({
  type: types.ADD_TODO,
  payload: todo
});

export const removeTodo = (id: number): TodosActions => ({
  type: types.REMOVO_TODO,
  payload: id
});

export const toggleTodo = (id: number): TodosActions => ({
  type: types.TOGGLE_TODO,
  payload: id
});

export const setColor = (type: ModelTypes): ColorsActions => ({
  type: types.SET_COLOR,
  payload: type
});
