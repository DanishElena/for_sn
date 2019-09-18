import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
    headers: {"Content-Type": "application/json"}
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

    login(login, password, rememberMe=false) {
        return instance.post(`login`, {data: {login, password, rememberMe}})
            .then(response => {
            return response.data;
        });
    },
    logout() {
        return instance.delete(`login`)
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
        return instance.put(`follow?${userId}`, {
            "resultCode": 0,
            "usersId": `${userId}`
        })
    },
    unfollow(userId) {
        return instance.put(`follow?${userId}`, {
            "resultCode": 1,
            "usersId": `${userId}`
        })
    }
}


// export const profileAPI = {
//     updateStatus(status, userId) {
//         return instance.put(`users/${userId}`,  {
//             id: `${userId}`,
//                 photoUrl: "https://house-animals.ru/sites/default/files/media/user-1/trehcvetnaya-koshka-256.jpg",
//                 followed: false,
//                 fullName: "Tomas",
//                 status: `${status}`,
//                 location: {
//                 city: "Petropavl",
//                     country: "Kazakhstan"
//             }
//         })
//             .then(response => response.data)
//     }
// }
