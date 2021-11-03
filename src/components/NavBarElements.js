import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  background: cadetblue; /* nice background colour */
  display: flex; /* Puts the items in a flex-box */
  height: 80px;
  justify-content: space-between; /* makes the flex box align the items evenly throughout
                                     (aligned on the grid axis and the main axis) */
  align-items: center; /* Aligns the items towards the centre of the page 
                          (changes when the size of the webpage is changed) */
  z-index: 12; /* Specifies the stack order */
`;


export const NavLogo = styled(Link)`
  cursor: pointer; /* Allows the user to see when they are hovering over the logo box */
  color: white;
  font-size: 2rem;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  color: cadetblue;
`;

export const Bars = styled(FaBars)`
`;

export const NavMenu = styled.nav`
`;

export const NavBtn = styled.nav`
`;

export const NavBtnLink = styled(Link)`
`;


