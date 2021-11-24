import './App.css';
import { Navbar } from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PianoGame from './pages/PianoGame';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
          <Navbar />
              <Switch>
                  <Route path="./Home" >
                      <Home />
                  </Route>
                  <Route path="./PianoGame" >
                      <PianoGame />
                  </Route>
                  <Route path="./SignIn" >
                      <SignIn />
                  </Route>
                  <Route path="./SignUp" >
                      <SignUp />
                  </Route>
              </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
