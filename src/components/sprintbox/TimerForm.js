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
        if (props.timeLeft.seconds < 0 || props.timeLeft.minutes < 0 || props.timeLeft.hours < 0 || props.timeLeft.seconds > 60 || props.timeLeft.minutes > 60 || props.timeLeft.seconds % 1 !== 0 || props.timeLeft.minutes % 1 !== 0 || props.timeLeft.hours % 1 !== 0) {
            window.alert("Please use 0 - 60 for all timer fields.")
        } else {
            props.setShow(false)
            props.setShowTimer(true)
            props.setStartTime(new Date())
        }
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
                            <input type="number" id="timer-hours" placeholder="hours" onChange={handleFieldChange} min="0" />
                        </Col>
                        <Col>
                            <input type="number" id="timer-minutes" placeholder="minutes" onChange={handleFieldChange} min={0} max={59} />
                        </Col>
                        <Col>
                            <input type="number" id="timer-seconds" placeholder="seconds" onChange={handleFieldChange} min="0" max="59" />
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