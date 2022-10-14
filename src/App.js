import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";

function App() {
  return (
    <Router>
      <Switch>
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
