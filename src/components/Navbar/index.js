import React, { useState, useEffect } from 'react';
import { FaBars, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { IoIosClock, IoIosCall, IoIosMail } from 'react-icons/io'
import { HiOutlineGlobe, HiOutlineClock, HiOutlineMail, HiOutlinePhone, HiPhone} from 'react-icons/hi';

import logo from '../../img/logo.png';
import {
    Nav,
    NavH6,
    NavH3,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavbarHeader,
    HeaderContainer,
    Container,
    NavbarItem,
    NavbarP,
    NavbarMenu,
    MenuContainer,
    NavbarSquare,
} from './NavbarElements';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 90) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        let isSubscribed = true
        if (isSubscribed) {
            window.addEventListener('scroll', changeNav)
        }
        return () => isSubscribed = false
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            <IconContext.Provider value={{size:'1.2em' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarHeader>
                        <HeaderContainer>
                        <NavbarItem>
                            <HiOutlineClock />
                            <NavbarP>
                            9:00 AM a 4:00 PM
                            </NavbarP>
                        </NavbarItem>
                        <NavbarItem>
                            <HiOutlineMail />
                            <NavbarP>
                            grupofaasctijuana@gmail.com
                            </NavbarP>
                        </NavbarItem>
                        <NavbarItem>
                            <HiOutlinePhone />
                            <NavbarP>
                            (664) 656-8879
                            </NavbarP>
                        </NavbarItem>
                       
                        </HeaderContainer>
                    </NavbarHeader>

                    <NavbarMenu scrollNav={scrollNav}>
                        <MenuContainer>
                        <Container>
                        <NavbarSquare/>
                        <NavLogo to='/' onClick={toggleHome}>
                            <NavH6 scrollNav={scrollNav}>Grupo</NavH6>
                            <NavH3 scrollNav={scrollNav}>FAASC</NavH3>
                            
                        </NavLogo>

                        </Container>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem> 
                                <NavLinks
                                    scrollNav={scrollNav}
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-90}
                                    activeClass="active">Principal</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    scrollNav={scrollNav}
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-90}
                                    activeClass="active">Sobre nosotros</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    scrollNav={scrollNav}
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-60}
                                    activeClass="active">Servicios</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    scrollNav={scrollNav}
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    activeClass="active"
                                    >Contactanos</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </MenuContainer>
                </NavbarMenu>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
