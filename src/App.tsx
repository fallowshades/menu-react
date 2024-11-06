import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ID, Root, Menu } from './routes'

import { store } from './lib/store'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: async (store) => {
      return null
    },
  },
  {
    path: '/:id',
    element: <ID />,
    loader: async (store) => {
      return null
    },
  },
  {
    path: '/menu',
    element: <Menu />,
    loader: async (store) => {
      return null
    },
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
