"use client"

import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { HeroSearch } from "@/components/hero-search"
import { AIFeatures } from "@/components/ai-features"
import { PopularPrograms } from "@/components/popular-programs"
import { FeaturedDestinations } from "@/components/countries/featured-destinations"
import { DisciplineGrid } from "@/components/discipline-grid"
import { ApplicationSteps } from "@/components/application-steps"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { AnimatedBackground } from "@/components/animated-background"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center py-20 lg:py-0 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Find your dream{" "}
                <span className="text-primary">study abroad</span> program
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover thousands of programs at top universities worldwide
              </p>
              <HeroSearch />
              <div className="mt-8 flex flex-wrap items-center gap-8">
                {[
                  { number: "1200+", label: "Universities" },
                  { number: "50+", label: "Countries" },
                  { number: "10k+", label: "Programs" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-3xl font-bold text-primary">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
                  alt="Students studying abroad"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg">
                <Badge variant="secondary" className="px-3 py-1">
                  <Sparkles className="w-4 h-4 mr-1" />
                  AI-Powered Matching
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <AIFeatures />

      {/* Popular Programs Section */}
      <PopularPrograms />

      {/* Countries Section */}
      <FeaturedDestinations />

      {/* Disciplines Section */}
      <DisciplineGrid />

      {/* Application Steps */}
      <ApplicationSteps />

      {/* Testimonials Section */}
      <TestimonialCarousel />
    </>
  )
}