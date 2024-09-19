import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homePage/homepage.js";

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" Component={Homepage} />
          </Routes>
        </Router>   

  );
}

export default App;
