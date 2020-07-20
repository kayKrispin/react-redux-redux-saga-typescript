import { IModalTypes, ITodo } from "./index";
import { ADD_TODO, REMOVO_TODO, SET_COLOR, TOGGLE_TODO } from "../redux/actionTypes";

export interface IAddTodoAction {
    type: typeof ADD_TODO,
    payload: ITodo
}

export interface IRemoveTodoAction {
    type: typeof REMOVO_TODO,
    payload: number
}

export interface IToggleTodoAction {
    type: typeof TOGGLE_TODO,
    payload: number
}

export interface ISetColorAction {
    type: typeof SET_COLOR,
    payload: IModalTypes
}

export type TodosActions =
    | IAddTodoAction
    | IRemoveTodoAction
    | IToggleTodoAction;

export type ColorsActions =
    | ISetColorAction


export type AppActions = TodosActions | ColorsActions;
