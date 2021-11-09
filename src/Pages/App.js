import './App.css';
import { Navbar } from "../components/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PianoGame from './PianoGame';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
          <Navbar />
              <Switch>
                  <Route path="./Home" exact component={Home} />
                  <Route path="./PianoGame" exact component={PianoGame} />
                  <Route path="./SignIn" exact component={SignIn} />
                  <Route path="./SignUp" exact component={SignUp} />
              </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
