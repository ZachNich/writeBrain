import React from 'react';
import './App.css';
import SprintBox from '../sprintbox/SprintBox'
import Login from '../login/Login'

const App = () => {
  return (
    <div className="main_container">
      <Login />
      <SprintBox />
    </div>
  );
}

export default App
