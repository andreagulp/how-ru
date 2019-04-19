import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import axios from 'axios'
import './App.css';

// import squadNames from '../assets/squadNames';
// import Question from '../components/Question';
import MoodSlider from '../components/MoodSlider';
import MoodVisualIndicator from '../components/MoodVisualIndicator';

import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import Snackbar from 'material-ui/Snackbar';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      // SQUAD_NAMES: squadNames,
      SQUAD_NAMES:[],
      moodComment: '',
      moodScore: 0.5,
      selectedSquad: this.getLocalSquadName(),
      snackbarIsOpen: false,
      serverResponse: '',
      drawerIsOpen: false
    }
    // prod
     this.apiUrlSquadName = '/api/v1/squads';
    this.apiUrlWrite = '/api/v1/submit';
    // dev
    //this.apiUrlSquadName = 'http://localhost:8192/api/v1/squads';
    //this.apiUrlWrite = 'http://localhost:8192/api/v1/submit';
  }

  handleChangeSquadMenu = (value) => this.setState({selectedSquad: value})
  handleMoodSlider = (event, value) => {
    event.preventDefault();
    this.setState({moodScore: value});
  };
  handleMoodComment = (e) => {
    const newComment = e.target.value
    this.setState({
      moodComment: newComment
    })
  }
  getSquadNames = () => {
    axios.get(this.apiUrlSquadName)
      .then(response => {
        console.log(response);
        this.setState({
          SQUAD_NAMES: response.data.squadNames
        })
      })
  }
  componentDidMount = () => {
    this.getSquadNames();
    this.getLocalSquadName();
    if (!this.getLocalSquadName()) {
      this.getSquadNames();
    } else {
      this.getLocalSquadName();
    }
  }
  enableSubmit = () => {
    if (this.state.selectedSquad === '') {
      return true
    } else {
      return false
    }
  }
  submitMood = () => {
    const newMood = {
      newSelectedSquad: this.state.selectedSquad,
      newMoodComment: this.state.moodComment,
      newMoodScore: this.state.moodScore
    };

    axios.post(this.apiUrlWrite, newMood)
      .then(response => {
        console.log(response);
        this.setState({
          serverResponse: response.data.msg
        })
      });

    this.setState({
      snackbarIsOpen: true,
      moodComment: '',
      moodScore: 0.5,
      selectedSquad: ''
    })
    this.refs.autoComplete.setState({ searchText: ''})
    this.updateLocalSquadName(this.state.selectedSquad)
  }
  closeSnackBar = () => {
    this.setState({
      snackbarIsOpen: false,
      serverResponse: ''
    })
    window.location = 'https://howru.w3ibm.mybluemix.net/dashboard';
  }

  updateLocalSquadName = (mySquadName) => {
    localStorage.setItem("squad-name-local", mySquadName);
    console.log(localStorage.getItem("squad-name-local"));
  }

  getLocalSquadName = () => {
    if (!window.localStorage) {
      return '';
    }
    console.log(`Local storage ${localStorage.getItem('squad-name-local')}`);
    return localStorage.getItem('squad-name-local');
  };

  render() {

    return (
        <div>
          <Row>
            <AutoComplete
              floatingLabelText="Type your squad name"
              filter={AutoComplete.fuzzyFilter}
              dataSource={this.state.SQUAD_NAMES}
              maxSearchResults={15}
              onUpdateInput={this.handleChangeSquadMenu}
              ref={`autoComplete`}
              fullWidth={true}
              searchText={this.state.selectedSquad}
            />
          </Row>
          {/* <Row center="xs">
            <Question />
          </Row> */}
          <Row>
            <TextField
              hintText="Comment"
              floatingLabelText="What's driving your work mood today?"
              multiLine={true}
              rows={1}
              fullWidth={true}
              value={this.state.moodComment}
              onChange={this.handleMoodComment}
            />
          </Row>
          <MoodSlider
            handleChange={this.handleMoodSlider}
            moodScore={this.state.moodScore}
          />
          <Row center="xs">
            <MoodVisualIndicator
              moodScore={this.state.moodScore}
            />
          </Row>
          <Row end="xs">
            <FloatingActionButton
              onClick={this.submitMood}
              disabled={this.enableSubmit()}
            >
              <ContentSend />
            </FloatingActionButton>
          </Row>
          <Snackbar
            open={this.state.snackbarIsOpen}
            message={this.state.serverResponse}
            autoHideDuration={1500}
            onRequestClose={this.closeSnackBar}
          />
        </div>
    );
  }
}

export default App;
