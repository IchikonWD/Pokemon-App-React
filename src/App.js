import { BrowserRouter } from "react-router-dom";

import Main from "./Components/Main";
import Header from "./Components/Header";
import "./Styles/styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
