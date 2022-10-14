import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>React JS projects</h1>
      <ul>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/todolist`}>ToDoList</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
