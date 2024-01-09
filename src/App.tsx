import React from "react";
import type { FC, ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./routes";
import "./App.css";

const App: FC = (): ReactElement => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
