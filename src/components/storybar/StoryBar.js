import React, { useState } from 'react'
import ApiManager from '../../api/module'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import StoryCard from './StoryCard'
import StoryForm from './StoryForm'

const StoryBar = props => {
    const [stories, setStories] = useState([])
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)

    const getStories = () => {
        ApiManager.getStories()
            .then(setStories)
    }

    if (props.isAuthenticated) {
        return (
            <div className="col-xs-4">
                <StoryForm show={show} setShow={setShow} getStories={getStories} />
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={getStories}>
                            My Stories
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Button variant="info" size="sm" onClick={handleShow}>Create Story</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                        {stories.map(story => <StoryCard isAuthenticated={props.isAuthenticated} setSprint={props.setSprint} getStories={getStories} stories={stories} story={story} {...props} />)}
                    </Card>
                </Accordion>
            </div>
        )
    } else return null
}

export default StoryBar