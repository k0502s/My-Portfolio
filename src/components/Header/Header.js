import React from 'react';
import HeaderImg from '../../assets/img/film.jpg';
import * as S from './Header.style';
const Header = () => {
    return (
        <S.Hedaer style={{ backgroundImage: `url(${HeaderImg})` }}>
            <h2>안녕하세요. 김진석입니다.</h2>
            <p>프론트엔드 개발자가 되기를 희망하는 신입입니다.</p>
        </S.Hedaer>
    );
};

export default Header;
