import React from "react";
import { tasks as data } from "../datos/task";
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: task.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks: tasks,
          createTask: createTask,
          deleteTask: deleteTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
