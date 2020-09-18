import React, { useState } from 'react'
import ApiManager from '../../api/module'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import SprintCard from './SprintCard'

const StoryCard = props => {
    const [sprints, setSprints] = useState([])

    const getSprints = () => {
        ApiManager.getSprints()
            .then(setSprints)
    }

    return (
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={getSprints}>
                            {props.story.title}
                        </Accordion.Toggle>
                        {sprints.map(sprint => <SprintCard sprint={sprint} />)}
                    </Card>
                </Accordion>
            </Card.Body>
        </Accordion.Collapse>
    )
}

export default StoryCard