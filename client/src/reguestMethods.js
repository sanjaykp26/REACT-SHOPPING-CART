import axios from "axios"

const BASE_URL ="http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJfaWQiOiI2MzU2NjZmNjI5Y2EyYzZhZDI0ZGI0MmIiLCJ1c2VybmFtZSI6ImlzQWRtaW4iLCJlbWFpbCI6ImlzQWRtaW5AZ21haWwuY29tICIsInBhc3N3b3JkIjoiVTJGc2RHVmtYMS8rbkRIWkZvOW40aW8xNldIUzZCemFxcGdDa1JlTWIwaz0iLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTI0VDEwOjIwOjM4LjA5MFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTI0VDEwOjIwOjM4LjA5MFoiLCJfX3YiOjB9LCJpYXQiOjE2NjcyOTM2MjEsImV4cCI6MTY2NzU1MjgyMX0.ggCqMRbKFZUOELyGIe0x7_yt1E7p2pnkr-UAPd09EyA"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});