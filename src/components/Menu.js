import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavBarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="./Pages/Home">
                    Logo
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to="./Pages/Home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="./Pages/SignIn" activeStyle>
                        Sign In
                    </NavLink>
                    <NavLink to="./Pages/PianoGame" activeStyle>
                        Piano
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="./Pages/SignUp">Sign Up</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}

export { Navbar };