import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import DisplayOverview from './components/DisplayOverview.js';
import DisplaySingleList from './components/DisplaySingleList.js';
import NavBar from './components/NavBar';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 
        [ 
          { 
            "name": "companyX",
            "status": "interested",
            "about": "this is a summary about Company X",
            "why": "this is a little info about why I want to work for Company X",
            "notes": "my notes will go here",
          },
          { 
            "name": "companyY",
            "status": "applied",
            "about": "this is a litte info about why I want to work for CompanyY",
            "notes": "my notes will go here",
          },
          {
            "name": "companyZ",
            "status": "interviewing",
            "about": "this is a little info about why I wanto to work for Company Z",
            "notes": "my notes will go here",
          },
          {
            "name": "companyNO",
            "status": "denied",
            "about": "this is a little info about why I wanto to work for Company NO",
            "notes": "my notes will go here",
          }
        ]
      };
    }

  createBlank = () => {
    console.log("create blank card function called");
  }

  addCard = () => {
    console.log("addCard Api Called");
  }

  updateCard = () => {
    console.log("updateCard Api Called");
  }

  deleteCard = () => {
    console.log("deleteCard Api Called");
  }

  render() {
    const {createBlank, addCard, updateCard, deleteCard} = this;

    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/overview" component={DisplayOverview} />
            <Route exact path="/DisplaySingleList" render= {(props) => ( < DisplaySingleList {...props} createBlank={createBlank} 
            addCard={addCard} updateCard={updateCard} deleteCard={deleteCard}/> ) }/>
          </Switch>
        </BrowserRouter>,  
      </div>
    );
  }
  
}

export default App;
