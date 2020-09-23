import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import NewMeeting from '../NewMeeting/NewMeeting';
import Meetings from '../Meetings/Meetings';
import Teams from '../Teams/Teams';
import MeetingPage from '../MeetingPage/MeetingPage';

export default class App extends React.Component {

  render() {
    return (

      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
            />
          )}
        />

        <Route path="/new-meeting" component={NewMeeting} />{" "}
        <Route path="/meetings" component={Meetings} />{" "}
        <Route path="/teams" component={Teams} />{" "}
        <Route path="/meeting/:meetingId" component={MeetingPage} />{" "}
      </div>
    )
  }
}