import "./App.css";
import React,{useState} from "react";
import Todo from "./todolist"
function App() {
  const [inputList,setInputList]=useState("");
  const [Items,setItems] = useState([]);
  const itemEvent=(event)=>{ 
    setInputList(event.target.value);
  };
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList("");
  };
  const deleteItems = (id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id ;
      })
    })
  }
  return (
    <>
    <div className="main-container">
      <div className="center-container">
       <br />
        <h1 className="main-heading">ToDo List</h1>
        <br/>
        <input type="text" className="input-box" placeholder="Add New Item" onChange={itemEvent} value={inputList}/>
        <button onClick={listOfItems} className="add-btn"> + </button>        
        <ol>
          
          {Items.map((itemval,index)  => {
            return <Todo key={index} id={index} text={itemval} onSelect={deleteItems}/>;
          })}
        </ol>
      </div>
    </div>

    </>
  )
}

export default App;
