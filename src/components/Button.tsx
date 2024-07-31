// Button.tsx
import React, { ReactNode } from "react";
import styled from "styled-components";

// Define the props interface
interface ButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  hoverBackgroundColor?: string;
}

// Define the styled button with dynamic styles
const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || "blue"};
  color: ${(props) => props.color || "white"};
  border: none;
  border-radius: ${(props) => props.borderRadius || "4px"};
  padding: ${(props) => props.padding || "10px 20px"};
  font-size: ${(props) => props.fontSize || "16px"};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || "darkblue"};
  }
`;

// Create the Button component
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
