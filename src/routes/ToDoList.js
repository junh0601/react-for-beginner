import { useState } from "react";
import { Link } from "react-router-dom";

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo !== "") {
      setToDos((current) => [toDo, ...current]);
      setToDo("");
    }
  };
  return (
    <div>
      <div>
        <Link to="/">뒤로가기</Link>
      </div>
      <h1>To do List</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} placeholder="enter the text"></input>
        <button>Add Todo</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
