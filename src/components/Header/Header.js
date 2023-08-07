import React from "react";
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Wrap>
      <S.Area>
        <S.ProfileBox>
          <S.ProfileImagBox>
            <S.ProfileImg src="https://avatars.githubusercontent.com/u/73822147?s=400&u=7aadf41b954303cfb5ac1fca546236bb8a95371c&v=4" />
          </S.ProfileImagBox>
          <S.ProfileText>Jinseok</S.ProfileText>
        </S.ProfileBox>
        <S.SideImgBox>
          <S.SideImg src="https://kimchunsick.me/resume/character.gif" />
        </S.SideImgBox>
      </S.Area>
    </S.Wrap>
  );
};

export default Header;
