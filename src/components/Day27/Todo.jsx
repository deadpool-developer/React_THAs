import React from "react";
import AddTodo from "./components/AddTodo";
import ListToDo from "./components/ListTodo";
import "./ToDo.css";

function ToDo() {
  return (
    <div className="Todo_day27">
      <h1 style={{backgroundColor: "black", color : "whitesmoke", width:"100%", marginBottom:"2vh"}}>ToDo List </h1>
      <AddTodo />
      <ListToDo/>
    </div>
  );
}

export default ToDo;
