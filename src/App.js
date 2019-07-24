import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import DisplayOverview from './components/DisplayOverview.js';
import DisplaySingleList from './components/DisplaySingleList.js';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/overview" component={DisplayOverview} />
          <Route exact path="/DisplaySingleList" component={DisplaySingleList} />
        </Switch>
      </BrowserRouter>,  
    </div>
  );
}

export default App;
