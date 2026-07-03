import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { getArticleBySlug, getArticleSummariesByIds, getRecentArticleSlugs } from "@/lib/articles-db"

export const revalidate = 60
export const dynamicParams = true

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getRecentArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return { title: "Not Found" }
  return {
    title: article.seo_title || article.title,
    description: article.seo_description || article.excerpt || undefined,
    keywords: article.seo_keywords || undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt || undefined,
      images: article.featured_image ? [article.featured_image] : undefined,
      type: "article",
      publishedTime: article.published_at ?? undefined,
    },
  }
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

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) notFound()

  const related =
    article.related_article_ids.length > 0
      ? await getArticleSummariesByIds(article.related_article_ids)
      : []

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/news" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to News
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

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="mb-8">
          <p className="text-sm text-muted-foreground">{formatDate(article.published_at ?? article.created_at)}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{article.title}</h1>
          {article.excerpt && (
            <p className="mt-4 text-lg text-muted-foreground">{article.excerpt}</p>
          )}
        </header>

        {article.featured_image && (
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-lg bg-muted">
            <Image
              src={article.featured_image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="max-w-none text-base leading-relaxed text-foreground [&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1 [&_a]:text-primary [&_a]:underline [&_img]:my-4 [&_img]:rounded-lg [&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary/40 [&_blockquote]:pl-4 [&_blockquote]:italic"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {related.length > 0 && (
          <section className="mt-16 border-t border-border pt-10" aria-labelledby="related-articles-heading">
            <h2 id="related-articles-heading" className="text-xl font-semibold tracking-tight mb-6">
              Related articles
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/news/${r.slug}`}
                    className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
                  >
                    {r.featured_image ? (
                      <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-md bg-muted">
                        <Image
                          src={r.featured_image}
                          alt=""
                          fill
                          className="object-cover transition-transform group-hover:scale-[1.02]"
                        />
                      </div>
                    ) : null}
                    <p className="text-xs text-muted-foreground mb-1">{formatDate(r.published_at ?? r.created_at)}</p>
                    <p className="font-medium text-foreground group-hover:text-primary line-clamp-2">{r.title}</p>
                    {r.excerpt ? (
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-12 border-t pt-6">
          <Link href="/news" className="text-sm font-medium text-primary hover:underline">
            ← Back to all news
          </Link>
        </footer>
      </article>
    </div>
  )
}
