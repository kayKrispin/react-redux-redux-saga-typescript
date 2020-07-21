import React from "react";
import "./App.css";
import NavBar from "./shared/Navbar";
import { TodoForm } from "./shared/TodoForm";
import { useTodoList } from "./hooks";
import TodoList from "./shared/TodoList";
import { connect, ConnectedProps } from "react-redux";
import { ModelTypes, ITodo } from "./types";
import { AppState } from "./redux/configureStore";
import { Dispatch } from "redux";
import { setColor } from "./redux/actions";
import { AppActions } from "./types/actions";

// eslint-disable-next-line react/prop-types
const App: React.FC<PropsFromRedux> = ({ todos, onColorChange, color }) => {

  const {
    value,
    onValueChange,
    onPressHandler,
    onToggleTodo,
    onRemoveTodo
  } = useTodoList();
  
  return (
    <>
      <NavBar onChange={onColorChange} />
      <div className="container">
        <TodoForm
          value={value}
          onChange={onValueChange}
          onPress={onPressHandler}
        />
        <TodoList
          onRemove={onRemoveTodo}
          onToggle={onToggleTodo}
          todos={todos}
        />
      </div>
    </>
  );
};


interface LinkStateProp {
    todos: ITodo [],
    color: ModelTypes
}

interface LinkDispatchProp {
  onColorChange: (type: ModelTypes) => void
}

const mapState = (state: AppState): LinkStateProp => ({
  todos: state.todosReducer.todos,
  color: state.todosReducer.color
});

const mapDispatch = (dispatch: Dispatch<AppActions>): LinkDispatchProp => ({
  onColorChange: (type: ModelTypes) => dispatch(setColor(type))
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App);
