import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.css'
import SprintBox from '../sprintbox/SprintBox'
import Login from '../login/Login'
import StoryBar from '../storybar/StoryBar'
import SprintView from '../sprintview/SprintView'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.writeBrain_token !== undefined)
  const [sprint, setSprint] = useState({body: "", started_at: "", ended_at: ""})

  return (
    <>
      <Route exact path="/" render={props => 
          <div className="container">
            <div className="d-flex flex-row-reverse">
              <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} className="col-xs-12"/>
            </div>
            <div className="d-flex justify-content-between">
              <StoryBar isAuthenticated={isAuthenticated} setSprint={setSprint} {...props} />
              <SprintBox isAuthenticated={isAuthenticated} sprint={sprint} />
            </div>
          </div>
        }/>
      {sprint.id ?
        <Route path="/sprints/:sprintId" render={props => 
            <div className="row">
              <StoryBar isAuthenticated={isAuthenticated} setSprint={setSprint} {...props}  />
              <SprintView isAuthenticated={isAuthenticated} sprint={sprint} {...props}  />
            </div>
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
