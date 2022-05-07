import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const HomeButton = styled.a`
  border: 2px solid #61dafb;
  background: transparent;
  border-radius: 3px;
  color: white;
  margin-top: 20px;
  &:hover {
    background: #61dafb;
    color: black;
  }
`;

export const InputButton = styled.input`
  border: 2px solid #61dafb;
  background: transparent;
  border-radius: 3px;
  color: white;
  padding: 0.25em 1em;
  &:hover {
    background: #61dafb;
    color: black;
    padding: 0.5em 1em;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:active {
      background: orange;
      border: 2px solid orange;
      transition: all 0.1s ease-in-out;
      cursor: crosshair;
    }
  }
`;

export const CButton = styled.button`
  border: 2px solid #61dafb;
  background: transparent;
  border-radius: 3px;
  font-size: x-large;
  color: white;
  padding: 1em 2em;
  &:hover {
    background: #61dafb;
    color: black;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:active {
      background: orange;
      border: 2px solid orange;
      transition: all 0.1s ease-in-out;
    }
  }
`;

export const InputBox = styled.input`
  margin: 0.5em;
  border: 2px solid #61dafb;
  border-radius: 3px;
  width: 20em;
  color: white;
  padding: 0.72em 1.7em;
  background: transparent;
  ::placeholder {
    color: grey;
  }
  &:hover {
    ::placeholder {
      color: #61dafb;
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const WordLink = styled.a`
  color: #61dafb;
  text-underline: aqua;
  font-size: 17px;
  padding-right: 3em;
  &:hover {
    color: white;
    text-shadow: darkred;
    transition: all 0.1s ease-in-out;
  }
`;


export const Nav = styled.nav`
  background: cornflowerblue; /* nice background colour */
  display: flex; /* Puts the items in a flex-box */
  height: 85px;
  justify-content: space-between; /* makes the flex box align the items evenly throughout
                                     (aligned on the grid axis and the main axis) */
  padding: 0.2rem calc((100vw - 1000px) / 2);
  border-bottom: 2px black;
`;


export const NavLogo = styled(Link)`
  cursor: pointer; /* Allows the user to see when they are hovering over the logo box */
  color: white;
  font-size: 2rem;
  text-decoration: none;
  size: 20px;
  padding: 0 2rem;
  border: 1px solid cadetblue;
  border-radius: 10px;
  &:hover {
    border: 1px solid orange;
    background: orange;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavLink = styled(Link)`
  z-index: 3;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: black;
    background: orange;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavMenu = styled.nav`
  z-index: 3;
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

export const NavBtn = styled.nav`
  z-index: 3;
  display: flex;
  align-items: center;
  margin-right: 0.2em;
`;

export const NavBtnLink = styled(Link)`
  z-index: 3;
  border-radius: 0.2em;
  background: transparent;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 0.2em;
  font-size: 1em;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
  :active {
    color: black;
    background: orange;
    border: 1px solid orange;
  }
`;