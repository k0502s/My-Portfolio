import Header from "@pages/Header/Header";
import About from "@pages/About/About";
import Skill from "@pages/Skill/Skill";
import Experience from "@pages/Experience/Experience";
import Hobby from "@pages/Hobby/Hobby";
import Contact from "@pages/Contact/Contact";
import Channel from "@pages/Channel/Channel";
import Footer from "@pages//Footer/Footer";
import * as S from "@pages/Main.style";

const Main = () => {
  return (
    <S.Wrap>
      <Header />
      <S.ContentArea>
        <About />
        <Skill />
        <Experience />
        <Hobby />
        <Channel />
        <Contact />
      </S.ContentArea>
      <Footer />
    </S.Wrap>
  );
};

export default Main;
