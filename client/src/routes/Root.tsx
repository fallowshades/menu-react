import MenuContainer from '@/components/MenuContainer'

import { MenuItemsResponseWithParams } from '@/utils/types'
//import customFetch from '@/utils/customFetch'
import { type ReduxStore } from '@/lib/store'
import { useLoaderData, type LoaderFunction } from 'react-router-dom'

interface ExtendedRequest extends Request {
  type?: string // You can add custom properties such as `type`
}

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({
    request,
  }: {
    request: ExtendedRequest
  }): Promise<MenuItemsResponseWithParams | null> => {
    console.log('Loader function started')
    const user = store.getState()
    console.log(user)
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    console.log('params', params)

    // const type = params.type || ''
    // Construct the URL based on the 'type'
    // const url = `/menu${type ? `?type=${type}` : ''}`
    // const API_URL = 'http://localhost:3000/api/menu'
    // const API_KEY = 'fallow'
    try {
      // Fetch the menu data using customFetch (ensure customFetch is set up with the correct base URL)
      //const response = await customFetch<MenuItemsResponse>(url)
      // const response = await fetch(`${API_URL}${type ? `?type=${type}` : ''}`, {
      //   method: 'GET',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //     'x-zocom': API_KEY,
      //   },
      // })
      // if (!response.ok) {
      //   throw new Error(`Error: ${response.statusText}`)
      // }
      // // Parse JSON data
      // const data = await response.json()
      // console.log(data)
      // // Return the response data along with the parameters to pass to the component
      // return { ...data, params }
      // return { ...response.data, params }
      return null
    } catch (error) {
      console.error('Error fetching menu:', error)
      return null // Return null or some error data
    }
  }

const Root = () => {
  const data = useLoaderData() as any
  console.log('data', data)
  return (
    <div>
      <MenuContainer />
    </div>
  )
}

export default Root
