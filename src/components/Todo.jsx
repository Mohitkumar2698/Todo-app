// import React, { useContext } from "react";
// import TodoContext from "../context/TodoContext";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../store/slices/todoSlice";

const Todo = () => {
  // const { todo, setTodo } = useContext(TodoContext);
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="min-h-[70vh] bg-slate-300 pl-[20vw] pr-[20vw] pt-[5vh] flex flex-col gap-2">
      {todo.map((todoItem) => {
        return (
          <div
            className="todo text-black bg-slate-600 w-[100%] rounded p-[1rem] flex justify-between pl-[1rem] pr-[1rem] items-center text-[1.2rem]"
            key={todoItem.id}
          >
            <p className="bg-white w-[90.5%] p-[0.5rem] rounded">
              {todoItem.text.toUpperCase()}
            </p>
            <button
              className="text-white p-[0.5rem] rounded w-[5rem] cursor-pointer text-[1.2rem]"
              // onClick={() => {
              //   const newTodo = todo.filter(
              //     (removeTodo) => removeTodo.id !== todoItem.id
              //   );
              //   setTodo(newTodo);
              // }}
              onClick={() => {
                dispatch(removeTodo(todoItem.id));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
