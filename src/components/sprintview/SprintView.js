import React from 'react'
import Card from 'react-bootstrap/Card'
import './SprintView.css'

const SprintView = props => {
    return (
        <div className="sprint_view">
            <div className="sprint_stats">
                <div className="sprint_stat_icon">{props.sprint.mood_before.name}</div>
                <div className="sprint_stat_icon">{props.sprint.mood_after.name}</div>
                <div className="sprint_stat_icon">{props.sprint.body.split(" ").length}</div>
                <div className="sprint_stat_icon">{(props.sprint.ended_at - props.sprint.started_at) / props.sprint.body.split(" ").length}</div>
                <div className="sprint_stat_icon">{props.sprint.ended_at - props.sprint.started_at}</div>
            </div>
            <Card body>
                {props.sprint.body}
            </Card>
        </div>
    )
}

export default SprintView