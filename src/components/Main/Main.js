import React, { useState } from 'react';
import './Main.style.css';
import About from './About/About';
import Skils from './Skils/Skils';
import { NavbarToggler, Collapse, NavItem, Col, Row, NavLink, DropdownItem, DropdownToggle, UncontrolledDropdown, DropdownMenu, NavbarBrand, Modal, ModalHeader, ModalBody } from 'reactstrap';

const Main = () => {
    return (
        <div class="contain">
            <section id="about">
                <About />
            </section>
            <hr />
            <section id="skils">
                <Skils />
            </section>
        </div>
    );
};

export default Main;
