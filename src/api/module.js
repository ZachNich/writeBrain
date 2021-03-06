const url = "http://localhost:8000"

export default {
    updateStory(story) {
        return fetch(`${url}/stories/${story.id}`, {
            "method": 'PUT',
            "headers": {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('writeBrain_token')}`
            },
            "body": JSON.stringify(story)
        })
    },
    updateSprint(sprint) {
        return fetch(`${url}/sprints/${sprint.id}`, {
            "method": 'PUT',
            "headers": {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('writeBrain_token')}`
            },
            "body": JSON.stringify(sprint)
        })
    },
    postSprint(sprint) {
        return fetch(`${url}/sprints`, {
            "method": 'POST',
            "headers": {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('writeBrain_token')}`
            },
            "body": JSON.stringify(sprint)
        }).then(response => response.json())
    },
    postStory(story) {
        return fetch(`${url}/stories`, {
            "method": 'POST',
            "headers": {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('writeBrain_token')}`
            },
            "body": JSON.stringify(story)
        }).then(response => response.json())
    },
    login(user) {
        return fetch(`${url}/login`, {
            "method": 'POST',
            "headers": {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify(user)
        }).then(response => response.json())
    },
    register(user) {
        return fetch(`${url}/register`, {
            "method": 'POST',
            "headers": {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify(user)
        }).then(response => response.json())
    },
    getStories() {
        return fetch(`${url}/stories`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("writeBrain_token")}`
            }
        }).then(response => response.json())    
    },
    getMoods() {
        return fetch(`${url}/moods`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("writeBrain_token")}`
            }
        }).then(response => response.json())    
    },
    getSprints() {
        return fetch(`${url}/sprints`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("writeBrain_token")}`
            }
        }).then(response => response.json())    
    },
    getSprintsByStory(storyId) {
        return fetch(`${url}/sprints?story=${storyId}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("writeBrain_token")}`
            }
        })
            .then(response => response.json())    
    },
    deleteStory(story) {
        return fetch(`${url}/stories/${story.id}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token ${localStorage.getItem("writeBrain_token")}`
            }
        })
    },
    deleteSprint(sprint) {
        return fetch(`${url}/sprints/${sprint.id}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token ${localStorage.getItem("writeBrain_token")}`
            }
        })
    }
}