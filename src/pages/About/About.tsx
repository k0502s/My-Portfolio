import SectionTitle from "@components/molecules/common/SectionTitle";
import * as S from "@pages/About/About.style";

const About = () => {
  const koreaTitle = (
    <>
      <span style={{ lineHeight: 1.5 }}>김진석</span>
      <br />
      <span
        style={{
          fontSize: "0.9rem",
          color: "rgb(142, 148, 153)",
          fontWeight: 500,
        }}
      >
        1996년 | 남 | 서울 서대문구
      </span>
    </>
  );

  return (
    <S.Wrap>
      <S.Area>
        <S.TextBox>
          <SectionTitle title="Frontend Developer" koreaTitle={koreaTitle} />
          <S.ContentBox>
            <S.Content>
              성장, 또 성장하고 싶은 개발자 김진석입니다.
              <br />
              개발자 경력 3년차인 지금, 항상 과거와 미래를 생각하며 개발에
              임하고 있습니다.
              <br />
              <br />
              <br />
              현재는 프론트엔드 포지션으로 활동중이며 처음에는 단순한 기능
              개발에서 한 발 더 나아가 서비스 운영/개발을 하면서 개발에 대하여
              더 애정을 가지고 임하고 있습니다.
            </S.Content>
          </S.ContentBox>
        </S.TextBox>
        <S.CurrentStatusBox>
          <S.CurrentStatusText>현재 상태는</S.CurrentStatusText>
          <S.CurrentStatusTag>
            <S.CurrentStatusTagText>구직 중!</S.CurrentStatusTagText>
          </S.CurrentStatusTag>
        </S.CurrentStatusBox>
      </S.Area>
    </S.Wrap>
  );
};

export default About;
