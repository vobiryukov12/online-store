export interface IChildren {
  children: React.ReactNode
}

export interface IProduct {
  id: number,
  category: number,
  title: string,
  price: number,
  images: [string, string]
}
