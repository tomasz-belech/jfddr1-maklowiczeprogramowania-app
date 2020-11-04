import React from "react";
import styled from "styled-components";
import { StyledButton } from "./Button";

export const StyledMediumButton = styled(StyledButton)`
  font-weight: 600;
  font-size: 1.4rem;
  padding: 1.5rem 0;
  width: 50%;
`;

const MediumButton = ({ type, label }) => {
  return <StyledMediumButton type={type}>{label}</StyledMediumButton>;
};

export default MediumButton;
