import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Alert from 'react-bootstrap/Alert'
import ApiManager from '../../api/module' 
import StoryForm from '../storybar/StoryForm'

const SprintBox = props => {
    const [input, setInput] = useState('')
    const [stories, setStories] = useState([])
    const [selectedStory, setSelectedStory] = useState({title: "Select Story"})
    const [showAlert, setShowAlert] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const handleFieldChange = e => {
        const stateToChange = e.target.value
        setInput(stateToChange)
    }

    const getStories = () => {
        ApiManager.getStories()
            .then(setStories)
    }

    const clearSprint = e => {
        setInput('')
    }

    const saveSprint = e => {
        if (selectedStory.id) {
            const sprint = {
                body: input,
                started_at: new Date(),
                story_id: selectedStory.id,
                mood_before_id: 1,
                mood_after_id: 2
            }
            ApiManager.postSprint(sprint)
                .then(() => {
                    setSelectedStory({title: "Select Story"})
                    setInput('')
                })
        } else {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 3000)
        }
    }

    const handleClose = () => setShowForm(false)

    useEffect(() => {
        getStories()
    }, [])

    return (
        <>
            <StoryForm show={showForm} setShow={setShowForm} />
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
                <DropdownButton variant="light" title={selectedStory.title} size="sm" onClick={getStories}>
                    <Dropdown.Item eventKey="0" onClick={() => setShowForm(true)}>
                        Create Story
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    {stories.map(story => {
                        return (
                            <Dropdown.Item eventKey={story.id} onClick={() => setSelectedStory(story)}>
                                {story.title}
                            </Dropdown.Item>
                        ) 
                    })}
                </DropdownButton>
                <Alert variant="danger" show={showAlert} dismissible onClose={() => setShowAlert(false)}>
                    Please choose a Story to house your Sprint before submission.
                </Alert>
            </div>
        </>
    )
}

export default SprintBox