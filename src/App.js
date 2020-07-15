import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Project from './components/Project'
import './App.css';
import ProjectDescription from './components/ProjectDescription';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  render(){
  return (
    <Router><div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/projects' component={()=><Project />}/>
          <Route path='/:name' component={()=><ProjectDescription />}/>
        </Switch>
    </div>
    </Router>
  );
}
}

export default App;
