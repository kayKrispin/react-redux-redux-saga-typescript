import React, { useState } from "react";

export function useTodoList () {

  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string []>([]);


  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  const onPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo(value);
      setValue("");


    }
  };

  const addTodo = (todo: string) => {

    const newTodo = {
      title: todo,
      id: Date.now(),
      completed: false
    };

    const newTodos = [newTodo, ...todos];

    setTodos(newTodos);
  };

  return {
    value,
    onValueChange,
    onPressHandler,
    todos
  }

}
