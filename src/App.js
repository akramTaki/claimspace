import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Builder from "./containers/Builder";

import fakeData from "./helpers/fakeData";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/builder">
            <Builder fakeData={fakeData} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
