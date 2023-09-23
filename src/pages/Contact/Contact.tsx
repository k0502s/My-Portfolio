import SectionTitle from "@components/molecules/common/SectionTitle";
import EmailIcon from "@assets/images/iconEmail.svg";
import PhoneIcon from "@assets/images/iconPhone.svg";
import * as S from "@pages/Contact/Contact.style";

const Contact = () => {
  return (
    <S.Wrap>
      <S.Area>
        <SectionTitle title="Contacts" koreaTitle="연락" align="center" />
        <S.BorderBoxBox>
          <S.BorderBox>
            <S.BorderBoxIconBox>
              <S.BorderBoxIcon src={EmailIcon} />
            </S.BorderBoxIconBox>
            <S.BorderBoxTitle>이메일</S.BorderBoxTitle>
            <S.BorderBoxContent href="mailto:k0502s.dev@gmail.com">
              k0502s.dev@gamil.com
            </S.BorderBoxContent>
          </S.BorderBox>
          <S.BorderBox>
            <S.BorderBoxIconBox>
              <S.BorderBoxIcon src={PhoneIcon} />
            </S.BorderBoxIconBox>
            <S.BorderBoxTitle>연락처</S.BorderBoxTitle>
            <S.BorderBoxContent
              href={`tel:${process.env.REACT_APP_PHONE_NUMBER}`}
            >
              {process.env.REACT_APP_PHONE_NUMBER}
            </S.BorderBoxContent>
          </S.BorderBox>
        </S.BorderBoxBox>
      </S.Area>
    </S.Wrap>
  );
};

export default Contact;
