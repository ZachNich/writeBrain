import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import SprintBox from '../sprintbox/SprintBox'
import Navi from '../nav/Nav'
import StoryBar from '../storybar/StoryBar'
import SprintView from '../sprintview/SprintView'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.writeBrain_token !== undefined)
  const [sprint, setSprint] = useState({body: "", started_at: "", ended_at: ""})

  return (
    <>
      <Route exact path="/" render={props => 
          <div className="container">
            <Navi isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} {...props}/>
            <div className="d-flex justify-content-between">
              <StoryBar isAuthenticated={isAuthenticated} setSprint={setSprint} {...props} />
              <SprintBox isAuthenticated={isAuthenticated} sprint={sprint} />
            </div>
          </div>
        }/>
      {sprint.id ?
        <Route path="/sprints/:sprintId" render={props => 
            <div className="container">
              <div className="d-flex flex-row-reverse">
                <Navi isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} {...props} className="col-xs-12"/>
              </div>
              <div className="d-flex justify-content-between">
                <StoryBar isAuthenticated={isAuthenticated} setSprint={setSprint} {...props}  />
                <SprintView isAuthenticated={isAuthenticated} sprint={sprint} {...props}  />
              </div>
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
