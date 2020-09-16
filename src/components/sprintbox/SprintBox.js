import React, { useState, useEffect } from 'react'

const SprintBox = props => {
    const [input, setInput] = useState('')

    const handleFieldChange = e => {
        const stateToChange = e.target.value
        setInput(stateToChange)
    }
    
    return (
        <div className="input_container">
            <input 
                className="sprint_input" 
                type="textarea" 
                maxlength="500000" 
                placeholder="Write your sprint here"
                onChange={handleFieldChange}
            >
            </input>
        </div>
    )
}

export default SprintBox