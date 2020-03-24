import React from "react";
import { bool, func } from "prop-types";
import { StyledMenu, MobileLink } from "./mobile-menu-styles";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <MobileLink to="/work" onClick={() => setOpen(!open)}>
        Work
      </MobileLink>
      <MobileLink to="/about" onClick={() => setOpen(!open)}>
        About
      </MobileLink>
      <MobileLink to="/blog" onClick={() => setOpen(!open)}>
        Blog
      </MobileLink>
      <MobileLink to="/contact" onClick={() => setOpen(!open)}>
        Contact
      </MobileLink>
    </StyledMenu>
  );
};

MobileMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default MobileMenu;
