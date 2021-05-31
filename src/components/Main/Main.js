import React from 'react';
import About from './About/About';
import Skils from './Skils/Skils';
import * as S from './Main.style.js';


const Main = () => {
    return (
        <S.MainWrap>
            <section id="about">
                <About />
            </section>
            <hr />
            <section id="skils">
                <Skils />
            </section>
        </S.MainWrap>
    );
};

export default Main;
