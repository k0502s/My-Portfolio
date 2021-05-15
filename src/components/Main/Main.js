import React, { useState } from 'react';
import './Main.style.css';
import aboutImg from '../../assets/img/Profile.png';
import { NavbarToggler, Collapse, NavItem, Col, Row, NavLink, DropdownItem, DropdownToggle, UncontrolledDropdown, DropdownMenu, NavbarBrand, Modal, ModalHeader, ModalBody } from 'reactstrap';

const Main = () => {
    return (
        <div class="contain">
            <section id="about">
                <div class="tab-inner">
                    <h1>About</h1>
                    <input type="radio" name="tabmenu" id="tab1" checked />
                    <input type="radio" name="tabmenu" id="tab2" />
                    <div class="tabs">
                        <div class="items">
                            <div>
                                <img src={aboutImg} />
                                <p>
                                    As we all know, it’s easy for marketers to brag about how great their product or service is. Writing compelling copy, shooting enticing photos, or even producing
                                    glamorous videos are all tactics we use to draw attention to our brands. While all of these strategies can be successful, there really is no better way to gain
                                    trust and prove the validity of your brand like customer testimonials.
                                </p>
                                <p>
                                    <b>Ackerley</b>
                                    Media Analyst at <span>ZenDesk</span>
                                </p>
                            </div>
                            <div>
                                <img src={aboutImg} />
                                <p>
                                    ZenDesk’s testimonial page is beautifully laid out AND functional, with a silent customer video playing on loop to serve as the banner, a menu to filter
                                    testimonials by location, company size, industry, and use case, and lastly thumbnails linking to the full customer stories for a variety of big-name brands. This is
                                    a clean and concise way to showcase their happy customers.
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
            </section>
        </div>
    );
};

export default Main;
