import MenuButrons from '../components/MenuButrons'
import MenuCard from '../components/MenuCard'
import { useEffect, useState } from 'react'
import { loader } from '@/utils/httpsLoad'
import { MenuItemsResponse } from '@/utils/types'
const MenuContainer = () => {
  const [menuData, setMenuData] = useState<MenuItemsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Define an async function to call the loader
    const fetchMenuData = async () => {
      try {
        setLoading(true)
        const data = await loader<MenuItemsResponse>() // Call loader without type or pass a type if needed
        setMenuData(data)
        console.log(menuData)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchMenuData() // Invoke the async function
  }, []) // Empty dependency array means this runs only on component mount

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  console.log(menuData)
  return (
    <div>
      {' '}
      <MenuButrons />
      <MenuCard />
    </div>
  )
}

export default MenuContainer
