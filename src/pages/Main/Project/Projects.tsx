import * as S from "@pages/Main/Project/Projects.style";
import mockup_0 from "@components/Main/Project/images/mockup-0.png";
import mockup_1 from "@components/Main/Project/images/mockup-1.png";
import mockup_2 from "@components/Main/Project/images/mockup-2.png";

const Projects = () => {
  return (
    <>
      <S.ProjectsWrap>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <S.TitleWrap>
            <h1>Projects</h1>
          </S.TitleWrap>
        </div>
        <S.SubWrap>
          <ul>
            <li>
              <div
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <img src={mockup_0} />
              </div>
            </li>
            <li>
              <div
                data-aos="fade-left"
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h3>포트폴리오 웹 사이트</h3>
                <br />
                저의 자기소개를 위한 포트폴리오 웹 사이트를 직접 제작하였습니다.
                React.js 환경에서 styled-Components을 이용하여 CSS 스타일링을
                하여 직관적인 소개 정보 전달을 중점으로 간단한 싱글 페이지를
                구현하였습니다.
                <br />
                데스크탑 디바이스뿐만 아니라 모바일 디바이스 대응에도 고려하여
                CSS 스타일링을 하였습니다. 지금 방문하시고 계신 사이트입니다.
                <br />
                <br />
                <span>개발기간</span> <b>21.06</b>
                <br />
                <span>개발인원</span> <b>1명</b>
                <br />
                <br />
                <span>사용된 기술</span>
                <br />
                Client <b>React.js, Reactstrap, Styled-Components</b>
                <br />
                Devops <b>Git</b>
                <S.BtnWrap>
                  <S.ProjectBtn
                    width={"120px"}
                    margin={"0 15px 0 0"}
                    color={"#F05232"}
                  >
                    <a href="https://github.com/k0502s/Kim-Jin-Seok-Portfolio">
                      GitHub 보기
                    </a>
                  </S.ProjectBtn>
                  <S.ProjectBtn
                    width={"120px"}
                    margin={"0 0 0 15px"}
                    color={"#F05232"}
                  >
                    <a href="https://k0502s.github.io/Kim-Jin-Seok-Portfolio">
                      사이트 방문하기
                    </a>
                  </S.ProjectBtn>
                </S.BtnWrap>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div
                data-aos="fade-left"
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <img src={mockup_1} />
              </div>
            </li>
            <li>
              <div
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h3>사진 동호회 웹 사이트</h3>
                <br />
                실제 동호회 모임을 넷상에서도 교류 할 수 있게끔 CRUD 중심의 SPA
                사이트를 제작하였습니다. 회원들이 직접 찍은 포토들을 갤러리에서
                공유할 수 있고, 게시판에서 동호회 가입 인사 및 모임 후기
                게시글을 작성할 수 있도록 사이트를 구축하였습니다.
                <br />
                또 회원들의 문의사항 데이터를 받을 수 있는 챗봇 시스템과 다음
                모임 장소를 표시해주는 지도 API의 기능들이 존재합니다.
                <br />
                <br />
                <span>개발기간</span> <b>21.04 ~ 21.05</b>
                <br />
                <span>개발인원</span> <b>1명</b>
                <br />
                <br />
                <span>사용된 기술</span>
                <br />
                Client{" "}
                <b>React.js, Redux Saga, Reactstrap, Styled-Components</b>
                <br />
                Server <b>Express, MongoDB, AWS S3</b>
                <br />
                Devops <b>Jest, React-Libaray-testing, Git, Heroku</b>
                <S.BtnWrap>
                  <S.ProjectBtn
                    width={"120px"}
                    margin={"0 15px 0 0"}
                    color={"#F05232"}
                  >
                    <a href="https://github.com/k0502s/Photo-Club">
                      GitHub 보기
                    </a>
                  </S.ProjectBtn>
                  <S.ProjectBtn
                    width={"120px"}
                    margin={"0 0 0 15px"}
                    color={"#F05232"}
                  >
                    <a href="https://photo-club-korea.herokuapp.com">
                      사이트 방문하기
                    </a>
                  </S.ProjectBtn>
                </S.BtnWrap>
              </div>
            </li>
          </ul>

          <ul>
            <li>
              <div
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <img src={mockup_2} />
              </div>
            </li>
            <li>
              <div
                data-aos="fade-left"
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h3>동호회 회원 관리 시스템</h3>
                <br />
                사진 동호회가 실제로 운영되고 회원의 수가 많아진다면 회원들을 더
                직관적이고 효율적으로 관리하기 위한 ADMIN 시스템 사이트를 따로
                제작하였습니다. 회원들의 정보를 추가, 수정, 삭제, 조회가 가능한
                간단한 CRUD와 특정 회원을 경고, 경고 누적 조회 및 해제 할 수
                있는 기능 등등을 중심으로 프로젝트를 구현하였습니다.
                <br />
                추가로 지도 API의 위치 업데이트 기능, 챗봇 데이터를 페이지
                view로 직관적으로 보여주는 등 여러가지 기능들과 TypeScript을
                도입해보는 경험도 하게 된 뜻깊은 프로젝트였습니다.
                <br />
                <br />
                <span>개발기간</span> <b>21.05 ~ 21.06</b>
                <br />
                <span>개발인원</span> <b>1명</b>
                <br />
                <br />
                <span>사용된 기술</span>
                <br />
                Client{" "}
                <b>React.js, Redux Saga, Reactstrap, Styled-Components</b>
                <br />
                Server <b>Express, MongoDB, AWS S3</b>
                <br />
                Devops{" "}
                <b>TypeScript, Jest, React-Libaray-testing, Git, Heroku</b>
                <S.BtnWrap>
                  <S.ProjectBtn
                    width={"120px"}
                    margin={"0 15px 0 0"}
                    color={"#F05232"}
                  >
                    <a href="https://github.com/k0502s/Member-Admin-System">
                      GitHub 보기
                    </a>
                  </S.ProjectBtn>
                  <S.ProjectBtn
                    width={"120px"}
                    margin={"0 0 0 15px"}
                    color={"#F05232"}
                  >
                    <a href="https://member-admin-system.herokuapp.com">
                      사이트 방문하기
                    </a>
                  </S.ProjectBtn>
                </S.BtnWrap>
              </div>
            </li>
          </ul>
        </S.SubWrap>
      </S.ProjectsWrap>
    </>
  );
};

export default Projects;
