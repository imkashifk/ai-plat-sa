"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Building2,
  MapPin,
  Clock,
  GraduationCap,
  FileText,
  Briefcase,
  CheckCircle
} from "lucide-react"

export default function ProgramDetails({ params }) {
  const [program, setProgram] = useState(null)

  useEffect(() => {
    const fetchProgramData = async () => {
      try {
        const response = await fetch(`/api/program/${params.id}`)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const programData = await response.json()
        setProgram(programData)
      } catch (error) {
        console.error("Failed to fetch program data:", error)
      }
    }

    fetchProgramData()
  }, [params.id])

  if (!program) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-6">
            <Image
              src={program.image}
              alt={program.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge className="mb-2">{program.degree}</Badge>
              <h1 className="text-3xl font-bold text-white mb-2">{program.name}</h1>
              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  {program.university}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {program.country}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {program.duration}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Program Overview</h2>
              <p className="text-muted-foreground">{program.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                {program.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Entry Requirements</h2>
              <ul className="space-y-3">
                {program.requirements?.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Career Prospects</h2>
              <div className="grid gap-4">
                {program.career_prospects?.map((career, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="text-center p-4 bg-primary/5 rounded-lg mb-6">
              <p className="text-sm text-muted-foreground mb-1">Tuition Fee</p>
              <p className="text-2xl font-bold text-primary">{program.tuition.amount} {program.tuition.currency}</p>
            </div>
            <Button className="w-full mb-3">Apply Now</Button>
            <Button variant="outline" className="w-full">Download Brochure</Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Key Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span className="text-sm">Degree Level</span>
                </div>
                <span className="text-sm font-medium">{program.degree}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Duration</span>
                </div>
                <span className="text-sm font-medium">{program.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Location</span>
                </div>
                <span className="text-sm font-medium">{program.country}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Program Code</h3>
            <p className="text-sm text-muted-foreground">{program.code}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
