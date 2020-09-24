import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ApiManager from '../../api/module'

const DelStoryWarning = props => {
    const [selectedStory, setSelectedStory] = useState({title: "", description: ""})

    const handleCloseWarning = () => props.setShowWarning(false)

    const handleDelete = () => {
        ApiManager.deleteStory(props.story)
            .then(props.getStories)
    }

    const handleStorySelect = story => {
        setSelectedStory(story)
    }

    const moveSprints = story => {
        props.sprints.forEach(sprint => {
            sprint["story_id"] = story.id
            ApiManager.updateSprint(sprint)
                .then(null)
        })
        props.getStories()
        handleCloseWarning()
    }

    useEffect(() => {
        props.getStories()
        props.getSprints()
    }, [props.showWarning])

    if (props.setShowWarning) {
        return (
            <Alert show={props.showWarning} variant="danger" onClose={handleCloseWarning} dismissible>
                <Alert.Heading>
                    Deleting a story is irreversible and will delete all related sprints
                </Alert.Heading>
                <p>
                    If you'd like to keep your sprints, please reassign them to another story before deleting the current story. If you'd like to delete this story and all of its related sprints, click Delete Story. This action is irreversible.
                </p>
                <SplitButton variant="primary" onClick={() => moveSprints(selectedStory)} size="sm" title="Move Sprints">
                    {props.stories.map(story => 
                        <Dropdown.Item eventKey={story.id} onClick={() => handleStorySelect(story)}>
                            {story.title} 
                        </Dropdown.Item>
                    )}
                </SplitButton>
                <Button variant="danger" onClick={handleDelete} size="sm">Delete Story</Button>
            </Alert>
        )
    } else return null
}

export default DelStoryWarning