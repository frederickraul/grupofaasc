import React, { useState } from 'react'
//import video from '../../videos/video.mp4'
import { Button } from '../ButtonElement';
import video from '../../video/Video720p.mp4'

import logo from '../../img/logo/logo1.png';

import {
    HeroBg,
    HeroContainer,
    LandingBg,
    VideoBg,
    HeroContent,
    HeroContentWrapper,
    HeroLogo,
    LogoImg,
    LogoContainer,
    LogoText,
    HeroH1, HeroP,
    HeroBtnWrapper,
    ArrowFoward,
    ArrowRight,
    HeroP2
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <LandingBg>
                <VideoBg playsInline autoPlay loop muted src={video} type="video/mp4"/>
            </LandingBg>
            <HeroContent>
                <HeroContentWrapper>
                <HeroLogo>
                    <LogoImg src={logo} />
                    <LogoContainer>
                    <LogoText>
                        Bienes raices y construcción de Baja Californía
                    </LogoText>
                    <HeroP>
                      
                    </HeroP>
                    </LogoContainer>
                </HeroLogo>

                <HeroLogo>
                    
                    <HeroP2>
                    Cotización sin costo
                    </HeroP2>
                </HeroLogo>
                
                <HeroBtnWrapper>
                    <Button
                        target='_blank'
                        href='https://api.whatsapp.com/send?phone=526632148780'
                        big="true"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-60}
                                    activeClass="active"onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true"
                        >
                        Cotiza Ya <ArrowRight className="arrow"/>

                    </Button>
                </HeroBtnWrapper>
                </HeroContentWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection  
