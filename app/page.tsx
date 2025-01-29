"use client"

import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { HeroSearch } from "@/components/hero-search"
import { AIFeatures } from "@/components/ai-features"
import { PopularPrograms } from "@/components/popular-programs"
import { CountryHighlights } from "@/components/country-highlights"
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
      <section className="relative py-20 px-4 overflow-hidden hero-pattern">
        <div className="container mx-auto">
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
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold">1200+</p>
                  <p className="text-sm text-muted-foreground">Universities</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">10k+</p>
                  <p className="text-sm text-muted-foreground">Programs</p>
                </div>
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
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    <Sparkles className="w-4 h-4 mr-1" />
                    AI-Powered Matching
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Tools
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Smart Tools for Your Study Abroad Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered tools help you make informed decisions and streamline your application process
            </p>
          </div>
          <AIFeatures />
        </div>
      </section>

      {/* Popular Programs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Programs</h2>
          <PopularPrograms />
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
          <CountryHighlights />
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Discipline</h2>
          <DisciplineGrid />
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Your Application Journey</h2>
          <ApplicationSteps />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Student Success Stories</h2>
          <TestimonialCarousel />
        </div>
      </section>
    </>
  )
}