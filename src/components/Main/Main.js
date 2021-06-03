import React from 'react';
import About from './About/About';
import Skils from './Skils/Skils';
import Projects from './Project/Projects';
import Contact from './Contact/Contact';
import * as S from './Main.style.js';

const Main = () => {
    return (
        <S.MainWrap>
            <section id="about">
                <About />
            </section>

            <section id="skils">
                <Skils />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </S.MainWrap>
    );
};

export default Main;
