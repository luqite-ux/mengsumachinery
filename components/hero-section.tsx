"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCounter } from "@/hooks/use-counter"

function AnimatedStat({ 
  value, 
  unit, 
  label, 
  delay,
  isVisible 
}: { 
  value: string
  unit: string
  label: string
  delay: number
  isVisible: boolean
}) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0
  const hasRange = value.includes('-')
  const count = useCounter({ 
    end: numericValue, 
    duration: 2000, 
    enabled: isVisible 
  })

  return (
    <div 
      className="p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border transform transition-all duration-700"
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="text-2xl lg:text-3xl font-bold text-foreground">
        {hasRange ? value : count}
        <span className="text-primary text-lg lg:text-xl ml-1">{unit}</span>
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  )
}

export function HeroSection() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src="/images/factory-front.jpg"
            alt="MEROBOT Factory"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium mb-8 border border-primary/20 transform transition-all duration-700"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateX(0)' : 'translateX(-20px)'
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Professional Automation Solutions
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance transform transition-all duration-700 delay-100"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            Precision Engineering,{" "}
            <span className="text-primary relative">
              Automated Excellence
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full transform origin-left transition-transform duration-1000 delay-500" 
                style={{ transform: contentVisible ? 'scaleX(1)' : 'scaleX(0)' }} 
              />
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed text-pretty transform transition-all duration-700 delay-200"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            Shanghai Mengsu Automation Machinery Co., Ltd - Your trusted partner for industrial automation solutions with 3000m² factory and monthly capacity of 300-400 units.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-start gap-4 transform transition-all duration-700 delay-300"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group">
              <Link href="#contact">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all">
              <Link href="#capabilities">
                View Capabilities
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: "3000", unit: "m²", label: "Factory Area" },
              { value: "300-400", unit: "units", label: "Monthly Capacity" },
              { value: "4", unit: "lines", label: "Production Lines" },
              { value: "100", unit: "%", label: "Quality Assurance" },
            ].map((stat, index) => (
              <AnimatedStat 
                key={index}
                {...stat}
                delay={index * 100}
                isVisible={statsVisible}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
