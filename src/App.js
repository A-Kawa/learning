import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/layout/Home";
import { SingleForm } from "./components/forms/SingleForm";
import { Provider } from "./store/context";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <Router>
      <Provider>
        <Route exact path="/" component={Home} />
        <Route path="/form/:ID?" component={SingleForm} />
      </Provider>
    </Router>
  );
};

export default App;
