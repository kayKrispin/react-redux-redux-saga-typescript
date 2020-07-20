import React from "react";
import { ITodoList } from "../types";

const TodoList: React.FC<ITodoList <string>> = ({ todos }) => {

  return (
    <ul>
      {
        todos.map(todo => {

          return (
            <li key={todo} className="todo">
              <input type="checkbox"/>
              <span></span>
              <i className="material-icons red-text">Delete</i>
            </li>
          )
        })
      }
    </ul>
  )
};

export default TodoList;
