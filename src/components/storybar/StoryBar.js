import React, { useState } from 'react'
import ApiManager from '../../api/module'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import StoryCard from './StoryCard'

const StoryBar = props => {
    const [stories, setStories] = useState([])

    const getStories = () => {
        ApiManager.getStories()
            .then(setStories)
    }

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" onClick={getStories}>
                    My Stories
                </Accordion.Toggle>
                {stories.map(story => <StoryCard story={story} />)}
            </Card>
        </Accordion>
    )
}

export default StoryBar