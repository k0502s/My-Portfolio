import { useState } from "react";
import NavbarToggle from "@components/molecules/Header/NavbarToggle";
import { useMediaQuery } from "@hooks/useMediaQuery";
import * as S from "@pages/Main/Header/Header.style";

const Header = () => {
  const isMobile = useMediaQuery(768);
  const [mobileNavbarCollapsed, setMobileNavbarCollapsed] =
    useState<boolean>(true);
  return (
    <>
      <S.Wrap>
        <S.Area>
          <S.ProfileBox>
            <S.ProfileImagBox>
              <S.ProfileImg src="https://avatars.githubusercontent.com/u/73822147?s=400&u=0f108060fa76e85bb2f1cf8210e2ee8f9843d0de&v=4" />
            </S.ProfileImagBox>
            <S.ProfileText>Jinseok Kim</S.ProfileText>
          </S.ProfileBox>
          <S.SideBox>
            {isMobile ? (
              <NavbarToggle
                onClickMethod={setMobileNavbarCollapsed}
                collapsed={mobileNavbarCollapsed}
              />
            ) : (
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
            )}
          </S.SideBox>
        </S.Area>
      </S.Wrap>
      {isMobile && (
        <S.NavbarListsWrap mobileNavbarCollapsed={mobileNavbarCollapsed}>
          <S.NavbarListsArea>
            <S.LinkBox>
              <S.LinkText
                style={{ marginBottom: 15 }}
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
          </S.NavbarListsArea>
        </S.NavbarListsWrap>
      )}
    </>
  );
};

export default Header;
