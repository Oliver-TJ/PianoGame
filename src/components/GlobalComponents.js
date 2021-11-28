import { FaBars } from "react-icons/fa";
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
    transition: all 0.2s ease-in-out; /* smooth transition */
  }
`;

export const InputBox = styled.input`
  margin: 0.5em;
  border: 2px solid #61dafb;
  border-radius: 3px;
  padding: 0.5em;
  color: white;
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
`;


export const NavLogo = styled(Link)`
  cursor: pointer; /* Allows the user to see when they are hovering over the logo box */
  color: white;
  font-size: 2rem;
  text-decoration: none;
  size: 20vmin;
  padding: 0 2rem;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:active {
    color:black;
  }
  &:hover {
    color: black;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
`;


