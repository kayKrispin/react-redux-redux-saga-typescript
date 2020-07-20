import React from "react";
import { ITodoList } from "../types";

// eslint-disable-next-line react/prop-types
const TodoList: React.FC<ITodoList> = ({ todos, onRemove, onToggle }) => {

  return (
    <ul>
      {
        todos.map(todo => {
          let active = [];

          if (todo.completed) active.push("completed");

          return (
            <li key={todo.id} className="todo d-flex">
              <input className="input-check" type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.completed}/>
              <span className={active.join(" ")} >{todo.title}</span>
              <i onClick={() => onRemove(todo.id)} className="material-icons red-text">Delete</i>
            </li>
          )
        })
      }
    </ul>
  )
};

export default TodoList;
