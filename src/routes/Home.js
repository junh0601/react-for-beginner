import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>React JS projects</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todolist">ToDoList</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
