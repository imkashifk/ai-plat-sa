"use client"

import { useEffect, useState } from "react"
import { getCountry } from "@/lib/data/dummy-data"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Building2,
  Users,
  GraduationCap,
  Globe,
  MapPin,
  FileText,
  CheckCircle
} from "lucide-react"

export default function CountryDetails({ params }) {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const countryData = getCountry(params.id)
    setCountry(countryData)
  }, [params.id])

  if (!country) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="relative h-[400px] mb-8">
        <Image
          src={country.image}
          alt={country.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Study in {country.name}</h1>
            <p className="text-lg max-w-2xl">{country.overview}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Universities</p>
                <h3 className="text-2xl font-bold">{country.universities}</h3>
              </div>
              <div className="bg-primary/10 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Programs</p>
                <h3 className="text-2xl font-bold">{country.programs}</h3>
              </div>
              <div className="bg-primary/10 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Int'l Students</p>
                <h3 className="text-2xl font-bold">{country.students}</h3>
              </div>
              <div className="bg-primary/10 p-2 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Top Cities</p>
                <h3 className="text-2xl font-bold">{country.topCities.length}</h3>
              </div>
              <div className="bg-primary/10 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <h2 className="text-xl font-semibold mb-6">Why Study in {country.name}?</h2>
              <div className="grid gap-6">
                {country.features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary/10 p-2 h-fit rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Requirements</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Visa Requirements</h3>
                  <ul className="space-y-2">
                    {country.requirements.visa.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Language Requirements</h3>
                  <ul className="space-y-2">
                    {country.requirements.language.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Top Student Cities</h3>
              <div className="space-y-4">
                {country.topCities.map((city, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{city.name}</span>
                    </div>
                    <Badge variant="secondary">{city.programs} Programs</Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get free counselling from our experts for studying in {country.name}
              </p>
              <Button className="w-full">Book a Free Consultation</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}