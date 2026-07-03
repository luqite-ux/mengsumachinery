import { fetchProducts } from "@/lib/products-db"
import { ProductsPageClient } from "./products-page-client"

export const revalidate = 60

export default async function ProductsPage() {
  const products = await fetchProducts()
  return <ProductsPageClient products={products} />
}
