import axios from "axios";
import { AuthResponse, Task } from "./types";

const api = axios.create({
    baseURL:'http://127.0.0.1:5000',
    headers:{'content-type':'application/json'}

})


export const registerUser =(user: {username: string; password: string}) => api.
post<AuthResponse>('/login', user);

export const LoginUser =(user: {username: string; password: string}) => api.
post<AuthResponse>('/login', user);

export const addTask =(task: Partial<Task>, token:string)=>api.
post<AuthResponse>('/tasks', task, {headers:{Authorization:`Bearer ${token}`}})

export const getTasks = (token: string) => api.get<Task[]>('/tasks', {headers: {Authorization:` Bearer ${token}`}})

