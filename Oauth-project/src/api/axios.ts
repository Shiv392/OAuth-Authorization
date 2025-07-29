import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:8800',
    withCredentials : true, //allow sending and recieving cookies
    headers : {
        'Content-Type' : 'application/json'
    }
})

export default api;