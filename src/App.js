import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import Footer from "./components/Footer/Footer";
import GlobalStyle from "./assets/GlobalStyle";

import "bootstrap/dist/css/bootstrap.css";
// import "./assets/custom.css";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
