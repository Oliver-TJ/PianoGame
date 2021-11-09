import './App.css';
import {Piano} from "../components/Piano";
import {Navbar} from "../components/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PianoGame from './PianoGame';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
          <Switch>
              <Route path="./Home" exact component={Home} />
              <Route path="./PianoGame" exact component={PianoGame} />
          </Switch>
      </header>
    </div>
  );
}

export default App;
