import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Brush  } from 'recharts';
import axios from 'axios'

class Dashboard extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: []
    };
    //this.apiUrlSquadStat = 'http://localhost:8192/api/v1/dashboard'
    this.apiUrlSquadStat = '/api/v1/dashboard';
  }

  componentDidMount = () => {
    this.getSquadStat()
    };

  getSquadStat = () => {
    const param = {squadName: this.getLocalSquadName()};
    axios.post(this.apiUrlSquadStat, param)
      .then(response => {
        console.log(response);
        this.setState({
          data:  response.data.data,
        });
      });
  };
  
  getLocalSquadName = () => {
    if (!window.localStorage) {
      return '';
    }
    console.log(`Local storage ${localStorage.getItem('squad-name-local')}`);
    return localStorage.getItem('squad-name-local');
  };

  render () {
    return (
          <ResponsiveContainer width='100%' aspect={4.0/3.0}>
            <LineChart data={this.state.data} margin={{top: 10, right: 0, left: -20, bottom: 0}}>
              <Line type="monotone" dataKey="mood" stroke="#8884d8" />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Brush dataKey='week' height={30} stroke="#8884d8"/>
              <XAxis dataKey="week" />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        )
      }
    };
export default Dashboard
