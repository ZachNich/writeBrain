import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

const SprintCard = props => {
    return (
        <Accordion.Collapse eventKey="1">
        <Card.Body>
            <Accordion>
                <Card>
                    {props.sprint.body}
                </Card>
            </Accordion>
        </Card.Body>
    </Accordion.Collapse>

    )
}

export default SprintCard