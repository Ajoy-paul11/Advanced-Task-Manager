import React from "react";
import { useSelector } from "react-redux";
import ListOfTodo from "./ListOfTodo.jsx";
import AddTodo from "./AddTodo.jsx";

function Container() {
  const allTask = useSelector((state) => state.todo);

  return (
    <div className=" flex min-h-screen bg-[#fbfdfc] p-10 dark:bg-[#242424]">
      {/* Left Sidebar  */}
      <div className="w-64 border-r p-4 flex flex-col bg-[#357937]/15 dark:bg-[#2C2C2C] rounded-md">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
            <img
              src="../profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-600 dark:text-white">
            Hey, User
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 bg-[#fbfdfc] dark:bg-[#242424] dark:text-white rounded-md py-4">
          <ul className="space-y-2">
            <li className="flex items-center px-3 py-2 text-sm">
              <span className="w-5 h-5 mr-3">
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
                    d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"
                  />
                </svg>
              </span>
              All Tasks
            </li>
            <li className="flex items-center px-3 py-2 text-sm  rounded-lg text-green-600">
              <span className="w-5 h-5 mr-3">
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
              </span>
              Today
            </li>
            <li className="flex items-center px-3 py-2 text-sm">
              <span className="w-5 h-5 mr-3">
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
                    strokeWidth="2"
                    d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                  />
                </svg>
              </span>
              Important
            </li>
            <li className="flex items-center px-3 py-2 text-sm">
              <span className="w-5 h-5 mr-3">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Planned
            </li>
            <li className="flex items-center px-3 py-2 text-sm">
              <span className="w-5 h-5 mr-3">
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
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
              Assigned to me
            </li>
          </ul>
        </nav>

        {/* Add List Button */}
        <button className="flex items-center px-3 py-2 text-sm mt-4 bg-[#fbfdfc] dark:bg-[#242424] dark:text-white rounded-md">
          <span className="w-5 h-5 mr-3">
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
                d="M5 12h14m-7 7V5"
              />
            </svg>
          </span>
          Add list
        </button>

        {/* Task Progress */}
        <div className="mt-8 p-4 bg-[#fbfdfc] dark:bg-[#242424] dark:text-white rounded-lg">
          <div className="flex justify-between mb-2">
            <div>
              <p className="text-sm font-medium">Today Tasks</p>
              <span className="text-sm text-gray-500">11</span>
            </div>
            <div>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-full h-24 relative flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-8 border-green-500"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 h-full">
        <div className="max-w-3xl mx-auto h-full">
          {/* Header */}
          <div className="flex items-center ">
            <h1 className="text-sm font-semibold dark:text-white">To Do</h1>
            <svg
              className="w-6 h-6 text-gray-800 "
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
                d="m19 9-7 7-7-7"
              />
            </svg>
          </div>

          {/* Add Task Section */}
          <AddTodo />

          {/* Tasks List */}
          <div className="space-y-4">
            {allTask.map(
              (task, index) =>
                !task.toggleComplete && (
                  <ListOfTodo todo={task} index={index} key={task.id} />
                )
            )}
          </div>

          {/* Completed Section */}
          <div className="mt-8">
            <h2 className="text-sm font-medium mb-4 dark:text-white">
              Completed
            </h2>
            <div className="space-y-4">
              {allTask.map(
                (task, index) =>
                  task.toggleComplete && (
                    <ListOfTodo todo={task} index={index} key={task.id} />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
