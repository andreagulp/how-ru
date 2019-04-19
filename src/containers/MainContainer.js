import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Grid, Row } from 'react-flexbox-grid';

import App from './App';
import Dashboard from './Dashboard';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class MainContainer extends Component {
  constructor (props) {
    super (props);
    this.state = {
      drawerIsOpen: false
    }
  }

  handleDrawerOpen = () => this.setState({drawerIsOpen: !this.state.drawerIsOpen});
  handleDrawerClose = () => this.setState({drawerIsOpen: false});

  render () {
    return (
      <MuiThemeProvider>
        <Grid fluid className="appContainer">
          <Row center="xs">
            <AppBar
              title="How Are You?"
              onLeftIconButtonTouchTap={this.handleDrawerOpen}
            />
          </Row>
          <Router>
            <div>
              <Drawer
                open={this.state.drawerIsOpen}
                docked={false}
                width={150}
                onRequestChange={(drawerIsOpen) => this.setState({drawerIsOpen})}
              >
                <MenuItem><Link to="/" onClick={this.handleDrawerClose}>Home</Link></MenuItem>
                <MenuItem><Link to="/dashboard" onClick={this.handleDrawerClose}>Dashboard</Link></MenuItem>
              </Drawer>

              <Route exact path="/" component={App}/>
              <Route path="/dashboard" component={Dashboard}/>
            </div>
          </Router>
        </Grid>
      </MuiThemeProvider>
    )
  }
};
export default MainContainer
