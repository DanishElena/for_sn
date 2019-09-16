import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
    headers:     {
        "Content-Type": "application/json"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?_page=${currentPage}&_limit=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getLogin() {
        return instance.get(`login`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        return instance.get(`users?id=${userId}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.put(`follow?${userId}`, {"resultCode": 0,
        "usersId": `${userId}`})
    },
    unfollow(userId) {
        return instance.put(`follow?${userId}`, {"resultCode": 1,
            "usersId": `${userId}`})
    }
    }



