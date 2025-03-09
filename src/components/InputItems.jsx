import React, { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
function InputItems({ addtodo }) {
  const[todoname,settodoname]=useState('');
  const[tododate,settododate]=useState('');

const handletodoname=(e)=>{
  const val =e.target.value;
    settodoname(val);
  }
 

const handletododate=(e)=>{
    settododate(e.target.value);

}
const finaladdtodo=()=>{
  if(!todoname.trim() || !tododate.trim()){
    alert("Task name and date cannot be empty!");
    return;
  }
  addtodo(todoname, tododate);
  settodoname("");
  settododate("");
}
  return <div className="container text-center">
    <div className="row container-row">
      <div className="col-6">
        <input type="text" placeholder="Enter the task" value={todoname} onChange={handletodoname}/>
      </div>
      <div className="col-4">
        <input type="date" value={tododate} onChange={handletododate}/>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success button-container"
        onClick={finaladdtodo}>
          <MdOutlineAddBox />
        </button>
      </div>
    </div>
  </div>
}
export default InputItems;
