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
