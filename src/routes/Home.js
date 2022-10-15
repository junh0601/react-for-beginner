import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="container">
      <h1>React JS projects</h1>
      <ul>
        <li>
          <Link to="/todolist">ToDo 리스트</Link>
        </li>
        <li>
          <Link to="/coin">코인 시세</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
