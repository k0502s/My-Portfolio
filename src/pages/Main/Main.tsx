import Header from "@pages/Main/Header/Header";
import About from "@pages/Main/About/About";
import Experience from "@pages/Main/Experience/Experience";
import Skill from "@pages/Main/Skill/Skill";
import Footer from "./Footer/Footer";
import * as S from "@pages/Main/Main.style";
import styled from "styled-components";

const Main = () => {
  return (
    <S.MainWrap>
      <Header />
      <ContentBox>
        <About />
        <Skill />
        <Experience />
      </ContentBox>
      <Footer />
    </S.MainWrap>
  );
};

export default Main;

const ContentBox = styled.div`
  animation: fade 0.5s ease-in-out alternate;
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
