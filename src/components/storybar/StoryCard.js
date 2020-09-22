import React, { useState } from 'react'
import ApiManager from '../../api/module'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import SprintCard from './SprintCard'
import Button from 'react-bootstrap/Button'
import StoryForm from './StoryForm'
import DelStoryWarning from './DelStoryWarning'

const StoryCard = props => {
    const [sprints, setSprints] = useState([])
    const [show, setShow] = useState(false)
    const [showWarning, setShowWarning] = useState(false)

    const handleShow = () => setShow(true)
    const handleShowWarning = () => setShowWarning(true)

    const getSprints = () => {
        ApiManager.getSprintsByStory(props.story.id)
            .then(setSprints)
    }

    return (
        <>
            <StoryForm show={show} setShow={setShow} edit={true} story={props.story} getStories={props.getStories} />
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Accordion>
                        <Card> 
                            <Accordion.Toggle as={Card.Header} eventKey="1" onClick={getSprints}>
                                {props.story.title} - {props.story.description}
                            </Accordion.Toggle>
                            {sprints.map(sprint => <SprintCard setSprint={props.setSprint} sprint={sprint} {...props} />)}
                        </Card>
                    </Accordion>
                    <>
                        <Button variant="warning" size="sm" onClick={handleShow}>Edit</Button>
                        <Button variant="danger" size="sm" onClick={handleShowWarning}>Delete</Button>
                        <DelStoryWarning story={props.story} getStories={props.getStories} showWarning={showWarning} setShowWarning={setShowWarning} getSprints={getSprints} handleShow={handleShow} sprints={sprints} stories={props.stories} getSprints={getSprints} />
                    </>
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}

export default StoryCard