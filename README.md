#

##

##

## move to src

- templating parsers

tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### front

customFetch.ts

```ts
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
```

utils\types.ts

```ts
//http://slajs-assets.s3-website.eu-north-1.amazonaws.com/
export interface MenuItemRemote {
  id: number
  type: string
  name: string
  imgUrl: string
  description: string
  price: number
  toppings?: string[] // Optional property
}

export type QueryParams = {
  idWithCategory?: string
}

export type MenuItemsResponseWithParams = MenuItemsResponse & {
  params: QueryParams
}

export interface MenuItemsResponse {
  items: MenuItemRemote[] | []
}
export interface MenuItem {
  id: number
  title: string
  category: string
  price: number
  img: string
  desc: string
}
```

App.tsx

```tsx
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
```

app.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
export default App
```

```ts
export { default as ID } from './ID.tsx'
export { default as Menu } from './Menu.tsx'
export { default as Root } from './Root.tsx'
```

Root.tsx

```tsx
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
```

store.ts

```ts
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type ReduxStore = {
  getState: () => RootState
  dispatch: AppDispatch
}
```

### back

- create package.json

```sh
npm init -y
npm install
npm run dev
```

package.json

- not "type": "module",
- cpy to access client folder bellow server

````json
{
  "name": "erik-filmon",
  "version": "1.0.0",
  "description": "```sh\r npx parcel index.html\r ```",
  "main": "index.js",
  "scripts": {
    "server": "nodemon server",
    "client": "cd ../client && npm run dev",
    "dev": "concurrently --kill-others-on-fail \" npm run server\" \" npm run client\"",
    "build": "tsc",
    "compile:watch": "tsc --watch",
    "serve": "live-server",
    "proxy": "node server.js"
  },
  "devDependencies": {
    "live-server": "^1.2.2",
    "typescript": "^5.6.3",
    "nodemon": "^3.1.4",
    "concurrently": "^6.2.1",
    "express": "^4.17.1",
    "cors": "^2.8.5",
    "http-proxy-middleware": "^2.0.1",
    "dotenv": "^10.0.0"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
````
