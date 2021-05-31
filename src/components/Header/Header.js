import React from 'react';
import HomeBackground from '../../assets/img/HomeBackground.jpg';
import * as S from './Header.style';
const Header = () => {
    return (
        <>
            <section id='home'>
                <S.Hedaer style={{ backgroundImage: `url(${HomeBackground})` }}>
                    <h2>안녕하세요. 김진석입니다.</h2>
                    <p>프론트엔드 개발자가 되기를 희망하는 신입입니다.</p>
                </S.Hedaer>
            </section>
        </>
    );
};

export default Header;
