import "./App.css";
import Header from "./component/header";
import RouterComponent from "./router";
import { BrowserRouter } from "react-router-dom";
import React from "react";
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <div className="d-flex flex-column">
            <Header />
            <RouterComponent />
          </div>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
