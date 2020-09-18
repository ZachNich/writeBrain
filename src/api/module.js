const url = "http://localhost:8000"

export default {
    postSprint(sprint) {
        return fetch(`${url}/sprints`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('writeBrain_token')}`
            },
            body: JSON.stringify(sprint)
        }).then(response => response.json())
    },
    login(user) {
        return fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
    },
    register(user) {
        return fetch(`${url}/register`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
    }
}