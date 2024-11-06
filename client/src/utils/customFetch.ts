import axios from 'axios'
const API_URL = 'http://localhost:3000/api/menu'
const API_KEY = 'fallow'

const customFetch = axios.create({
  // baseURL: '/api/v1',
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-zocom': API_KEY,
  },
})

export default customFetch
