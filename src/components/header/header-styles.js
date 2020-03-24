import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavContainerHolder = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  transition: -webkit-transform 0.4s cubic-bezier(0.58, 0.3, 0.005, 1);
  transition: transform 0.4s cubic-bezier(0.58, 0.3, 0.005, 1);
  transition: transform 0.4s cubic-bezier(0.58, 0.3, 0.005, 1),
    -webkit-transform 0.4s cubic-bezier(0.58, 0.3, 0.005, 1);
`;

export const NavContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin: 2.5rem auto;
    width: 85%;
    max-width: 192rem;
    transition: all 0.28s cubic-bezier(0.555, 0.205, 0.295, 0.975);
  }
`;

export const Navigation = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  height: 3.75rem;
  margin: 0 auto;
  padding: 0;
`;

export const NavLogo = styled(Link)`
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-self: center;
  margin-right: 1.25rem;
  text-decoration: none;
  color: #191919;
  font-size: 1.5em;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  margin-left: auto !important;
  align-items: center;
`;

export const CustomNavLink = styled(NavLink)`
  color: #191919;
  text-decoration: none;
  cursor: pointer;
  margin-left: 3rem;

  &:hover {
    border-bottom: 1px solid #191919;
    transition: 0.2s;
  }

  &:focus {
    border-bottom: 1px solid #191919;
    transition: 0.2s;
  }
`;

/**
 * Mobile Header
 **/

export const HeaderMobileContainer = styled.div`
  position: fixed;
  height: 70px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  background: white;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileLogoContainer = styled(Link)`
  display: inherit;
  margin: 0 auto;
  padding-bottom: 1rem;
  text-decoration: none;
  color: #191919;
  font-weight: 400;

  @media (min-width: 768px) {
    display: none;
  }
`;
