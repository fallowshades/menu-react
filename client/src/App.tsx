import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ID, Root, Menu, Error } from './routes'

import { store } from './lib/store'
import { loader as RootLoader } from './routes/Root'

// import { type ReduxStore } from '@/lib/store'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: RootLoader(store),
    errorElement: <Error />,
  },
  {
    path: '/:id',
    element: <ID />,
    // loader: async (store: ReduxStore) => {
    //   const user = store.getState()
    //   return null
    // },
  },
  {
    path: '/menu',
    element: <Menu />,
    // loader: async (store) => {
    //   const user = store.getState()
    //   return null
    // },
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
