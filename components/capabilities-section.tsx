"use client"

import Image from "next/image"
import { Settings, Wrench, Gauge, Package } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCounter } from "@/hooks/use-counter"

const capabilities = [
  {
    number: "01",
    icon: Settings,
    title: "Standard Production Lines",
    description: "3 fully automated production lines equipped with precision machinery for high-volume manufacturing of standard automation components.",
    specs: ["High-speed assembly", "Automated quality inspection", "Real-time monitoring"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S4C%E7%89%9B%E5%A4%B4%E6%9C%BA_1-PdJ0nD2EojZCZSx15oigKHxxF2kESL.jpg",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Customized Production Line",
    description: "1 dedicated customization line for bespoke automation solutions, capable of adapting to unique client specifications and requirements.",
    specs: ["Flexible configuration", "Rapid prototyping", "Custom tooling"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S4C%E7%89%9B%E5%A4%B4%E6%9C%BA_2-5MvceluK9GTtZgt5bRGX0VQ3sp52q6.jpg",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Quality Control System",
    description: "Comprehensive QC protocols at every production stage, ensuring each unit meets international standards before shipment.",
    specs: ["100% inspection rate", "Precision measurement", "Traceability system"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%90%E5%93%81%E8%B4%A7%E6%9E%B6_1-NPurDVWREMBD4yFJW0pedfUpoSuNwq.jpg",
  },
  {
    number: "04",
    icon: Package,
    title: "Export Packaging & Logistics",
    description: "Professional export-grade packaging and established logistics partnerships for safe and timely global delivery.",
    specs: ["Export documentation", "Secure packaging", "Global shipping"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%90%E5%93%81%E8%B4%A7%E6%9E%B6--6M1vnbBVCTjI7PKKtCsA85wsLaJk59.jpg",
  },
]

function AnimatedStatBanner({ isVisible }: { isVisible: boolean }) {
  const factoryArea = useCounter({ end: 3000, duration: 2000, enabled: isVisible })
  const productionLines = useCounter({ end: 4, duration: 1500, enabled: isVisible })
  const monthlyCapacity = useCounter({ end: 400, duration: 2000, enabled: isVisible })

  return (
    <div className="grid sm:grid-cols-3 gap-8 text-center">
      <div 
        className="transform transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <div className="text-4xl lg:text-5xl font-bold mb-2">{factoryArea}m²</div>
        <div className="text-primary-foreground/80">Factory Area</div>
      </div>
      <div 
        className="transform transition-all duration-700 delay-100"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <div className="text-4xl lg:text-5xl font-bold mb-2">{productionLines}</div>
        <div className="text-primary-foreground/80">Production Lines</div>
      </div>
      <div 
        className="transform transition-all duration-700 delay-200"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <div className="text-4xl lg:text-5xl font-bold mb-2">300-{monthlyCapacity}</div>
        <div className="text-primary-foreground/80">Monthly Capacity</div>
      </div>
    </div>
  )
}

export function CapabilitiesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: bannerRef, isVisible: bannerVisible } = useScrollAnimation()

  return (
    <section id="capabilities" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 transform transition-all duration-700"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Capabilities</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Production Excellence at Scale
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {"Our 3000m² facility houses advanced manufacturing equipment and skilled technicians delivering 300-400 units monthly with uncompromising quality."}
          </p>
        </div>

        {/* Capabilities List */}
        <div className="space-y-8">
          {capabilities.map((cap, index) => (
            <CapabilityCard key={index} cap={cap} index={index} />
          ))}
        </div>

        {/* Production Stats Banner */}
        <div 
          ref={bannerRef}
          className="mt-16 p-8 lg:p-12 bg-primary rounded-xl text-primary-foreground overflow-hidden relative"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-64 h-64 bg-white/5 rounded-full animate-pulse-slow"
                style={{
                  left: `${i * 20}%`,
                  top: `${(i % 2) * 50}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
          <div className="relative z-10">
            <AnimatedStatBanner isVisible={bannerVisible} />
          </div>
        </div>
      </div>
    </section>
  )
}

function CapabilityCard({ cap, index }: { cap: typeof capabilities[0], index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className="group relative bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 overflow-hidden transform"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
      }}
    >
      <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Image */}
        <div className="relative lg:w-2/5 aspect-video lg:aspect-auto overflow-hidden">
          <Image
            src={cap.image}
            alt={cap.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card/80 to-transparent lg:from-transparent lg:to-card/80" />
          
          {/* Number Overlay */}
          <div className="absolute top-4 left-4 lg:hidden">
            <span className="text-6xl font-bold text-white/20">{cap.number}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="text-4xl lg:text-6xl font-bold text-muted/20 group-hover:text-primary/30 transition-all duration-500 hidden lg:block transform group-hover:scale-110"
            >
              {cap.number}
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:rotate-12 transition-all duration-300">
              <cap.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
          </div>
          <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {cap.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {cap.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {cap.specs.map((spec, specIndex) => (
              <span
                key={specIndex}
                className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full transform transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                style={{
                  transitionDelay: `${specIndex * 50}ms`
                }}
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Effect Line */}
      <div 
        className="absolute bottom-0 left-0 h-1 bg-primary transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" 
        style={{ width: '100%' }}
      />
    </div>
  )
}
