import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import ApiManager from '../../api/module' 

const SprintBox = props => {
    const [input, setInput] = useState('')

    const handleFieldChange = e => {
        const stateToChange = e.target.value
        setInput(stateToChange)
    }

    const clearSprint = e => {
        setInput('')
    }

    const saveSprint = e => {
        const sprint = {
            body: input,
            started_at: new Date(),
            story: 1,
            mood_before: 1,
            mood_after: 2
        }
        ApiManager.postSprint(sprint)
    }

    return (
        <div className="input_container">
            <input 
                className="sprint_input" 
                type="textarea" 
                maxLength="500000" 
                placeholder="Write your sprint here"
                onChange={handleFieldChange}
                value={input}
            />
            <Button variant="outline-success" size="sm" onClick={saveSprint}>Submit</Button>
            <Button variant="outline-danger" size="sm" onClick={clearSprint}>Clear</Button>
        </div>
    )
}

export default SprintBox