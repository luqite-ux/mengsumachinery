"use client"

import Image from "next/image"
import { Factory, Cog, Users, Globe } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Factory,
    title: "3000m² Modern Facility",
    description: "State-of-the-art manufacturing facility equipped with advanced production equipment and quality control systems.",
  },
  {
    icon: Cog,
    title: "4 Production Lines",
    description: "3 standard production lines plus 1 fully customizable line for specialized automation solutions.",
  },
  {
    icon: Users,
    title: "Expert Engineering Team",
    description: "Experienced engineers dedicated to delivering innovative automation solutions tailored to your needs.",
  },
  {
    icon: Globe,
    title: "Global Export Capability",
    description: "Serving clients worldwide with reliable shipping, comprehensive documentation, and international support.",
  },
]

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S4C%E7%89%9B%E5%A4%B4%E6%9C%BA-SBcPFKdk0gWBvkDskcmUaUqsBfRnDj.jpg",
    alt: "MST3000WS-S4C Gantry Robot System",
    title: "Production Workshop",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%90%E5%93%81%E8%B4%A7%E6%9E%B6-n8QHUS6t4povuQTjtqRh9ZsxuAmQBN.jpg",
    alt: "Finished Product Storage",
    title: "Product Storage",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%B9%BF%E8%A7%92-vlzxisB5UdqJL32ys9490LneNfEf1q.jpg",
    alt: "Company Office",
    title: "Office Space",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%90%E5%93%81%E8%B4%A7%E6%9E%B6-_1-pQpDXNP9496rUVnGVC2yWUiCVJ4yXi.jpg",
    alt: "Warehouse Storage",
    title: "Inventory Management",
  },
]

export function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation()
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation()
  const { ref: highlightRef, isVisible: highlightVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className="max-w-3xl mb-16 transform transition-all duration-700"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Shanghai Mengsu Automation Machinery Co., Ltd
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We specialize in designing and manufacturing high-quality automation machinery solutions. 
            With our modern 3000m² facility and dedicated team, we deliver precision-engineered 
            equipment that meets the demanding standards of industries worldwide.
          </p>
        </div>

        {/* Factory Gallery */}
        <div ref={galleryRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/3] rounded-lg overflow-hidden transform transition-all duration-700"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: galleryVisible ? 1 : 0,
                transform: galleryVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 transform"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: featuresVisible ? 1 : 0,
                transform: featuresVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Highlights */}
        <div 
          ref={highlightRef}
          className="mt-16 p-8 lg:p-12 bg-card rounded-xl border border-border transform transition-all duration-700"
          style={{
            opacity: highlightVisible ? 1 : 0,
            transform: highlightVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose MEROBOT?
              </h3>
              <ul className="space-y-4">
                {[
                  "ISO certified quality management system",
                  "Rapid prototyping and fast delivery times",
                  "Comprehensive after-sales technical support",
                  "Competitive pricing with premium quality",
                  "Customized solutions for unique requirements",
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 transform transition-all duration-500"
                    style={{
                      transitionDelay: `${index * 100 + 300}ms`,
                      opacity: highlightVisible ? 1 : 0,
                      transform: highlightVisible ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-pulse" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden group">
              <Image
                src="/images/factory-front.png"
                alt="MEROBOT Factory Entrance"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
