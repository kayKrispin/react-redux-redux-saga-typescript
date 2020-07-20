import React from "react";
import "./App.css";
import NavBar from "./shared/Navbar";
import { TodoForm } from "./shared/TodoForm";
import { useTodoList } from "./hooks";
import TodoList from "./shared/TodoList";

const App: React.FC = () => {

  const { value, todos, onValueChange, onPressHandler } = useTodoList();


  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm
          value={value}
          onChange={onValueChange}
          onPress={onPressHandler}
        />
        <TodoList todos={todos}/>
      </div>
    </>
  );
};

export default App;
