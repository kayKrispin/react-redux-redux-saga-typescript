import React from "react";

export interface ITodoForm {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onPress: (e: React.KeyboardEvent) => void
}

export interface ITodoList <T> {
    todos: T []
}
