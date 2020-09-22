import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.css'
import SprintBox from '../sprintbox/SprintBox'
import Login from '../login/Login'
import StoryBar from '../storybar/StoryBar'
import SprintView from '../sprintview/SprintView'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [sprint, setSprint] = useState({body: "", started_at: "", ended_at: ""})

  const checkInitialAuth = () => {
    const auth = localStorage.writeBrain_token !== null
    setIsAuthenticated(auth)
  }

  useEffect(() => {
    checkInitialAuth()
  }, [])

  return (
    <>
      <Route exact path="/" render={props => 
          <>
            <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <StoryBar setSprint={setSprint} {...props} />
            <SprintBox sprint={sprint} />
          </>
        }/>
      {sprint.id ? 
        <Route path="/sprints/:sprintId" render={props => 
            <>
              <StoryBar setSprint={setSprint} {...props} />
              <SprintView sprint={sprint} {...props} />
            </>
          }/>
      :
        <Route path="/sprints/:sprintId">
          <Redirect to="/" />
        </Route>
      }
    </>
  );
}

export default App
