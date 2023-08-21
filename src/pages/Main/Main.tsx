import Header from "@pages/Main/Header/Header";
import About from "@pages/Main/About/About";
import Experience from "@pages/Main/Experience/Experience";
// import Footer from "@components/Main/Footer/Footer";
import * as S from "@pages/Main/Main.style";

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
