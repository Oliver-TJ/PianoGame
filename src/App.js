import styles from './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PianoGame from './pages/PianoGame';
import logo from './components/Logo.png';
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./components/NavBarElements";


function App() {
    return (
        <div className="App">
            <header className="App-header">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact-component={Home}>
                        <Home />
                    </Route>
                    <Route path="/pages/PianoGame" exact-component={PianoGame}>
                        <PianoGame />
                    </Route>
                    <Route path="/pages/SignIn" exact-component={SignIn}>
                        <SignIn />
                    </Route>
                    <Route path="/pages/SignUp" exact-component={SignUp}>
                        <SignUp />
                    </Route>
                </Switch>
            </Router>
            </header>
        </div>
    );
}


const  Navbar = () => {
    return (
        <Nav>
            <NavLogo to="/">
                <img src={logo} alt={'Logo'} className={"logo"}/>
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/pages/SignIn" activeStyle>
                    Log In
                </NavLink>
                <NavLink to="/pages/PianoGame" activeStyle>
                    Piano
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/pages/SignUp">Sign Up</NavBtnLink>
                </NavBtn>
            </NavMenu>
        </Nav>
    )
}

export default App;
