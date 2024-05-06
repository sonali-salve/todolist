import React from "react";
import "./App.css";
const Todo = (props) => {
  
    return (
      <>
        <div className="todo_style">
           
         <li>{props.text}</li><i class="fa-solid fa-circle-xmark" id="dlt-btn" onClick={()=>{
          props.onSelect(props.id);
         }}></i>
         
         
         </div>
      </>
    );
  };
  
  export default Todo;
  