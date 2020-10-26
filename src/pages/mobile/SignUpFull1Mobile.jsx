import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import MobileFormTemplate from "../../components/templates/MobileFormTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import signUpFullImageMobileImageSrc from "../../img/sign-up-full-image-mobile.svg";
import { SignInTitle } from "../../components/SignInUpElements";

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 50px;
  align-items: center;
`;

const SlideItem = styled.span`
  font-size: 2rem;
`;
const SignInTitleCenter = styled(SignInTitle)`
  text-align: center;
  font-size: 2rem;
`;

const FullFormMobileImageComponent = styled.img``;

const FullFormMobileImage = ({ src }) => {
  return <FullFormMobileImageComponent src={src} />;
};

const signUpFull1FormMobile = () => {
  return (
    <MediaQuery maxDeviceWidth={1024}>
      <MobileFormTemplate>
        <FullFormMobileImage src={signUpFullImageMobileImageSrc} />
        <SignInTitleCenter>Załóż konto w kilku</SignInTitleCenter>
        <SignInTitleCenter>prostych krokach!</SignInTitleCenter>
        <ButtonContainer>
          <SmallButton type={"submit"} label={"Cofnij"} />
          <SmallButton type={"submit"} label={"Tworzę konto"} />
        </ButtonContainer>
        <SlideContainer>
          <SlideItem>•</SlideItem>
          <SlideItem>•</SlideItem>
          <SlideItem>•</SlideItem>
          <SlideItem>•</SlideItem>
        </SlideContainer>
      </MobileFormTemplate>
    </MediaQuery>
  );
};

export default signUpFull1FormMobile;