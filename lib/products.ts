// lib/products.ts
export type Product = {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 4999,
    image: "/products/headphones.jpg",
    category: "electronics",
    description: "High quality wireless headphones with noise cancellation."
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 8999,
    image: "/products/watch.jpg",
    category: "electronics",
    description: "Smart watch with fitness tracking and heart rate monitor."
  }
]
