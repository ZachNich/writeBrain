import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import ApiManager from '../../api/module'

const StoryForm = props => {
    const [story, setStory] = useState({})

    const postStory = () => {
        ApiManager.postStory(story)
            .then(props.getStories)
    }

    const handleFieldChange = e => {
        const stateToChange = {...story}
        stateToChange[e.target.id.split("-")[1]] = e.target.value
        setStory(stateToChange)
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Story</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control id="story-title" placeholder="title" onChange={handleFieldChange} />
                        </Col>
                        <Col>
                            <Form.Control id="story-description" placeholder="description" onChange={handleFieldChange} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Button onClick={postStory}>Submit</Button>
                            <Button>Clear</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default StoryForm