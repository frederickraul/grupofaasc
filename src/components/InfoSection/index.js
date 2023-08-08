import React from "react";
import { Button } from "../ButtonElement";
import {
  IoHeartOutline,
  IoPeopleOutline,
  IoTimeOutline,
} from "react-icons/io5";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ServicesWrapper,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  InfoText,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <TopLine>Somos</TopLine>
                <Heading lightText={false}>GRUPO</Heading>
                <Subtitle darkText={true}>FAASC</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={true ? 1 : 0}
                    dark={false ? 1 : 0}
                    dark2={false ? 1 : 0}
                  >
                    Leer Más
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <ServicesH2>MISIÓN</ServicesH2>
                <InfoText>
                  Somos una empresa dedicada a desarrollar y comercializar
                  proyectos de construcción. Trabajamos con el compromiso de
                  otorgar satisfacción a nuestros clientes, colaboramos de
                  manera positiva generando calidad y puntualidad.
                </InfoText>
              </TextWrapper>
              <TextWrapper style={{marginTop:'20px'}}>
                <ServicesH2>VISIÓN</ServicesH2>
                <InfoText>
                  Ser una empresa reconocida por su honestidad y confiabilidad.
                  Destacando por su excelencia, los bienes y una universidad en
                  proceso.
                </InfoText>
              </TextWrapper>
              <ServicesWrapper>
                <ServicesCard>
                  <ServicesIcon>
                    <IoPeopleOutline />
                  </ServicesIcon>
                  <ServicesH2>Equipo profesional</ServicesH2>
                  <ServicesP>
                    Contamos con un equipo altamente capacitado para brindarte
                    un excelente trabajo.
                  </ServicesP>
                </ServicesCard>
                <ServicesCard>
                  <ServicesIcon>
                    <IoHeartOutline />
                  </ServicesIcon>
                  <ServicesH2>Contruimos con dedicación</ServicesH2>
                  <ServicesP>
                    La calidad nos representa, nos dedicamos a crear y renovar
                    tu lugar ideal.
                  </ServicesP>
                </ServicesCard>
                <ServicesCard>
                  <ServicesIcon>
                    <IoTimeOutline />
                  </ServicesIcon>
                  <ServicesH2>Entregamos a tiempo</ServicesH2>
                  <ServicesP>
                    La puntualidad y responsabilidad es muy importante, es por
                    eso que trabajamos en base a ello.
                  </ServicesP>
                </ServicesCard>
              </ServicesWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
