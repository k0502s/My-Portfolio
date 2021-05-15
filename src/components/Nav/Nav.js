import React, { useState } from 'react';
import * as S from './Nav.style';
import { Collapse, NavbarToggler, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const AppNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <S.NavBar dark expand="lg" className="sticky-top">
                <NavbarToggler onClick={toggle} style={{ border: 'none' }} />
                <NavbarBrand>Kim, Jin Seok Portofolio</NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <S.nav navbar>
                        <NavItem>
                            <NavLink href="/" className="text-white">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white">
                               <a href='#about'>About</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="text-white">
                                Skils
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="text-white">
                                Project
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="text-white">
                                Contact
                            </NavLink>
                        </NavItem>
                    </S.nav>
                </Collapse>
            </S.NavBar>
        </div>
    );
};

export default AppNav;
