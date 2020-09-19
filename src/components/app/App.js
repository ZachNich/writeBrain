import React, { useState, useEffect } from 'react'
import './App.css'
import SprintBox from '../sprintbox/SprintBox'
import Login from '../login/Login'
import StoryBar from '../storybar/StoryBar'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkInitialAuth = () => {
    const auth = localStorage.writeBrain_token !== null
    setIsAuthenticated(auth)
  }

  useEffect(() => {
    checkInitialAuth()
  }, [])

  return (
    <div className="main_container">
      <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <StoryBar />
      <SprintBox />
    </div>
  );
}

export default App
