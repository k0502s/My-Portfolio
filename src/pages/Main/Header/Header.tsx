import * as S from "@pages/Main/Header/Header.style";

const Header = () => {
  return (
    <S.Wrap>
      <S.Area>
        <S.ProfileBox>
          <S.ProfileImagBox>
            <S.ProfileImg src="https://avatars.githubusercontent.com/u/73822147?s=400&u=0f108060fa76e85bb2f1cf8210e2ee8f9843d0de&v=4" />
          </S.ProfileImagBox>
          <S.ProfileText>Jinseok Kim</S.ProfileText>
        </S.ProfileBox>
        <S.SideBox>
          <S.LinkBox>
            <S.LinkText
              style={{ marginRight: 20 }}
              onClick={() => window.open("https://k0502s.tistory.com")}
            >
              Blog
            </S.LinkText>
            <S.LinkText
              onClick={() => window.open("https://github.com/k0502s")}
            >
              GitHub
            </S.LinkText>
          </S.LinkBox>
        </S.SideBox>
      </S.Area>
    </S.Wrap>
  );
};

export default Header;
