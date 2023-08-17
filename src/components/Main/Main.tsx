import Header from "@components/Main/Header/Header";
import About from "@components/Main/About/About";
import Experience from "@components/Main/Experience/Experience";
// import Footer from "@components/Main/Footer/Footer";
import * as S from "@components/Main/Main.style";

const Main = () => {
  return (
    <S.MainWrap>
      <Header />
      <About />
      <Experience />
    </S.MainWrap>
  );
};

export default Main;
