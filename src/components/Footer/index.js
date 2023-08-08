import React from 'react';
import { FaFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { HiOutlineGlobe, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone, HiPhone} from 'react-icons/hi';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../img/logo/logo1.png'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    LogoText,
    LogoImg,
    LogoContainer
} from './FooterElements'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <FooterContainer id="contact">
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Enlaces</FooterLinkTitle>
                                <FooterLink to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-60}
                                    activeClass="active">Sobre nosotros</FooterLink> 
                                <FooterLink to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-60}
                                    activeClass="active">Servicios</FooterLink>
                                   <FooterLink to="/signin">Páginas</FooterLink> 
                                   <FooterLink to="/signin">Blog</FooterLink> 
                                   <FooterLink to="contact">Contacto</FooterLink> 
                                  
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Información de contacto</FooterLinkTitle>
                                <FooterLink to="/signin">
                                    <HiOutlineLocationMarker/> DIRECCIÓN: Calle Tonalá M57 L02, Santa Monica Ejido Francisco Villa 2da Secc.
                                </FooterLink>
                                <FooterLink to="/signin">
                                <HiOutlinePhone/> (663) 214-8780
                                </FooterLink>
                                <FooterLink to="/signin">
                                <HiOutlineMail/>  grupofaasctijuana@gmail.com
                                </FooterLink>
                                <FooterLink to="/signin">
                                <HiOutlineGlobe/> www.grupofaasc.com.mx
                                </FooterLink>
                                
                                  
                            </FooterLinkItems>

                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='' onClick={toggleHome}>
                            <LogoImg src={logo} />
                    <LogoContainer>
                    <LogoText>
                            GRUPO FAASC
                    </LogoText>
                    
                    
                    </LogoContainer>
                        </SocialLogo>
                        <WebsiteRights>grupo faasc &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/grupofaasctj" target="_black" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://wa.me/6644906982" target="_black" arial-label="Whatsapp">
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_black" arial-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_black" arial-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_black" arial-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia> 
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
