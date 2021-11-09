import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./components/NavBarElements";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    Logo
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to="./Pages/Home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="./Pages/App" activeStyle>
                        Piano
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
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
