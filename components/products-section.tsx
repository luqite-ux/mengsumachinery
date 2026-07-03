"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { products, type Product } from "@/lib/products-data"

export function ProductsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  return (
    <section id="products" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 transform transition-all duration-700"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Products</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
              Automation Solutions for Every Industry
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start lg:self-auto group">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div 
          ref={ctaRef}
          className="mt-12 p-8 lg:p-10 bg-card rounded-xl border border-border text-center transform transition-all duration-700 relative overflow-hidden group"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our engineering team specializes in designing bespoke automation systems 
              tailored to your unique production requirements.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
              <Link href="#contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }: { product: Product, index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <Link
      href={`/products/${product.id}`}
      ref={ref}
      className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-500 transform block"
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
      }}
    >
      {/* Product Image */}
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full text-foreground transform transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            {product.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {product.description}
        </p>
        <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
          View Details
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </Link>
  )
}
