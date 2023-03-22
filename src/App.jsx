import { tasks as data } from "./datos/task";
import "./App.css";
import TaskList from "./componentes/TaskList";
import TaskForm from "./componentes/TaskForm";

function App() {

  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList  />
      </div>
    </div>
  );
}

import React from "react";

export default App;
