import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
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
  );
}

export default App;
