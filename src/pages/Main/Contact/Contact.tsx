import tistory from "@components/Main/Contact/images/TISTORY.png";
import * as S from "@pages/Main/Contact/Contact.style";
import { BsFillEjectFill } from "react-icons/bs";

const Contact = () => {
  return (
    <S.ContactWrap>
      <S.TitleWrap>
        <h1>Contact</h1>
      </S.TitleWrap>
      <S.InfoWrap>
        <div>
          <S.EmailIcon /> <b>Email</b> kjs960502@gmail.com
        </div>
        <div>
          <S.PhoneIcon /> <b>Phone</b> 010-7921-7741
        </div>
        <div>
          <a href="https://github.com/k0502s">
            <S.GitHubIcon /> <b>GitHub</b> https://github.com/k0502s
          </a>
        </div>
        <div>
          <a href="https://k0502s.tistory.com">
            <img src={tistory} /> <b>TISTORY</b> https://k0502s.tistory.com
          </a>
        </div>
      </S.InfoWrap>
      <S.HomeBtnWrap>
        <a href="#home">
          <BsFillEjectFill />
        </a>
      </S.HomeBtnWrap>
    </S.ContactWrap>
  );
};

export default Contact;
