import axios from 'axios'
// const API_URL =
// const API_KEY =

const customFetch = axios.create({
  baseURL: '/api/v1',
  //baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-zocom': 'fallow',
  },
})

export default customFetch
