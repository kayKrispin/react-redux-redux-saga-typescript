import React from "react";
import { ITodoForm } from "../types";

export const TodoForm: React.FC<ITodoForm> = ({ value, onChange, onPress }) => {
    
  return (
    <div className="input-field col s12">
      <input
        value={value}
        onChange={onChange}
        onKeyPress={onPress}
        id="email"
        type="email"
        className="validate"
      />
      <label htmlFor="email">Email</label>
    </div>
  )
};
