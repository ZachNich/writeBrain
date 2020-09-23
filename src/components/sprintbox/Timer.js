import React, { useState, useEffect } from 'react'
import useInterval from '../../hooks/useInterval'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const Timer = ({hours = 0, minutes = 3, seconds = 40}) => {
    const [timeLeft, setTimeLeft] = useState({
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        seconds: parseInt(seconds)
    })
    const [over, setOver] = useState(false)

    const countdown = e => {
        if (!over) {
            if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                setOver(true)
            } else if (timeLeft.seconds === 0 && timeLeft.minutes === 0) {
                setTimeLeft({
                    hours: timeLeft.hours - 1,
                    minutes: 59,
                    seconds: 59
                })
            } else if (timeLeft.seconds === 0) {
                setTimeLeft({
                    hours: timeLeft.hours,
                    minutes: timeLeft.minutes - 1,
                    seconds: 59
                })
            } else {
                setTimeLeft({
                    hours: timeLeft.hours,
                    minutes: timeLeft.minutes,
                    seconds: timeLeft.seconds - 1
                })
            }
        }
    }

    let timer = null
    
    const resetTimer = () => {
        setTimeLeft({
            hours: 0,
            minutes: 0,
            seconds: 0
        })
        setOver(false)
    }

    const setTimer = e => {
        setTimeLeft(e.target.value)
    }

    const startTimer = () => {
        timer = setInterval(() => countdown(), 1000)
    }

    useInterval(() => countdown(), 1000)

    return (
        <>
            <div>
                {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
            </div>
            <button onClick={startTimer}>Start</button>
            <button onClick={resetTimer}>Stop</button>
        </>
    )
}

export default Timer