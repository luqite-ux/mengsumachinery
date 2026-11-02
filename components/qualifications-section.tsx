"use client"

import Image from "next/image"
import { CalendarDays, ExternalLink, FileCheck2 } from "lucide-react"
import qualifications from "@/data/qualifications.json"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Qualification = (typeof qualifications)[number]

export function QualificationsSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation()

  return (
    <section id="certifications" className="bg-background py-20 lg:py-32" aria-labelledby="certifications-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className="mx-auto mb-14 max-w-3xl text-center transition-all duration-700"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(28px)",
          }}
        >
          <h2 id="certifications-heading" className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Compliance Documents
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Review the technical file and independent verification supplied for our injection molding robot range.
            Each document is available in full for transparent technical evaluation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {qualifications.map((qualification, index) => (
            <QualificationDocument key={qualification.id} qualification={qualification} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function QualificationDocument({ qualification, index }: { qualification: Qualification; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.12 })
  const expiryDate = "expiryDate" in qualification ? qualification.expiryDate : undefined
  const verificationBasis = "verificationBasis" in qualification ? qualification.verificationBasis : undefined

  return (
    <article
      ref={ref}
      className="group overflow-hidden rounded-xl border border-border bg-card transition-[transform,opacity,box-shadow,border-color] duration-700 hover:border-primary/40 hover:shadow-xl"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <a
        href={qualification.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50"
        aria-label={`Open ${qualification.title} PDF`}
      >
        <Image
          src={qualification.previewImage}
          alt={`${qualification.documentType} first page for Shanghai Mengsu injection molding robots`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.015] sm:p-7"
        />
      </a>

      <div className="flex h-full flex-col p-6 sm:p-8">
        <div className="mb-5 flex items-start gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
            <FileCheck2 className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-medium text-primary">{qualification.documentType}</p>
            <h3 className="mt-1 text-xl font-semibold leading-snug text-foreground sm:text-2xl">{qualification.title}</h3>
          </div>
        </div>

        <p className="leading-relaxed text-muted-foreground">{qualification.summary}</p>

        <dl className="mt-6 grid gap-4 border-y border-border py-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Document number</dt>
            <dd className="mt-1 break-all font-medium text-foreground">{qualification.documentNumber}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              Issue date
            </dt>
            <dd className="mt-1 font-medium text-foreground">{formatDate(qualification.issueDate)}</dd>
          </div>
          {expiryDate ? (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Expiration date</dt>
              <dd className="mt-1 font-medium text-foreground">{formatDate(expiryDate)}</dd>
            </div>
          ) : null}
        </dl>

        {verificationBasis ? (
          <p className="mt-5 rounded-lg bg-muted px-4 py-3 text-sm font-medium leading-relaxed text-foreground">
            {verificationBasis}
          </p>
        ) : null}

        <a
          href={qualification.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50 sm:w-fit"
        >
          View full PDF
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`))
}
