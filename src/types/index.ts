import React from "react";

export interface ITodoForm {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onPress: (e: React.KeyboardEvent) => void
}

export interface ITodo {
    title: string,
    id: number,
    completed: boolean
}

export interface ITodoList {
    todos: ITodo [],
    onToggle: (id: number) => void,
    onRemove: (id: number) => void
}

export interface ITodoListState {
    todos: ITodo [],
    onColorChange: () => void
}

export enum EModelTypes {
    DANGER = "DANGER",
    SUCCESS = "SUCCESS",
    WARNING = "WARNING"
}

export interface IModalTypes {
   type: EModelTypes
}

export interface INavbar {
    onChange: (type: IModalTypes) => void
}
