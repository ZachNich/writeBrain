import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ApiManager from '../../api/module'

const MoodSelect = props => {
    const [moods, setMoods] = useState([])

    const getMoods = () => {
        ApiManager.getMoods()
            .then(setMoods)
    }

    const handleMoodSelect = mood => {
        props.setMood(mood)
    }

    return (
        <DropdownButton variant="light" title={props.mood.name} size="sm" onClick={getMoods} >
            {moods.map(mood => {
                return (
                    <Dropdown.Item eventKey={mood.id} key={mood.id} onClick={() => handleMoodSelect(mood)} >
                        {mood.name}
                    </Dropdown.Item>
                ) 
            })}
        </DropdownButton>
    )
}

export default MoodSelect