import React from "react";
import { addTodo } from "../store/slices/todoSlice.jsx";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [todo, setTodo] = React.useState("");
  const dispatch = useDispatch();

  const handleTodo = (e) => {
    e.preventDefault();
    if (todo === "") return;
    dispatch(addTodo({ id: Date.now(), todo, toggleComplete: false }));
    setTodo("");
  };

  return (
    <div className="  bg-[#357937]/15">
      <hr className=" bg-[#357937]/35 h-[2px] mb-6" />

      <form
        onSubmit={handleTodo}
        className="flex flex-col gap-4 p-2  rounded-lg"
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add A Task"
          className="flex-1 bg-transparent outline-none dark:text-white"
        />
        <div className="flex gap-2 justify-between">
          <div className=" flex items-center gap-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
              />
            </svg>

            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
              />
            </svg>

            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
              />
            </svg>
          </div>
          <button
            type="submit"
            className="px-4 py-1 bg-[#357937]/15 text-green-500 rounded-lg text-sm"
          >
            ADD TASK
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
