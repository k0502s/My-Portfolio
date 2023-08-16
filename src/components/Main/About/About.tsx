import * as S from "@components/Main/About/About.style";

const About = () => {
  return (
    <S.Wrap>
      <S.Area>
        <S.TextBox>
          <S.Occupation>Frontend Developer</S.Occupation>
          <S.Name>김진석</S.Name>
          <S.lines />
          <S.ContentBox>
            <S.Content>
              성장, 또 성장하고 싶은 개발자입니다.
              <br />
              <br />
              개발자 경력 3년차인 지금, 항상 과거와 미래를 생각하며 개발에
              임하고 있습니다.
            </S.Content>
          </S.ContentBox>
        </S.TextBox>
        <S.LinkBox>
          <S.LinkText
            style={{ marginRight: 20 }}
            onClick={() => window.open("https://k0502s.tistory.com")}
          >
            Blog
            <S.Bottomline />
          </S.LinkText>
          <S.LinkText onClick={() => window.open("https://github.com/k0502s")}>
            GitHub <S.Bottomline />
          </S.LinkText>
        </S.LinkBox>
      </S.Area>
    </S.Wrap>
  );
};

export default About;
