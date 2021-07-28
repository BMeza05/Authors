import logo from './logo.svg';
import './App.css';
import Main from './Views/Main'
import { Router } from '@reach/router'
import Detail from './Views/Detail'
import Update from './Views/Update'

function App() {
  return (
    <div className="App">
      <Router>
      < Main path="/Author"/>
      <Detail path="/Author/:id"/>
      <Update path="/Author/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
