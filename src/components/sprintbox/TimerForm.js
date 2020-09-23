import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const TimerForm = props => {
    const handleFieldChange = e => {
        const stateToChange = {...props.timeLeft}
        stateToChange[e.target.id.split("-")[1]] = e.target.value
        props.setTimeLeft(stateToChange)
    }

    const handleClose = () => {
        props.setShow(false)
    }

    const startSprint = () => {
        props.setShow(false)
        props.setShowTimer(true)
        props.setStartTime(new Date())
    }

    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                Set Sprint Timer
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control id="timer-hours" placeholder="hours" onChange={handleFieldChange} type="number" />
                        </Col>
                        <Col>
                            <Form.Control id="timer-minutes" placeholder="minutes" onChange={handleFieldChange} type="number" />
                        </Col>
                        <Col>
                            <Form.Control id="timer-seconds" placeholder="seconds" onChange={handleFieldChange} type="number" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Button onClick={startSprint}>Set Timer & Start Sprint</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default TimerForm