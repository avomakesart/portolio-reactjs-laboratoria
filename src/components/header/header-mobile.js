import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/menu-hook";

import { HeaderMobileContainer, MobileLogoContainer } from "./header-styles";

import Burger from "../header/mobile-menu/burger/index";
import MobileMenu from "../header/mobile-menu/index";

function MobileHeader() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <HeaderMobileContainer ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <MobileLogoContainer>
        <h2>Alvaro</h2>
      </MobileLogoContainer>
    </HeaderMobileContainer>
  );
}

export default MobileHeader;
