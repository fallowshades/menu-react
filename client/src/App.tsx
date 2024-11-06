import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ID, Root, Menu } from './routes'

import { store } from './lib/store'
import { loader as RootLoader } from './routes/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: RootLoader(store),
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
