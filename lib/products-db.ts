import { products as fallbackProducts, type Product } from "@/lib/products-data"
import { getSupabaseClient, getTenantId } from "@/lib/supabase"

function readExtra(v: unknown): Record<string, unknown> {
  return v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : {}
}

function readStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) return []
  return v.filter((x) => typeof x === "string") as string[]
}

function rowToProduct(row: Record<string, unknown>): Product {
  const extra = readExtra(row.extra_data)
  const gallery = readStringArray(extra.gallery)
  const cover = String(row.image_url ?? "")
  const specsRaw = extra.specifications
  const specifications = Array.isArray(specsRaw)
    ? (specsRaw as Array<{ label?: string; value?: string }>).filter(
        (s) => s && typeof s.label === "string" && typeof s.value === "string"
      ) as { label: string; value: string }[]
    : []
  const features = readStringArray(extra.features)
  return {
    id: String(row.slug ?? ""),
    name: String(row.name ?? ""),
    category: String(row.category ?? ""),
    description: String(row.description ?? ""),
    fullDescription: typeof extra.fullDescription === "string" ? (extra.fullDescription as string) : undefined,
    image: cover,
    images: gallery.length > 0 ? gallery : cover ? [cover] : [],
    specifications: specifications.length > 0 ? specifications : undefined,
    features: features.length > 0 ? features : undefined,
  }
}

export async function fetchProducts(): Promise<Product[]> {
  const tenantId = getTenantId()
  const supabase = getSupabaseClient()
  if (!tenantId || !supabase) return fallbackProducts
  const { data, error } = await supabase
    .from("products")
    .select("slug, name, description, image_url, category, extra_data, sort_order")
    .eq("tenant_id", tenantId)
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
  if (error) {
    console.error("[products-db] fetchProducts:", error.message)
    return fallbackProducts
  }
  const rows = (data ?? []).map((r) => rowToProduct(r as Record<string, unknown>))
  return rows.length > 0 ? rows : fallbackProducts
}

export async function fetchProductById(id: string): Promise<Product | null> {
  const tenantId = getTenantId()
  const supabase = getSupabaseClient()
  if (!tenantId || !supabase) {
    return fallbackProducts.find((p) => p.id === id) ?? null
  }
  const { data } = await supabase
    .from("products")
    .select("slug, name, description, image_url, category, extra_data")
    .eq("tenant_id", tenantId)
    .eq("slug", id)
    .eq("is_active", true)
    .maybeSingle()
  if (data) return rowToProduct(data as Record<string, unknown>)
  return fallbackProducts.find((p) => p.id === id) ?? null
}
