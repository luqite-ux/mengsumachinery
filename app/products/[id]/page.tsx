import { notFound } from "next/navigation"
import { fetchProductById } from "@/lib/products-db"
import { ProductDetailClient } from "./product-detail-client"

export const revalidate = 60
export const dynamicParams = true

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await fetchProductById(id)
  if (!product) notFound()
  return <ProductDetailClient product={product} />
}
