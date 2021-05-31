import React, { useState } from 'react';
import * as S from './Skils.style';
import html from './images/html.png';
import css from './images/css.png';
import SC from './images/SC.png';
import JS from './images/JS.png';
import JQ from './images/JQ.png';
import react from './images/React.png';
import TS from './images/TS.png';
import node from './images/node.png';
import Mongo from './images/Mongo.png';
import Mysql from './images/Mysql.png';
import AWS from './images/AWS.png';
import Heroku from './images/Heroku.png';
import Git from './images/Git.png';
import Jest from './images/Jest.png';
import MobileSkils from './Section/MobileSkils';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const Skils = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => setIsOpen(!IsOpen);
    return (
        <>
            <S.SkilsWrap>
                <S.SectionTitle>Skils</S.SectionTitle>
            </S.SkilsWrap>
            <S.SkilsWrap>
                <S.SkilsItem>
                    <h4>Frontend</h4>
                    <S.SkilItem>
                        <img src={html} alt="" />
                        <div class="caption">
                            <h3>HTML5</h3>
                            <p>- 태그를 활용한 마크업</p>
                        </div>
                    </S.SkilItem>
                    <S.SkilItem>
                        <img src={css} alt="" />
                        <div class="caption">
                            <h3>CSS3</h3>
                            <p>- Media Query, animation, Grid, Flex 이해</p>
                            <p>- SASS의 SCSS Scope, Nesting, 변수 선언과 연산, 상속 이해</p>
                        </div>
                    </S.SkilItem>
                    <S.SkilItem>
                        <img src={JS} alt="" />
                        <div class="caption">
                            <h3>JavaScript</h3>
                            <p>- VanillaJS·ES6 기본 문법 활용</p>
                        </div>
                    </S.SkilItem>
                    <S.SkilItem>
                        <img src={SC} alt="" />
                        <div class="caption">
                            <h5>Styled-Components</h5>
                            <p>- React.js와 함께 활용</p>
                            <p>- props 활용</p>
                            <p>- 유지보수의 편리함을 위한 코드 작성</p>
                        </div>
                    </S.SkilItem>
                    <S.SkilItem>
                        <img src={JQ} alt="" />
                        <div class="caption">
                            <h3>JQuery</h3>
                            <p>- 라이브러리 활용 및 기본 커스터마이징</p>
                        </div>
                    </S.SkilItem>
                    <S.SkilItem>
                        <img src={react} alt="" />
                        <div class="caption">
                            <h3>React.js</h3>
                            <p>- JSX, Hook, Router 사용</p>
                            <p>- Redux 상태관리 사이클 이해</p>
                            <p>- Redux-Saga을 이용한 비동기 통신 사용</p>
                        </div>
                    </S.SkilItem>
                    <S.SkilItem>
                        <img src={TS} alt="" style={{ objectFit: 'cover' }} />
                        <div class="caption">
                            <h3>TypeScript</h3>
                            <p>- 객체, 리턴 Type 이해</p>
                            <p>- 상속과 인터페이스 및 type 사용</p>
                            <p>- React.js 프로젝트 적용 경험</p>
                        </div>
                    </S.SkilItem>
                    <S.MoreSkils isOpen={IsOpen}>
                        <h4>Backend</h4>
                        <S.SkilItem>
                            <img src={node} alt="" />
                            <div class="caption">
                                <h3>Node.js</h3>
                                <p>- Express 활용</p>
                                <p>- 기본 CRUD 코드 작성</p>
                                <p>- Restful Api 작성</p>
                            </div>
                        </S.SkilItem>
                        <S.SkilItem>
                            <img src={Mongo} alt="" />
                            <div class="caption">
                                <h3>MongoDB</h3>
                                <p>- 기본적인 메서드 활용 경험</p>
                                <p>- Express을 이용한 프로젝트 DB 적용 경험</p>
                                <p>- 기본 데이터 관리 및 사이클 이해</p>
                            </div>
                        </S.SkilItem>
                        <S.SkilItem>
                            <img src={Mysql} alt="" />
                            <div class="caption">
                                <h3>MySQL</h3>
                                <p>- 기본적인 메서드 활용 경험</p>
                            </div>
                        </S.SkilItem>
                        <h4>Devops</h4>
                        <S.SkilItem>
                            <img src={AWS} alt="" />
                            <div class="caption">
                                <h3>AWS</h3>
                                <p>- EC2 서버 구축 및 배포</p>
                                <p>- S3 스토리지 활용</p>
                            </div>
                        </S.SkilItem>
                        <S.SkilItem>
                            <img src={Heroku} alt="" />
                            <div class="caption">
                                <h3>Heroku</h3>
                                <p>- 서버 구축 및 배포</p>
                                <p>- Git 연동</p>
                            </div>
                        </S.SkilItem>
                        <S.SkilItem>
                            <img src={Git} alt="" />
                            <div class="caption">
                                <h3>Git</h3>
                                <p>- 형상관리에 필요한 기본적인 사용법 숙지</p>
                            </div>
                        </S.SkilItem>
                        <S.SkilItem>
                            <img src={Jest} alt="" />
                            <div class="caption">
                                <h3>Jest</h3>
                                <p>- Jest을 이용한 테스트 코드 사이클 기본 이해</p>
                                <p>- React-testing-libaray을 활용한 React DOM 테스트 코드 작성</p>
                            </div>
                        </S.SkilItem>
                    </S.MoreSkils>
                </S.SkilsItem>
            </S.SkilsWrap>
            <S.MobileWrap>
                <MobileSkils IsOpen={IsOpen} />
            </S.MobileWrap>
            <S.BtnWrap onClick={toggleIsOpen}>
                <S.MoreBtn isOpen={IsOpen} color={'#F05232'} width={'120px'}>
                    스킬 더보기 <BsFillCaretDownFill />
                </S.MoreBtn>
                <S.CloseBtn isOpen={IsOpen} color={'#F05232'} width={'120px'}>
                    스킬 접기 <BsFillCaretUpFill />
                </S.CloseBtn>
            </S.BtnWrap>
        </>
    );
};

export default Skils;
