import React from 'react';
import './About.style.js';
import TISTORY from './images/TISTORY.png';
import GITHUB from './images/GITHUB.png';
import * as S from './About.style';

const About = () => {
    return (
        <>
            <S.AboutWrap>
                <S.InnerWrap>
                    <h1>About</h1>
                    <S.TapWrap>
                        <S.Items>
                            <div>
                                <a href="https://github.com/k0502s">
                                    <img src={GITHUB} />
                                </a>
                                <a href="https://k0502s.tistory.com">
                                    <img src={TISTORY} />
                                </a>
                                <p>
                                    <span>
                                        김진석 (Male) 1996.05.02 <br /> 인덕대학교 메카트로닉스학과(3년제) 졸업
                                    </span>
                                    <br />
                                    <br />
                                    <span>프론트엔드 개발자</span>가 되기를 결심하고 지금 현재까지 프론트엔드 개발자가 되기 위한 역량과 지식을 독학으로 꾸준히 공부하며 쌓고 있는 열정적인 신입 개발자
                                    지망생입니다! <br /><br />
                                    항상 어떤 일이나 상황이 오더라도 겸손하고 초심을 잃지 않고 배우는 자세를 유지하며 동료 구성원 사이에서도 거부감 없이 잘 스며드는 개발자가 되고 싶습니다!
                                    <br />
                                    <br />
                                    지금은 독학으로 배울 수 있는 것에 한계를 느껴 직접 실무에서 뛰며 더 많은 경험을 쌓는 것과 더불어 훌륭한 개발자분들과 함께 일하고 싶게 되었습니다!
                                </p>
                            </div>
                        </S.Items>
                    </S.TapWrap>
                </S.InnerWrap>
            </S.AboutWrap>
        </>
    );
};

export default About;
