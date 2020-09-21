import React from 'react';
import './App.css';
import HeaderComponent from "../src/components/header.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import TableLocationsComponent from './components/table.locations.component';
import Axios from 'axios';
import TableOldestComponent from './components/table.oldest.component';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0, oldest: [], locations: [] };
    this.changePageParent(1);
  }

  render() {
    return (
      <div className="App container">
        <HeaderComponent
          title="Listing of Active Businesses"
          description="ReactJS + ExpressJS + NodeJS + Rest API"
        />
        <div className="container results">
          <div className="row">
            <div className="col">
              <Router>
                <div>
                  <nav>
                    <Link to="/most-locations" onClick={() => { this.changePageParent(1) }}>
                      <Button variant="contained" color="primary" disabled={this.state.currentIndex <= 1}>
                        By Most Location
                    </Button>
                    </Link>
                    <Link to="/oldest" onClick={() => { this.changePageParent(2) }}>
                      <Button variant="contained" color="primary" disabled={this.state.currentIndex === 2}>
                        By Oldest
                    </Button>
                    </Link>
                  </nav>

                  <Switch>
                    <Route path="/oldest">
                      <TableOldestComponent data={this.state.oldest} />
                    </Route>
                    <Route path={["/", "/most-locations"]}  >
                      <TableLocationsComponent data={this.state.locations} />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </div>
          </div>
        </div>
        <sub>https://data.lacity.org/A-Prosperous-City/Listing-of-Active-Businesses/6rrh-rzua</sub>
      </div>
    )
  }

  changePageParent = (n) => {
    switch (n) {
      case 2:
        Axios.get("http://localhost:4000/sort/oldest")
          .then((result) => {
            this.setState({ oldest: result.data });
          });
        break;
      default:
        Axios.get("http://localhost:4000/sort/most-locations")
          .then((result) => {
            this.setState({ locations: result.data });
          });
        break;
    }
    this.setState({ currentIndex: n });
    this.forceUpdate();
  }

}
