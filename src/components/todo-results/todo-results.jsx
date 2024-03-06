import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
    const completedTodos = todos.filter((todo)=>{
      return todo.checked === true;
    })
    return completedTodos.length;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
