import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Alert from 'react-bootstrap/Alert'
import ApiManager from '../../api/module' 
import StoryForm from '../storybar/StoryForm'
import MoodSelect from './MoodSelect'
import Timer from './Timer'
import TimerForm from './TimerForm'

const SprintBox = props => {
    const [input, setInput] = useState('')
    const [stories, setStories] = useState([])
    const [selectedStory, setSelectedStory] = useState({title: "Select Story"})
    const [showAlert, setShowAlert] = useState(false)
    const [showMoodAlert, setShowMoodAlert] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [moodBefore, setMoodBefore] = useState({name: "Mood Before Sprint"})
    const [moodAfter, setMoodAfter] = useState ({name: "Mood After Sprint"})
    const [showTimer, setShowTimer] = useState(false)
    const [showTimerForm, setShowTimerForm] = useState(false)
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [startTime, setStartTime] = useState()

    const handleFieldChange = e => {
        const stateToChange = e.target.value
        setInput(stateToChange)
    }

    const getStories = () => {
        ApiManager.getStories()
            .then(setStories)
    }

    const clearSprint = e => {
        setInput('')
    }

    const saveSprint = e => {
        const ended_at = new Date()
        if (selectedStory.id) {
            if (moodBefore.id && moodAfter.id) {
                const sprint = {
                    body: input,
                    started_at: startTime,
                    ended_at: ended_at,
                    story_id: selectedStory.id,
                    mood_before_id: moodBefore.id,
                    mood_after_id: moodAfter.id
                }
                ApiManager.postSprint(sprint)
                    .then(() => {
                        setSelectedStory({title: "Select Story"})
                        setMoodBefore({name: "Mood Before Sprint"})
                        setMoodAfter({name: "Mood After Sprint"})
                        setInput('')
                        setShowTimer(false)
                    })
            } else {
                setShowMoodAlert(true)
                setTimeout(() => {
                    setShowMoodAlert(false)
                }, 5000)
            }
        } else {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 5000)
        }
    }

    useEffect(() => {
        getStories()
    }, [props.isAuthenticated])

    if (props.isAuthenticated) {
        return (
            <div className="col-xs-8">
                <StoryForm show={showForm} setShow={setShowForm} />
                <TimerForm show={showTimerForm} setShow={setShowTimerForm} setShowTimer={setShowTimer} timeLeft={timeLeft} setTimeLeft={setTimeLeft} setStartTime={setStartTime} />
                {showTimer ? 
                    <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} hours={timeLeft.hours} minutes={timeLeft.minutes} seconds={timeLeft.seconds} setShowTimer={setShowTimer} />
                :
                    <Button variant="info" size="sm" onClick={() => setShowTimerForm(true)}>Set Timer</Button>
                }
                <MoodSelect id="mood_before" setMood={setMoodBefore} mood={moodBefore} />
                <div className="input_container">
                    <textarea 
                        className="sprint_input" 
                        style={{resize: "none", padding: "5px 0 5px 0"}}
                        rows="10"
                        cols="50"
                        maxLength="500000" 
                        placeholder="Write your sprint here"
                        onChange={handleFieldChange}
                        value={input}
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <MoodSelect id="mood_after" setMood={setMoodAfter} mood={moodAfter} />
                    <DropdownButton variant="light" title={selectedStory.title} size="sm" onClick={getStories}>
                        <Dropdown.Item eventKey="0" onClick={() => setShowForm(true)}>
                            Create Story
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        {stories.length > 0 &&
                            stories.map(story => {
                                return (
                                    <Dropdown.Item eventKey={story.id} onClick={() => setSelectedStory(story)}>
                                        {story.title}
                                    </Dropdown.Item>
                                )
                            })
                        }
                    </DropdownButton>
                    <Button variant="outline-success" size="sm" onClick={saveSprint}>Submit</Button>
                    <Button variant="outline-danger" size="sm" onClick={clearSprint}>Clear</Button>
                </div>
                <div className="row">
                    <Alert variant="danger" show={showAlert} dismissible onClose={() => setShowAlert(false)}>
                        Please choose a Story to house your Sprint before submission.
                    </Alert>
                    <Alert variant="danger" show={showMoodAlert} dismissible onClose={() => setShowMoodAlert(false)}>
                        Please select your mood before and after writing your sprint before submission.
                    </Alert>
                </div>
            </div>
        )
    } else return null
}

export default SprintBox