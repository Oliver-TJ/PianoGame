import './App.css';
import {Piano} from "./components/Piano";
import {Navbar} from "./components/Menu"



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
          <Piano />
      </header>
    </div>
  );
}

export default App;
