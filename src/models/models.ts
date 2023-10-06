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

export interface IProductFull {
  id: number,
  category: number,
  title: string,
  images: [string, string],
  sku: string,
  manufacturer: string,
  color: string,
  material: string,
  reason: string,
  season: string,
  heelSize: string,
  price: number,
  sizes: [
    {
      size: string,
      available: boolean
    }
  ]
}

export interface IProductCart {
  id: number, 
  number: number, 
  title: string, 
  price: number, 
  size: string, 
  counter: number
}

export interface ICategory {
  id: number,
  title: string,
}

export interface IForm {
  phone: string,
  address: string,
  agreement: boolean
}
