import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import ApiManager from '../../api/module'

const DelStoryWarning = props => {
    
    const handleCloseWarning = () => props.setShowWarning(false)

    const handleDelete = () => {
        ApiManager.deleteStory(props.story)
            .then(props.getStories)
    }

    if (props.setShowWarning) {
        return (
            <Alert show={props.showWarning} variant="danger" onClose={handleCloseWarning} dismissible>
                <Alert.Heading>
                    Deleting a story is irreversible and will delete all related sprints
                </Alert.Heading>
                <p>
                    If you'd like to keep your sprints, please reassign them to another story before deleting the current story. If you'd like to delete this story and all of its related sprints, click Delete Story. This action is irreversible.
                </p>
                <Button variant="danger" onClick={handleDelete}>Delete Story</Button>
            </Alert>
        )
    } else return null
}

export default DelStoryWarning