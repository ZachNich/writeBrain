import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import ApiManager from '../../api/module'
import Form from 'react-bootstrap/Form'

const DelStoryWarning = props => {
    const [selectedStoryId, setSelectedStoryId] = useState()

    const handleCloseWarning = () => props.setShowWarning(false)

    const handleDelete = () => {
        ApiManager.deleteStory(props.story)
            .then(props.getStories)
    }

    const moveSprints = storyId => {
        props.sprints.forEach(sprint => {
            sprint["story_id"] = storyId
            ApiManager.updateSprint(sprint)
                .then(null)
        })
        props.getStories()
        handleCloseWarning()
    }

    const handleSelect = e => {
        setSelectedStoryId(e.target.value)
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
                <Form.Group>
                    <Form.Control as="select" size="sm" placeholder="Select Story" onChange={handleSelect}>
                        {props.stories.map(story => 
                            <option value={story.id}>
                                {story.title}
                            </option>
                        )}
                    </Form.Control>
                    <Button onClick={() => moveSprints(selectedStoryId)}>Move Sprints</Button>
                </Form.Group>
                <Button variant="danger" onClick={handleDelete} size="sm">Delete Story</Button>
            </Alert>
        )
    } else return null
}

export default DelStoryWarning