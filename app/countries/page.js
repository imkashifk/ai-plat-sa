"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building2, GraduationCap, MapPin, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const countries = [
  {
    id: "germany",
    name: "Germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070",
    programCount: "1200+",
    topUniversities: 45,
    avgTuition: "No/Low Tuition",
    cities: ["Berlin", "Munich", "Hamburg"],
    description: "Study in Germany with no tuition fees at public universities"
  },
  {
    id: "uk",
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070",
    programCount: "1500+",
    topUniversities: 52,
    avgTuition: "£15-25k/year",
    cities: ["London", "Manchester", "Edinburgh"],
    description: "World-class education in the heart of Europe"
  },
  {
    id: "canada",
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070",
    programCount: "980+",
    topUniversities: 38,
    avgTuition: "CAD 15-35k/year",
    cities: ["Toronto", "Vancouver", "Montreal"],
    description: "Quality education with excellent post-study work opportunities"
  }
]

export default function CountriesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.cities.some(city => city.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Study Destinations</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Explore top study destinations worldwide and find your perfect place to study abroad
        </p>
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search countries or cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCountries.map((country) => (
          <Link key={country.id} href={`/countries/${country.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src={country.image}
                  alt={`Study in ${country.name}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{country.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {country.programCount} Programs
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {country.topUniversities} Universities
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <p className="text-sm text-muted-foreground">{country.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span>{country.topUniversities} Top Universities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    <span>{country.avgTuition}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Top Cities: {country.cities.join(", ")}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}