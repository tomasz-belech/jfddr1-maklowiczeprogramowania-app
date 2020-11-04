import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "Quicksand";
  font-weight: 500;
  background-color: var(--dark-clr);
  color: var(--light-clr);
  padding: 0.6rem;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
`;

const Button = ({ type, label }) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

export default Button;
