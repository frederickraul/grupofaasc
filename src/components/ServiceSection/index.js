import React from "react";
import { Button } from "../ButtonElement";

import {
  ServiceContainer,
  ServiceWrapper,
  ServiceRow,
  ServiceRow2,
  Column1,
  Column2,
  Column3,
  Column4,
  ServicesCard,
  ServiceTextWrap,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
} from "./ServiceElements";

const ServiceSection = ({
  type,
  lightBg,
  id,
  imgStart,
  title1,
  title2,
  title3,
  title4,
  p1,
  p2,
  p3,
  p4,
  Icon1,
  Icon11,
  Icon2,
  Icon22,
  Icon3,
  Icon33,
  Icon4,
  Button1,
  Button2,
  Button3,
  changeImg,
  roundedCard
}) => {
  return (
    <>
      <ServiceContainer lightBg={lightBg} id={id}>
        {type === 1 ? (
          <ServiceWrapper>
            <ServiceRow 
              roundedCard={roundedCard}

            imgStart={imgStart}>
              <Column1>
                {title1 && (
                  <ServicesCard
                    roundedCard={roundedCard}
                    white={true}
                    style={{ backgroundImage: `url(${Icon1})` }}
                    onClick={()=>{changeImg(Icon1,Icon11,Button1)}}
                  >
                    <ServiceTextWrap roundedCard={roundedCard}>
                      <ServicesH2 textWhite>{title1}</ServicesH2>
                    </ServiceTextWrap>{" "}
                    <ServicesP>{p1}</ServicesP>
                  </ServicesCard>
                )}
              </Column1>
              <Column2>
                {title2 && (
                  <ServicesCard
                  roundedCard={roundedCard}

                    white={true}
                    style={{ backgroundImage: `url(${Icon2})` }}
                    onClick={()=>{changeImg(Icon2,Icon22,Button2)}}

                  >
                    <ServiceTextWrap roundedCard={roundedCard}>
                      <ServicesH2 textWhite>{title2}</ServicesH2>
                    </ServiceTextWrap>{" "}
                    <ServicesP>{p2}</ServicesP>
                  </ServicesCard>
                )}
              </Column2>
              <Column3>
                {title3 && (
                  <ServicesCard
                  roundedCard={roundedCard}
                    white={true}
                    style={{ backgroundImage: `url(${Icon3})` }}
                    onClick={()=>{changeImg(Icon3,Icon33,Button3)}}

                  >
                    <ServiceTextWrap roundedCard={roundedCard}>
                      <ServicesH2 textWhite>{title3}</ServicesH2>
                    </ServiceTextWrap>{" "}
                    <ServicesP>{p3}</ServicesP>
                  </ServicesCard>
                )}
              </Column3>
            </ServiceRow>
          </ServiceWrapper>
        ) : (
          <ServiceWrapper>
            <ServiceRow2 
            roundedCard={roundedCard}
            imgStart={imgStart}>
              <Column1>
                {title1 && (
                  <ServicesCard
                  roundedCard={roundedCard}

                    white={true}
                    style={{ backgroundImage: `url(${Icon1})` }}
                    onClick={()=>{changeImg(Icon1,Icon11,Button1)}}

                  >
                    <ServiceTextWrap roundedCard={roundedCard}>
                      <ServicesH2 textWhite>{title1}</ServicesH2>
                    </ServiceTextWrap >{" "}
                    <ServicesP>{p1}</ServicesP>
                  </ServicesCard>
                )}
              </Column1>
              <Column2>
                {title2 && (
                  <div
                  roundedCard={roundedCard}
                  shadowless
                  >
                    <ServicesH1>{title2}</ServicesH1>
                    <ServicesH2 textWhite={true}>{p2}</ServicesH2>
                  </div>
                )}
              </Column2>
              <Column3>
                {title3 && (
                  <ServicesCard
                    roundedCard={roundedCard}
                    white={true}
                    style={{ backgroundImage: `url(${Icon3})` }}
                    onClick={()=>{changeImg(Icon3,Icon33,Button3)}}

                  >
                    <ServiceTextWrap roundedCard={roundedCard}>
                      <ServicesH2 textWhite>{title3}</ServicesH2>
                    </ServiceTextWrap>
                    <ServicesP>{p3}</ServicesP>
                  </ServicesCard>
                )}
              </Column3>
            </ServiceRow2>
          </ServiceWrapper>
        )}
      </ServiceContainer>
    </>
  );
};

export default ServiceSection;
