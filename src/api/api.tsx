import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "86a7e923-2a12-411a-8d2e-f316074f52d1"
    }

});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    followUsers(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}


export const profileAPI = {
    getProfile(id:string){
        return instance.get('profile/' + id)
    },
    getStatus(id:string){
        return instance.get('profile/status/' + id)
    },
    updateStatus(newStatus:string){
        return instance.put('profile/status',{status:newStatus})
    },
}

export const authAPI = {
    me(){
        return instance.get('auth/me')
    },
    loginPost(email:string,password:string,rememberMe:boolean = false){
        return instance.post<ResponseType<{userId:number}>>('auth/login',{email,password,rememberMe})
    },
    loginDelete(){
        return instance.delete<ResponseType<{}>>('auth/login')
    }
}


type ResponseType<T> = {
    resultCode: number
    messages: string[]
    data: T
}