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
              인도네시아 최초 O2O 뷰티 플랫폼 글로벌 서비스 런칭를 위해 프로젝트
              최초 commit으로 시작하여 정식 서비스 런칭을 하는데 성공하였습니다.
              <br />
              <br />
              이후 지속적인 개발/운영을 통해 App 스토어 15만 다운로드 달성,
              회원가입 수 대비 결제 유저 전환율 4% 달성 등 직접 작성한 코드와
              오너쉽한 노력들이 서비스 성과를 이루고 국적 상관없이 많은
              사용자에게서 반응을 얻었을 때 큰 만족감과 성취감을 느낍니다.
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
