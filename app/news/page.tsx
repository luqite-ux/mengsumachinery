import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { listPublishedArticles } from "@/lib/articles-db"

export const revalidate = 60

export const metadata: Metadata = {
  title: "News & Updates | MEROBOT",
  description: "Latest news, product updates, and industry insights from Shanghai Mengsu Automation.",
}

function formatDate(iso: string | null): string {
  if (!iso) return ""
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch {
    return ""
  }
}

export default async function NewsListPage() {
  const articles = await listPublishedArticles(50)

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Home
          </Link>
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BB%BF-oD3L0baEE93CPlhSQWURA9OIFSCnRW.png"
              alt="MEROBOT Logo"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-primary hover:underline">
            Contact
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">News & Updates</h1>
          <p className="mt-2 text-muted-foreground">
            Latest news, product launches, and industry insights.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="rounded-lg border border-dashed py-16 text-center text-muted-foreground">
            No articles published yet. Check back soon.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link
                key={a.id}
                href={`/news/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border bg-card transition hover:-translate-y-1 hover:shadow-lg"
              >
                {a.featured_image ? (
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <Image
                      src={a.featured_image}
                      alt={a.title}
                      fill
                      className="object-cover transition group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50" />
                )}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs text-muted-foreground">{formatDate(a.published_at ?? a.created_at)}</p>
                  <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug transition group-hover:text-primary">
                    {a.title}
                  </h3>
                  {a.excerpt && (
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{a.excerpt}</p>
                  )}
                  <p className="mt-auto pt-4 text-sm font-medium text-primary">Read more →</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
