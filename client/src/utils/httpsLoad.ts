import { ApiResponse } from './types'

export const loader = async <T extends ApiResponse>(type = ''): Promise<T> => {
  const API_URL = '/api/v1/menu'
  // const API_URL = 'http://localhost:3000/api/menu'
  const API_KEY = 'fallow'
  try {
    console.log(`Fetching menu from ${API_URL}?type=${type}`)
    const response = await fetch(`${API_URL}${type ? `?type=${type}` : ''}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-zocom': API_KEY,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const menu = await response.json()
    return menu as T
  } catch (error) {
    console.error('Error fetching menu:', error)
    throw error
  }
}
