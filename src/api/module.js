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
    postUser(user) {
        return fetch(`${url}/users`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
    }
}