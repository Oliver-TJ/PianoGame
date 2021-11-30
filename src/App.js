import './App.css';
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
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./components/GlobalComponents";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/PianoGame" component={PianoGame}/>
                        <Route path="/SignIn" component={SignIn}/>
                        <Route path="/SignUp" component={SignUp}/>
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
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/SignIn" activeStyle>
                    Sign In
                </NavLink>
                <NavLink to="/PianoGame" activeStyle>
                    Piano
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/SignUp">Sign Up</NavBtnLink>
                </NavBtn>
            </NavMenu>
        </Nav>
    )
}

export default App;
