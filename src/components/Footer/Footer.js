import React from 'react';
import * as S from './Footer.style';

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year;
    };
    return (
        <>
            <S.FooterWrap>
                <p>
                    Copyright &copy;<span>{thisYear()} Jin Seok Kim All rights reserved.</span>
                </p>
            </S.FooterWrap>
        </>
    );
};

export default Footer;
