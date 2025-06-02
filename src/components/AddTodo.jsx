// import { useContext } from "react";
// import TodoContext from "../context/TodoContext";
// import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";

const AddTodo = () => {
  // const { todo, setTodo } = useContext(TodoContext);
  const dispatch = useDispatch();

  return (
    <div className="h-[30vh] flex bg-slate-600 flex-col gap-9 justify-center items-center text-6xl text-white">
      <div className="heading-div">
        <h1>Todo List</h1>
      </div>
      <div className="form-div flex justify-center items-center">
        <form
          action="/"
          className="text-black bg-white w-[59.5vw] rounded p-[0.8rem] flex justify-between pl-[1rem] pr-[1rem] items-center text-[1.2rem]"
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   const text = e.target.text.value;
          //   setTodo([...todo, { id: nanoid(), text }]);
          // }}
          onSubmit={(e) => {
            e.preventDefault();
            const text = e.target.text.value;
            dispatch(addTodo(text));
          }}
        >
          <input
            className="w-[95%] border border-black pl-[0.5rem] text-[1.2rem] h-[5vh]"
            name="text"
            id="text"
            placeholder="write todo here..."
          ></input>
          <button className="rounded text-[1.3rem] w-[5rem] p-[0.5rem] cursor-pointer ml-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
