// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import {  Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Router> */}
     
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Skills' exact component={Skills}/>
        <Route path='/About'exact component={About}/>
      </Switch>
      {/* </Router> */}
    </div>
  );
}

export default App;
