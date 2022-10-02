import React from "react";
import styled from "styled-components";

import FilterTabMenuBox from "./Filter/FilterTabMenuBox";
import SelectMenuBox from "./Select/SelectMenuBox";

function NavBar() {
  return (
    <Nav>
      <FilterTabMenuBox />
      <SelectMenuBox />
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #7a7a7a;
`;