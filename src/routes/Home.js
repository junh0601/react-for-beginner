import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="container">
      <hgroup>
        <h1>React JS 기초 과정 프로젝트 결과물</h1>
        <small>
          <a href="https://github.com/junh0601" target="blank">
            https://github.com/junh0601
          </a>
        </small>
      </hgroup>
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
