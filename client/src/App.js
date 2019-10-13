import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage.js'
import TeamPage from './components/TeamPage.js'
import MerchandiseList from './components/MechandiseList.js'
import ScheduleList from './components/ScheduleList.js'
import './App.css';

const styling ={
  logo: {
    width: "150px",
    height: "100px"
  },
  epl:{
    background: "./epl.png",
    width: "150px",
    height: "100px"
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/team/:id" component={TeamPage} />
            <Route exact path="/merchandise" component={MerchandiseList} />
            <Route exact path="/Schedule" component={ScheduleList} />
          </Switch>
        </div>
      </Router>
      <footer className="footer">
        <div className="footerContainer">
          <div>
            <a href="https://www.premierleague.com/tables" target="_blank"><img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flogok.org%2Fwp-content%2Fuploads%2F2014%2F11%2FPremier-League-logo-2016.png&f=1&nofb=1" style={styling.logo}/></a>
          </div>
          <div>
            <a href="https://www.skysports.com/la-liga-table" target="_blank"><img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fprojects.fivethirtyeight.com%2Fsoccer-predictions%2Fimages%2Fla-liga-2-logo.png&f=1&nofb=1" style={styling.logo}/></a>
          </div>
          <div>
            <a href="https://www.mlssoccer.com/standings" target="_blank"><img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F86%2FMLS_logo.svg%2F970px-MLS_logo.svg.png&f=1&nofb=1" style={styling.logo}/></a>
          </div>
          <div>
            <a href="https://www.bbc.com/sport/football/french-ligue-one/table" target="_blank"><img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flogok.org%2Fwp-content%2Fuploads%2F2014%2F11%2FLigue_1-logo-.png&f=1&nofb=1" style={styling.logo}/></a>
          </div>
          <div>
            <a href="https://www.skysports.com/serie-a-table" target="_blank"><img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flogok.org%2Fwp-content%2Fuploads%2F2014%2F11%2FSerie-a-logo.png&f=1&nofb=1" style={styling.logo}/></a>
          </div>
          <div>
            <a href="https://www.skysports.com/eredivisie-table" target="_blank"><img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.bleacherreport.net%2Fimages%2Fteam_logos%2F328x328%2Feredivisie.png&f=1&nofb=1" style={styling.logo}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
