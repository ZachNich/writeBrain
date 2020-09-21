import React from 'react'
import Card from 'react-bootstrap/Card'
import './SprintView.css'

const SprintView = props => {
    return (
        <div className="sprint_view">
            <div className="sprint_stats">
                <Card>{props.sprint.mood_before.name}</Card>
                <Card>{props.sprint.mood_after.name}</Card>
                <Card>{props.sprint.body.split(" ").length}</Card>
                <Card>{(props.sprint.ended_at - props.sprint.started_at) / props.sprint.body.split(" ").length}</Card>
                <Card>{props.sprint.ended_at - props.sprint.started_at}</Card>
            </div>
            <Card body>
                {props.sprint.body}
            </Card>
        </div>
    )
}

export default SprintView