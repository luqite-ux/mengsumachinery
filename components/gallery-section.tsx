"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const factoryImages = [
  {
    src: "/images/factory-front.jpg",
    alt: "Factory Entrance",
    category: "Facility",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S4C%E7%89%9B%E5%A4%B4%E6%9C%BA-SBcPFKdk0gWBvkDskcmUaUqsBfRnDj.jpg",
    alt: "MST3000WS-S4C Gantry Robot",
    category: "Equipment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S4C%E7%89%9B%E5%A4%B4%E6%9C%BA_1-PdJ0nD2EojZCZSx15oigKHxxF2kESL.jpg",
    alt: "Production Line",
    category: "Equipment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%90%E5%93%81%E8%B4%A7%E6%9E%B6-n8QHUS6t4povuQTjtqRh9ZsxuAmQBN.jpg",
    alt: "Finished Products Storage",
    category: "Warehouse",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%90%E5%93%81%E8%B4%A7%E6%9E%B6-_1-pQpDXNP9496rUVnGVC2yWUiCVJ4yXi.jpg",
    alt: "Inventory Storage",
    category: "Warehouse",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%B9%BF%E8%A7%92-vlzxisB5UdqJL32ys9490LneNfEf1q.jpg",
    alt: "Office Space",
    category: "Office",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("All")
  const [animationKey, setAnimationKey] = useState(0)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  const categories = ["All", "Facility", "Equipment", "Warehouse", "Office"]
  const filteredImages = filter === "All" 
    ? factoryImages 
    : factoryImages.filter(img => img.category === filter)

  // Trigger re-animation when filter changes
  useEffect(() => {
    setAnimationKey(prev => prev + 1)
  }, [filter])

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  
  const goToPrev = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
  }
  
  const goToNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, filteredImages.length])

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-12 transform transition-all duration-700"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Factory Tour</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Inside Our Facility
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Take a virtual tour of our 3000m² manufacturing facility and see our production capabilities firsthand.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={`transform transition-all duration-300 hover:scale-105 ${
                filter === category ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" : "hover:border-primary/50"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div key={animationKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <GalleryImage 
              key={`${image.src}-${animationKey}`}
              image={image} 
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-in fade-in duration-300"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 transition-transform hover:scale-110"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 transition-transform hover:scale-110"
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 transition-transform hover:scale-110"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div 
              className="relative w-full max-w-5xl aspect-video mx-4 animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white animate-in slide-in-from-bottom duration-300">
              <p className="text-lg font-medium">{filteredImages[selectedImage].alt}</p>
              <p className="text-sm text-white/70 mt-1">{selectedImage + 1} / {filteredImages.length}</p>
              
              {/* Thumbnail Navigation */}
              <div className="flex justify-center gap-2 mt-4">
                {filteredImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === selectedImage ? 'bg-primary w-6' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(idx); }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function GalleryImage({ 
  image, 
  index, 
  onClick 
}: { 
  image: typeof factoryImages[0]
  index: number
  onClick: () => void 
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500"
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
      }}
      onClick={onClick}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="px-4 py-2 bg-white text-foreground rounded-full text-sm font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
          View Full Size
        </span>
      </div>
      
      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-sm font-medium">{image.alt}</p>
        <p className="text-white/70 text-xs mt-0.5">{image.category}</p>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  )
}
