import React from 'react'
import MenuButrons from '../components/MenuButrons'
import MenuCard from '../components/MenuCard'

import { MenuItemsResponse, MenuItemsResponseWithParams } from '@/utils/types'
import customFetch from '@/utils/customFetch'
import { type ReduxStore } from '@/lib/store'
import { redirect, useLoaderData, type LoaderFunction } from 'react-router-dom'

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({
    request,
  }: {
    request: Request
  }): Promise<MenuItemsResponseWithParams | null> => {
    const user = store.getState()
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    const url = '/tag'
    const response = null // await customFetch<MenuItemsResponse>(url)
    return null // { ...response.data, params }

    //retur
  }

const Root = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <MenuButrons />
      <MenuCard />
    </div>
  )
}

export default Root
