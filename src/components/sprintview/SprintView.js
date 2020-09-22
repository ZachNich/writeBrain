import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import './SprintView.css'
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
        <div className="sprint_view">
            <div className="sprint_stats">
                <div className="sprint_stat_icon">{props.sprint.mood_before.name}</div>
                <div className="sprint_stat_icon">{props.sprint.mood_after.name}</div>
                <div className="sprint_stat_icon">{props.sprint.body.split(" ").length}</div>
                {/* <div className="sprint_stat_icon">{(props.sprint.ended_at - props.sprint.started_at) / props.sprint.body.split(" ").length}</div> */}
                {/* <div className="sprint_stat_icon">{props.sprint.ended_at - props.sprint.started_at}</div> */}
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