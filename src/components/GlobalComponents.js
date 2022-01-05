import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  margin: 0 1em;
  cursor: pointer;
  border: 2px solid #61dafb;
  border-radius: 3px; /* makes the edges curved */
  padding: 0.25em 1em;
  background: transparent;
  color: white;
  &:hover {
    background: #61dafb;
    color: black;
    padding: 5px 1em;
    transition: all 0.2s ease-in-out; /* smooth transition */
    &:active {
      background: orange;
      border: 2px solid orange;
      transition: all 0.1s ease-in-out;
    }
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
  width: calc((110vw - 1000px) / 2);
  color: white;
  padding: 10px 20px;
  background: transparent;
  ::placeholder{
    color: grey;
  }
  &:hover {
    ::placeholder{
      color: #61dafb;
      transition: all 0.2s ease-in-out;
    }
  }
`;


export const Nav = styled.nav`
  background: cadetblue; /* nice background colour */
  display: flex; /* Puts the items in a flex-box */
  height: 85px;
  justify-content: space-between; /* makes the flex box align the items evenly throughout
                                     (aligned on the grid axis and the main axis) */
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12; /* Specifies the stack order */
  border-bottom: 2px black;
`;

export const Option = styled.option`
  color: black;
  background: #61dafb;
`;

export const Dropdown = styled.select`
  color: white;
  background: transparent;
  padding: 0.5em 2.3em;
  border: 2px solid #61dafb;
  border-radius: 3px;
  &:hover {
    background: #61dafb;
    color: black;
    transition: all 0.2s ease-in-out;
  }
`;


export const NavLogo = styled(Link)`
  cursor: pointer; /* Allows the user to see when they are hovering over the logo box */
  color: white;
  font-size: 2rem;
  text-decoration: none;
  size: 20vmin;
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
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
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


