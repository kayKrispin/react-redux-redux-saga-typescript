import React, { useState } from "react";
import { ITodo } from "../types";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export function useTodoList () {

  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo []>([]);
  const dispatch = useDispatch();


  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  const onPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onAddTodo(value);
      setValue("");
    }
  };

  const onAddTodo = (todo: string) => {

    const newTodo = {
      title: todo,
      id: Date.now(),
      completed: false
    };

    dispatch(addTodo(newTodo));
  };

  const onToggleTodo = (id: number) => {

    const newTodos = todos.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo

    });

    setTodos(newTodos);
  };


  const onRemoveTodo = (id: number) => {

    const newTodos = todos.filter(todo => todo.id !== id);

    setTodos(newTodos);
  };

  return {
    value,
    todos,
    onValueChange,
    onPressHandler,
    onToggleTodo,
    onRemoveTodo
  }

}
