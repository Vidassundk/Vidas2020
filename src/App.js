import React from "react";

import "./App.css";
import "./Animations.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
