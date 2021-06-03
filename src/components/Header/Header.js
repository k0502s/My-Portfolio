import React from 'react';
import HomeBackground from './images/HomeBackground.jpg';
import * as S from './Header.style';
const Header = () => {
    return (
        <>
            <section id="home">
                <S.Hedaer style={{ backgroundImage: `url(${HomeBackground})` }}>
                    <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="700" data-aos-easing="ease-in-out">
                        <h2>
                            안녕하세요.
                            <br />
                            김진석의 포트폴리오 입니다.
                        </h2>
                        <p>프론트엔드 개발자가 되기를 희망하는 신입입니다.</p>
                    </div>
                </S.Hedaer>
            </section>
        </>
    );
};

export default Header;
