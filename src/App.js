import "./App.css";
import Header from "./component/header";
import RouterComponent from "./router";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="d-flex flex-column">
          <Header />
          <RouterComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
