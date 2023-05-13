import AddToDo from "./component/AddToDo";
import ListToDo from "./component/ListToDo";
import "./App.css";
import { useState } from "react";
export default function App() {
  const [input, setInput] = useState("");
  const [taskArray, setTaskArray] = useState([
    { id: 1, task: "Eat rice", done: true, edit: false },
  ]);
  const task = {
    id: taskArray.length + 1,
    task: input,
    done: false,
    edit: false,
  };
  const addtask = () => {
    if (input !== "") {
      setTaskArray([...taskArray, task]);
    } else {
      alert('You have to enter your task!');
    }
  };
  console.log(taskArray);
  return (
    <div className="container">
      <div className="todo-board">
        <h1 className="title">Todo List</h1>
        <AddToDo setInput={setInput} addtask={addtask} />
        <ListToDo taskList={taskArray} setTaskArray={setTaskArray} />
      </div>
    </div>
  );
}
