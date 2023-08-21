import * as S from "@pages/Main/Footer/Footer.style";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <>
      <S.FooterWrap>
        <p>
          Copyright &copy;
          <span>{thisYear()} Jin Seok Kim All rights reserved.</span>
        </p>
      </S.FooterWrap>
    </>
  );
};

export default Footer;
