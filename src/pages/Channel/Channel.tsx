import SectionTitle from "@components/molecules/common/SectionTitle";
import BlogIcon from "@assets/images/iconBlog.svg";
import GithubIcon from "@assets/images/iconGithub.svg";
import LinkedinIcon from "@assets/images/iconLinkedin.svg";
import * as S from "@pages/Channel/Channel.style";

const Contact = () => {
  return (
    <S.Wrap>
      <S.Area>
        <SectionTitle title="Channel" koreaTitle="채널" align="center" />
        <S.BorderBoxBox>
          <S.BorderBox>
            <S.BorderBoxIconBox>
              <S.BorderBoxIcon src={BlogIcon} />
            </S.BorderBoxIconBox>
            <S.BorderBoxTitle>Tech Blog</S.BorderBoxTitle>
            <S.BorderBoxContent
              onClick={() => window.open("https://k0502s.tistory.com")}
            >
              k0502s.tistory.com
            </S.BorderBoxContent>
          </S.BorderBox>
          <S.BorderBox>
            <S.BorderBoxIconBox>
              <S.BorderBoxIcon src={GithubIcon} />
            </S.BorderBoxIconBox>
            <S.BorderBoxTitle>GitHub</S.BorderBoxTitle>
            <S.BorderBoxContent
              onClick={() => window.open("https://github.com/k0502s")}
            >
              github.com/k0502s
            </S.BorderBoxContent>
          </S.BorderBox>
          <S.BorderBox>
            <S.BorderBoxIconBox>
              <S.BorderBoxIcon
                style={{ width: 22, height: 22 }}
                src={LinkedinIcon}
              />
            </S.BorderBoxIconBox>
            <S.BorderBoxTitle>LinkedIn</S.BorderBoxTitle>
            <S.BorderBoxContent
              onClick={() =>
                window.open("https://www.linkedin.com/in/jin-seok-kim")
              }
            >
              linkedin.com/in/jin-seok-kim
            </S.BorderBoxContent>
          </S.BorderBox>
        </S.BorderBoxBox>
      </S.Area>
    </S.Wrap>
  );
};

export default Contact;
