import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-aling: left;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  display: ${({ open }) => (open ? "flex" : "none")};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileLink = styled(Link)`
  font-size: 1.5em;
  text-transform: normal;
  padding: 2rem 0;
  font-weight: 400;
  letter-spacing: 0.5rem;
  color: #191919;
  text-decoration: none;
  transition: color 0.3s linear;
  text-align: center;
`;
