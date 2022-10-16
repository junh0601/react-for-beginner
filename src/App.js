import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import HoursToMins from "./routes/HoursToMins";
import Movie from "./routes/Movie";
import ToDoList from "./routes/ToDoList";

function App() {
  return (
    <div className="container">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/hourstomins">
            <HoursToMins />
          </Route>
          <Route path="/coin">
            <Coin />
          </Route>
          <Route path="/todolist">
            <ToDoList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
