import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ModeIcon from "@mui/icons-material/Mode";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import { useState } from "react";

function ListToDo({ taskList, setTaskArray }) {
  const [editTask, setEditTask] = useState("");
  const handleSaveTask = (id) => {
    if(editTask !== ''){
      setTaskArray(
        taskList.map((item) => {
          if (item.id === id) {
            return { ...item, task: editTask, edit: false };
          } else {
            return item;
          }
        })
      );
    }else{
      alert('You have to enter your task!');
    }

  };
  const handleEditTask = (e) => {
    setEditTask(e.target.value);
  };
  const handleDeleteTask = (idSelected) => {
    const newObject = taskList.filter((item) => item.id !== idSelected);
    setTaskArray(
      newObject.map((item) => {
        if (item.id > idSelected) {
          return { ...item, id: item.id - 1 };
        } else {
          return item;
        }
      })
    );
  };

  const handleComplete = (idCompleted) => {
    setTaskArray(
      taskList.map((item) => {
        if (item.id === idCompleted) {
          let done = item.done ? false : true;
          return { ...item, done: done };
        } else {
          return item;
        }
      })
    );
  };

  const handleUpdateTask = (idUpdate) => {
    setTaskArray(
      taskList.map((item) => {
        if (item.id === idUpdate) {
          let edit = item.edit ? false : true;
          return { ...item, edit: edit };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <ul className="list-todo">
      {taskList.map((item, index) => (
        <li key={index}>
          <input readOnly type="text" value={item.task} />
          {item.edit && (
            <div className="edit-todo">
              <input type="text" onChange={handleEditTask} /> 
              <SaveTwoToneIcon
                onClick={() => handleSaveTask(item.id)}
                sx={{ color: "#787775", position: "absolute", right: "1px" }}
              />
            </div>
          )}
          <div className="list-todo-button-groups">
            <ModeIcon onClick={() => handleUpdateTask(item.id)} sx={{color: '#d47818'}} />
            <CheckCircleIcon
              sx={item.done ? { color: "green" } : { color: "gray" }}
              onClick={() => handleComplete(item.id)}
            />

            <DeleteIcon
              sx={{ color: "#4e7ee8" }}
              onClick={() => handleDeleteTask(item.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListToDo;
