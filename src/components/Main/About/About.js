import React from 'react';
import './About.style.css';
import aboutImg from '../../../assets/img/Profile.png';
import { Col } from 'reactstrap';
const About = () => {
    return (
        <>
            <div class="about-contain">
                <div class="tab-inner">
                    <h1>About</h1>
                    <input type="radio" name="tabmenu" id="tab1" checked />
                    <input type="radio" name="tabmenu" id="tab2" />
                    <div class="tabs">
                        <div class="items">
                            <div>
                                <p>안녕하세요. 신입 개발자를 꿈꾸는 김진석입니다.</p>
                                <p>
                                    안녕하세요. 신입 개발자를 꿈꾸는 김진석입니다. 안녕하세요. 신입 개발자를 꿈꾸는 김진석입니다. 안녕하세요. 신입 개발자를 꿈꾸는 김진석입니다. 안녕하세요. 신입
                                    개발자를 꿈꾸는 김진석입니다. 안녕하세요. 신입 개발자를 꿈꾸는 김진석입니다. 안녕하세요. 신입 개발자를 꿈꾸는 김진석입니다. 안녕하세요. 신입 개발자를 꿈꾸는
                                    김진석입니다. 안녕하세요. 신입 개발자를 꿈꾸는 김진석입니다.
                                </p>
                                <p>
                                    안녕하세요. 신입 개발자를 꿈꾸는 김진석입니다. 안녕하세요. 신입 개발자를 꿈꾸는 김진석입니다. 안녕하세요. 신입 개발자를 꿈꾸는 김진석입니다. 안녕하세요. 신입
                                    개발자를 꿈꾸는 김진석입니다.
                                </p>

                                <p>
                                    <b>Ackerley</b>
                                    Media Analyst at <span>ZenDesk</span>
                                </p>
                            </div>
                            <div>
                                <img src={aboutImg} />
                                <img src={aboutImg} />
                                <p>저는 블로그와 깃허브를 운영하고 있습니다.</p>
                                <p>
                                    저는 블로그와 깃허브를 운영하고 있습니다. 저는 블로그와 깃허브를 운영하고 있습니다. 저는 블로그와 깃허브를 운영하고 있습니다. 저는 블로그와 깃허브를 운영하고
                                    있습니다. 저는 블로그와 깃허브를 운영하고 있습니다. 저는 블로그와 깃허브를 운영하고 있습니다.
                                </p>
                                <p>
                                    <b>Dabria</b>
                                    Graphic Designer at <span>ChowNow</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="aboutbtn">
                        <label for="tab1"></label>
                        <label for="tab2"></label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
