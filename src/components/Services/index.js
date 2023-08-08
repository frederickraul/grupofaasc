import React from "react";

import { FaRegBuilding, FaFacebook } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import { IoWaterOutline } from "react-icons/io5";
import { VscFlame } from "react-icons/vsc";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  InfoText,
} from "./ServiceElements";

import { IconContext } from "react-icons/lib";

const ServiceSection = ({toggleGrid, toggleGrid2}) => {
  return (
    <>
      <IconContext.Provider value={{ size: "1.7em" }}>
        <InfoContainer id="services">
          <InfoWrapper>
            <InfoRow imgStart={true}>
              <Column1>
                <TextWrapper>
                  <TopLine>Nuestros</TopLine>
                  <Heading lightText={false}>Servicios</Heading>
                </TextWrapper>
              </Column1>
              <Column2>
                <TextWrapper>
                  <InfoText>
                  𝗚𝗥𝗨𝗣𝗢 𝗙𝗔𝗔𝗦𝗖 te invita a conocer nuestro trabajo y pone a tu disposición nuestros diferentes 
                  servicios en las siguientes áreas:
                  </InfoText>
                </TextWrapper>
                <ServicesWrapper>
                  <ServicesCard onClick={toggleGrid}>
                    <ServicesIcon className="iconContainer">
                      <FaRegBuilding className="icon" />
                    </ServicesIcon>
                    <ServicesH2>Construcción</ServicesH2>
                    <ServicesP>
                      Ver más
                    </ServicesP>
                  </ServicesCard>
                  <ServicesCard onClick={toggleGrid2}>
                    <ServicesIcon className="iconContainer">
                      <BiHomeSmile className="icon" />
                    </ServicesIcon>
                    <ServicesH2>Bienes Raices</ServicesH2>
                    <ServicesP>
                        Ver más
                    </ServicesP>
                  </ServicesCard>
                </ServicesWrapper>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </IconContext.Provider>
    </>
  );
};

export default ServiceSection;
