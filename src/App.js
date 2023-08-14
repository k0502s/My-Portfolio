import React from "react";
import Main from "./components/Main/Main";
import GlobalStyle from "./assets/GlobalStyle";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
};

export default App;
