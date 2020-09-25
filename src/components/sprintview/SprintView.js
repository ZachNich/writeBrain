import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import ApiManager from '../../api/module'

const SprintView = props => {
    const [showWarning, setShowWarning] = useState(false)

    const handleShowWarning = () => setShowWarning(true)
    const handleCloseWarning = () => setShowWarning(false)
    
    const handleDelete = () => {
        ApiManager.deleteSprint(props.sprint)
            .then(() => {
                handleCloseWarning()
                props.history.push("/")
            })
    }

    return (
        <div className="col-xs-8">
            <div className="d-flex justify-content-around">
                <div className="col xs-2">
                    <p style={{margin: "unset"}}>Mood Before:</p> 
                    <p style={{margin: "unset"}}>{props.sprint.mood_before.name}</p>
                </div>
                <div className="col xs-2">
                    <p style={{margin: "unset"}}>Mood After:</p> 
                    <p style={{margin: "unset"}}>{props.sprint.mood_after.name}</p>
                </div>
                <div className="col xs-2">
                    <p style={{margin: "unset"}}>Word Count:</p> 
                    <p style={{margin: "unset"}}>{props.sprint.body.split(" ").length}</p>
                </div>
                <div className="col xs-2">
                    <p style={{margin: "unset"}}>Sprint Time:</p> 
                    <p style={{margin: "unset"}}>~{Math.round((new Date(props.sprint.ended_at) - new Date(props.sprint.started_at)) / 60000)}m</p>
                </div>
                <div className="col xs-2">
                    <p style={{margin: "unset"}}>WPM:</p> 
                    <p style={{margin: "unset"}}>~{props.sprint.body.split(" ").length / (Math.round((new Date(props.sprint.ended_at) - new Date(props.sprint.started_at)) / 60000))}</p>
                </div>
            </div>
            <Card body>
                {props.sprint.body}
            </Card>
            <Button variant="danger" size="sm" onClick={handleShowWarning} >Delete Sprint</Button>
            <Alert show={showWarning} variant="danger" onClose={handleCloseWarning} dismissible>
                <Alert.Heading>
                    Deleting a sprint is irreversible
                </Alert.Heading>
                <p>
                    If you'd like to delete your sprint permanently, click confirm delete to do so.
                </p>
                <Button variant="danger" onClick={handleDelete} size="sm">Confirm Delete</Button>
            </Alert>
        </div>
    )
}

export default SprintView