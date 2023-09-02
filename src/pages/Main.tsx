import Header from "@pages/Header/Header";
import About from "@pages/About/About";
import Skill from "@pages/Skill/Skill";
import Experience from "@pages/Experience/Experience";
import Hobby from "./Hobby/Hobby";
import Footer from "./Footer/Footer";
import styled from "styled-components";
import * as S from "@pages/Main.style";

const Main = () => {
  return (
    <S.MainWrap>
      <Header />
      <ContentBox>
        <About />
        <Skill />
        <Experience />
        <Hobby />
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
