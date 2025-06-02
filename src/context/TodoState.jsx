import { useState } from "react";
import TodoContext from "./TodoContext";
import { nanoid } from "nanoid";

const TodoState = (props) => {
  const [todo, setTodo] = useState([
    { id: nanoid(), text: "go to garden at 4pm" },
  ]);
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
