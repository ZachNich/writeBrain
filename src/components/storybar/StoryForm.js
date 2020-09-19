import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import ApiManager from '../../api/module'

const StoryForm = props => {
    const [story, setStory] = useState({
        "title": "",
        "description": ""
    })

    const handleClose = () => {
        setStory({
            "title": "",
            "description": ""
        })
        props.setShow(false)
    }

    const postStory = () => {
        ApiManager.postStory(story)
            .then(props.getStories)
            .then(handleClose)
    }
    
    const updateStory = () => {
        ApiManager.updateStory(story)
            .then(() => props.getStories()) 
            .then(handleClose)
    }

    const handleFieldChange = e => {
        const stateToChange = {...story}
        stateToChange[e.target.id.split("-")[1]] = e.target.value
        setStory(stateToChange)
    }

    useEffect(() => {
        if (props.story) {
            setStory(props.story)
        }
    }, [])

    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                {props.edit ? 
                <Modal.Title>Edit Story</Modal.Title>
                :
                <Modal.Title>Create Story</Modal.Title>
                }
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control id="story-title" placeholder="title" value={story.title} onChange={handleFieldChange} />
                        </Col>
                        <Col>
                            <Form.Control id="story-description" placeholder="description" value={story.description} onChange={handleFieldChange} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            {props.edit ?
                            <Button onClick={updateStory}>Submit</Button>
                            :
                            <Button onClick={postStory}>Submit</Button>
                            }
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default StoryForm