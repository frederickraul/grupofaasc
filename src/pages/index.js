import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Carrousel from '../components/Carrousel';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import ServiceSection from '../components/ServiceSection';
import Sidebar from '../components/Sidebar';
import { osName } from 'react-device-detect';
import bg from '../img/bg/13Mod1.jpg';
import { sectionObjOne, sectionObjThree, sectionObjTwo } from '../components/ServiceSection/Data';
import { CloseIcon, Icon } from '../components/Sidebar/sidebarElements';
import { ServicesGrid, ServicesGrid2, ServicesModal, ServicesImage, ServicesH2} from '../components/Services/ServiceElements';
import { sectionOne, sectionThree, sectionTwo } from '../components/ServiceSection/Data2';
import { ServicesImagesDescription } from '../components/ServiceSection/ServiceElements';
import { Button } from '../components/ButtonElement';
import { ArrowRight } from '../components/HeroSection/HeroElements';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isGridOpen, setIsGridOpen] = useState(false);
    const [isGrid2Open, setIsGrid2Open] = useState(false);
    const [isModalOpen, setisModalOpen] = useState(false);
    const [selectedImg, setselectedImg] = useState('');
    const [selectedImg2, setselectedImg2] = useState('');
    const [button, setbutton] = useState(false);

    const changeImg = (img,img2,button) => {
        setbutton(false);
        setselectedImg(img);
        setselectedImg2(img2);
        setbutton(button);
        toggleModal();
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const toggleGrid = () => {
        setIsGridOpen(!isGridOpen);
    }
    const toggleGrid2 = () => {
        setIsGrid2Open(!isGrid2Open);
    }
    const toggleModal = () => {
        setisModalOpen(!isModalOpen);
    }
    return (
        <>
        <div style={styles.cover}>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
                <InfoSection/>
            <Carrousel/>
                <Services toggleGrid={toggleGrid} toggleGrid2={toggleGrid2}/>
                <ServicesGrid isGridOpen={isGridOpen}>
                    <Icon onClick={toggleGrid}>
                        <CloseIcon black/>
                    </Icon>
                    <ServiceSection changeImg={changeImg} { ...sectionObjOne}/>
                    <ServiceSection changeImg={changeImg} { ...sectionObjTwo}/>
                    <ServiceSection changeImg={changeImg} { ...sectionObjThree}/>
                </ServicesGrid>
                <ServicesGrid2 isGrid2Open={isGrid2Open}>
                    <Icon onClick={toggleGrid2}>
                        <CloseIcon black/>
                    </Icon>
                    <ServiceSection roundedCard changeImg={changeImg} { ...sectionOne}/>
                    <ServiceSection roundedCard changeImg={changeImg} { ...sectionTwo}/>
                    <ServiceSection roundedCard changeImg={changeImg} { ...sectionThree}/>
                </ServicesGrid2>
                <ServicesModal isModalOpen={isModalOpen}>
                    <Icon onClick={toggleModal}>
                            <CloseIcon/>
                    </Icon>
                    <ServicesImage src={selectedImg}/>
                    {selectedImg2 &&
                    <ServicesImage src={selectedImg2}/>
                    }
                    
                    {button &&
                    <ServicesImagesDescription>
                    <Button
                        target='_blank'
                        href='https://api.whatsapp.com/send?phone=526632148780'
                        big="true"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-60}
                                    activeClass="active"
                        primary="true"
                        >
                        Cotiza Ya <ArrowRight className="arrow"/>

                    </Button>
                    </ServicesImagesDescription>
                    }
                </ServicesModal>
    
            <Footer />
        </div>
        </>
    
    )
}



const styles = {
    cover: {
       // backgroundImage: `url(${bg})`,
        
        backgroundSize: (osName === 'iOS') ? '250%' : 'cover',
        //backgroundSize: 'cover',
        backgroundPosition: '100% 0',
        backgroundAttachment: 'fixed',
    },
    
}
export default Home
