import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./components/NavBarElements";

const  Navbar = () => {
    return (
        <Nav>
            <NavLogo to="./Home">
                <img src="components/Logo.png" alt={'Logo'}/>
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink to="./Home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="./SignIn" activeStyle>
                    Sign In
                </NavLink>
                <NavLink to="./PianoGame" activeStyle>
                    Piano
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="./SignUp">Sign Up</NavBtnLink>
                </NavBtn>
            </NavMenu>
        </Nav>
    )
}

export { Navbar } ;