import axios from "axios";


/* Hotel */
export function fetchAllHotel() {
    return axios.get(`http://localhost:8080/hotel/all`);
}

/* Agent */
export function saveAgent(agent) {
    return axios.post('http://localhost:8080/agent/createagent', agent)
}

export function fetchAllAgents(url) {
    return axios.get(`http://localhost:8080/agent/${url}`);
}


/* Dharamshala */
export function saveTravel(agent) {
    return axios.post('http://localhost:8080/dharamshala/create', agent)
}

export function fetchAllDharam() {
    return axios.get(`http://localhost:8080/dharamshala/all`);
}

export function deleteAgent(id) {
    return axios.delete(`http://localhost:8080/dharamshala/${id}`);
}

/* Home Stay */
export function fetchAllHomeStay() {
    return axios.get(`http://localhost:8080/homestay/all`);
}