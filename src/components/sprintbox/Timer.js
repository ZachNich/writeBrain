import React, { useState, useEffect } from 'react'
import useInterval from '../../hooks/useInterval'

const Timer = (props, {hours = 0, minutes = 0, seconds = 0}) => {
    const [over, setOver] = useState(false)
    const [timeString, setTimeString] = useState("")

    const startSound = () => {
        const alarmSound = new Audio('/media/alarm_sound.wav')
        alarmSound.play()
    }

    const countdown = e => {
        if (!over) {
            if (props.timeLeft.hours === 0 && props.timeLeft.minutes === 0 && props.timeLeft.seconds === 0) {
                setOver(true)
                startSound()
            } else if (props.timeLeft.seconds === 0 && props.timeLeft.minutes === 0) {
                props.setTimeLeft({
                    hours: props.timeLeft.hours - 1,
                    minutes: 59,
                    seconds: 59
                })
            } else if (props.timeLeft.seconds === 0) {
                props.setTimeLeft({
                    hours: props.timeLeft.hours,
                    minutes: props.timeLeft.minutes - 1,
                    seconds: 59
                })
            } else {
                props.setTimeLeft({
                    hours: props.timeLeft.hours,
                    minutes: props.timeLeft.minutes,
                    seconds: props.timeLeft.seconds - 1
                })
            }
        }
    }

    const resetTimer = () => {
        props.setTimeLeft({
            hours: 0,
            minutes: 0,
            seconds: 0
        })
        setOver(false)
    }

    useInterval(() => countdown(), 1000)

    useEffect(() => {
        let sec = props.timeLeft.seconds.toString()
        let min = props.timeLeft.minutes.toString()
        let hr = props.timeLeft.hours.toString()

        if (props.timeLeft.seconds < 10) {
            sec = "0" + props.timeLeft.seconds.toString()
        }
        if (props.timeLeft.minutes < 10) {
            min = "0" + props.timeLeft.minutes.toString()
        }
        if (props.timeLeft.hours < 10) {
            hr = "0" + props.timeLeft.hours.toString()
        }
        
        setTimeString(`${hr}:${min}:${sec}`)
    }, [props.timeLeft])

    return (
        <div className="timer">
            {timeString}
        </div>
    )
}

export default Timer