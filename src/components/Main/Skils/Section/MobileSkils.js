import React from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import SC from '../images/SC.png';
import JS from '../images/JS.png';
import JQ from '../images/JQ.png';
import react from '../images/React.png';
import TS from '../images/TS.png';
import node from '../images/node.png';
import Mongo from '../images/Mongo.png';
import Mysql from '../images/Mysql.png';
import AWS from '../images/AWS.png';
import Heroku from '../images/Heroku.png';
import Git from '../images/Git.png';
import Jest from '../images/Jest.png';
import * as S from '../Skils.style';

const MobileSkils = ({ IsOpen }) => {
    return (
        <>
            <S.List>
               <S.MskilTitle><h4>Frontend</h4></S.MskilTitle>
                <ul>
                    <S.Li>
                        <img src={html} />
                        <div>
                            <h3>HTML</h3>
                        </div>
                        <span>태그를 활용한 마크업</span>
                    </S.Li>
                    <S.Li>
                        <img src={css} />
                        <div>
                            <h3>CSS3</h3>
                            <span>Media Query, animation, Grid, Flex, Sass 이해</span>
                        </div>
                    </S.Li>
                    <S.Li>
                        <img src={JS} />
                        <div>
                            <h3>JavaScript</h3>
                            <span>VanillaJS·ES6 기본 문법 활용</span>
                        </div>
                    </S.Li>
                    <S.Li>
                        <img src={SC} />
                        <div>
                            <h3>Styled-Components</h3>
                            <span>with React.js, props 활용, 유지보수 고려 작성</span>
                        </div>
                    </S.Li>
                    <S.Li>
                        <img src={JQ} />
                        <div>
                            <h3>JQuery</h3>
                            <span>라이브러리 활용 및 기본 커스터마이징</span>
                        </div>
                    </S.Li>
                    <S.Li>
                        <img src={react} />
                        <div>
                            <h3>React.js</h3>
                            <span>JSX, Hook, Router, Redux Saga 활용</span>
                        </div>
                    </S.Li>
                    <S.Li>
                        <img src={TS} style={{ marginRight: '10px' }} />
                        <div>
                            <h3>TypeScript</h3>
                            <span>객체, 리턴 Type, 상속, 인터페이스 및 React.js 적용</span>
                        </div>
                    </S.Li>
                </ul>
                <S.MoreSkils isOpen={IsOpen}>
                <S.MskilTitle><h4>Backend</h4></S.MskilTitle>
                    <ul>
                        <S.Li>
                            <img src={node} />
                            <div>
                                <h3>Node.js</h3>
                            </div>
                            <span>Express, CRUD 기본, Restful Api 작성</span>
                        </S.Li>
                        <S.Li>
                            <img src={Mongo} />
                            <div>
                                <h3>MongoDB</h3>
                            </div>
                            <span>기본 메서드 경험, with Express, 데이터 사이클</span>
                        </S.Li>
                        <S.Li>
                            <img src={Mysql} />
                            <div>
                                <h3>MySQL</h3>
                            </div>
                            <span>기본적인 메서드 활용 경험</span>
                        </S.Li>
                    </ul>
                    <S.MskilTitle><h4>Devops</h4></S.MskilTitle>
                    <ul>
                        <S.Li>
                            <img src={AWS} />
                            <div>
                                <h3>AWS</h3>
                            </div>
                            <span>EC2 서버 구축 및 배포, S3 스토리지 활용</span>
                        </S.Li>
                        <S.Li>
                            <img src={Heroku} />
                            <div>
                                <h3>Heroku</h3>
                            </div>
                            <span>서버 구축 및 배포, Git 연동</span>
                        </S.Li>
                        <S.Li>
                            <img src={Git} />
                            <div>
                                <h3>Git</h3>
                            </div>
                            <span>형상관리에 필요한 기본적인 사용법 숙지</span>
                        </S.Li>
                        <S.Li>
                            <img src={Jest} />
                            <div>
                                <h3>Jest</h3>
                            </div>
                            <span>테스트 코드 사이클 이해, React-testing-libaray</span>
                        </S.Li>
                    </ul>
                </S.MoreSkils>
            </S.List>
        </>
    );
};

export default MobileSkils;
