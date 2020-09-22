import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const SprintCard = props => {

    const openSprint = () => {
        props.setSprint(props.sprint)
        props.history.push(`/sprints/${props.sprint.id}`)
    }

    return (
        <Accordion.Collapse eventKey="1">
        <Card.Body>
            <Accordion>
                <Card>
                    {props.sprint.body}
                </Card>
                <Button variant="info" size="sm" onClick={openSprint} >View Sprint</Button>
            </Accordion>
        </Card.Body>
    </Accordion.Collapse>

    )
}

export default SprintCard