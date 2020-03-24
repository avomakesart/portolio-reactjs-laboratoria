import React from "react";
import {
  NavContainerHolder,
  NavContainer,
  Navigation,
  NavLogo,
  NavLinkContainer,
  CustomNavLink
} from "./header-styles";

import MobileHeader from "./header-mobile";

export const Header = () => {
  return (
    <>
      <NavContainerHolder>
        <MobileHeader />
        <NavContainer>
          <Navigation>
            <NavLogo to="/">Alvaro</NavLogo>
            <NavLinkContainer>
              <CustomNavLink to="/work">Our Work</CustomNavLink>
              <CustomNavLink to="/about">About</CustomNavLink>
              <CustomNavLink to="/">Blog</CustomNavLink>
              <CustomNavLink to="/contact">Contact</CustomNavLink>
            </NavLinkContainer>
          </Navigation>
        </NavContainer>
      </NavContainerHolder>
    </>
  );
};
