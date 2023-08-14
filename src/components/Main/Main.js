import React from "react";
import Header from ".//Header/Header";
import About from "./About/About.js";
import Experience from "./Experience/Experience.js";
// import Footer from "./components/Footer/Footer";
import * as S from "./Main.style.js";

const Main = () => {
  return (
    <S.MainWrap>
      <Header />
      <About />
      <Experience />
      {/* <Footer /> */}
    </S.MainWrap>
  );
};

export default Main;
