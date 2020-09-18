import React from 'react';
import './App.css';
import SprintBox from '../sprintbox/SprintBox'
import Login from '../login/Login'
import StoryBar from '../storybar/StoryBar'

const App = () => {
  return (
    <div className="main_container">
      <Login />
      <StoryBar />
      <SprintBox />
    </div>
  );
}

export default App
