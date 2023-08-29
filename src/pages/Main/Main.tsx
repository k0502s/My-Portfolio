import Header from "@pages/Main/Header/Header";
import About from "@pages/Main/About/About";
import Experience from "@pages/Main/Experience/Experience";
import Skil from "@pages/Main/Skil/Skil";
// import Footer from "@components/Main/Footer/Footer";
import * as S from "@pages/Main/Main.style";

const Main = () => {
  return (
    <S.MainWrap>
      <Header />
      <About />
      <Skil />
      <Experience />
      {/* <Footer /> */}
    </S.MainWrap>
  );
};

export default Main;
