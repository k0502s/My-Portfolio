import * as S from "@pages/Main/Footer/Footer.style";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <S.FooterWrap>
      <S.CopyRightText>{`Copyright ⓒ ${thisYear()} Jinseok Kim All rights reserved.`}</S.CopyRightText>
    </S.FooterWrap>
  );
};

export default Footer;
