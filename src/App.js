import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faSwimmer,
  faUser,
  faEnvelope,
  faBriefcase,
  faArrowLeft,
  faArrowRight,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

import SideNav from './components/SideNav/SideNav';

import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import MyProjects from './components/MyProjects/MyProjects';
import Contact from './components/Contact/Contact';
import DealNDeal from './components/MyProjects/DealNDeal';
import DeltaVacations from './components/MyProjects/DeltaVacations';
import DigiBanking from './components/MyProjects/DigiBanking';
import Realogy from './components/MyProjects/Realogy';
import SalesDirect from './components/MyProjects/SalesDirect';
import SiteSelex from './components/MyProjects/SiteSelex';

import './App.scss';

library.add(
  faHome,
  faSwimmer,
  faUser,
  faEnvelope,
  faFacebook,
  faLinkedin,
  faInstagram,
  faBriefcase,
  faArrowLeft,
  faArrowRight,
  faExternalLinkAlt
);

class App extends Component {
  state = {
    myData: {}
  };

  componentDidMount() {
    axios
      .get('https://hub.deloitte.com/api/portfolio/7486fe147f08db06d4f9bff86e39b6e274c2a467b9ae68e0af8c2bceba47d369')
      .then(res => {
        console.log(res.data.data);
        this.setState({
          myData: res.data.data
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SideNav firstName={this.state.myData.firstname} />
          <main className="maincontent">
            <Switch>
              <Route exact path="/" render={() => <Home firstName={this.state.myData.firstname} />} />
              <Route
                exact
                path="/home"
                render={() => <Home firstName={this.state.myData.firstname} lastName={this.state.myData.lastname} />}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/projects" component={MyProjects} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/projects/deal-no-deal" component={DealNDeal} />
              <Route exact path="/projects/delta-vacations" component={DeltaVacations} />
              <Route exact path="/projects/digi-banking" component={DigiBanking} />
              <Route exact path="/projects/realogy" component={Realogy} />
              <Route exact path="/projects/sales-direct" component={SalesDirect} />
              <Route exact path="/projects/site-selex" component={SiteSelex} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
