import './App.css';
import { Navbar } from "./components/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import PianoGame from './Pages/PianoGame';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
          <Navbar />
              <Switch>
                  <Route path="./Pages/Home" exact component={Home} />
                  <Route path="./Pages/PianoGame" exact component={PianoGame} />
                  <Route path="./Pages/SignIn" exact component={SignIn} />
                  <Route path="./Pages/SignUp" exact component={SignUp} />
              </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
