"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Briefcase,
  Building2,
  GraduationCap,
  TrendingUp,
  Users
} from "lucide-react"

export default function DisciplineDetails({ params }) {
  const [discipline] = useState({
    id: "computer-science",
    name: "Computer Science",
    description: "Computer Science is at the forefront of technological innovation, offering diverse career opportunities in software development, artificial intelligence, cybersecurity, and more.",
    stats: {
      programs: 850,
      universities: 320,
      avgSalary: "$75,000",
      growth: "22%"
    },
    careers: [
      "Software Developer",
      "Data Scientist",
      "AI Engineer",
      "Systems Architect",
      "Security Analyst"
    ],
    specializations: [
      {
        name: "Artificial Intelligence",
        programs: 120
      },
      {
        name: "Cybersecurity",
        programs: 95
      },
      {
        name: "Data Science",
        programs: 150
      }
    ],
    topPrograms: [
      {
        name: "BSc Computer Science",
        university: "Technical University of Munich",
        country: "Germany",
        duration: "3 years",
        fee: "$0/year"
      },
      {
        name: "MSc Computer Science",
        university: "ETH Zurich",
        country: "Switzerland",
        duration: "2 years",
        fee: "$1,500/year"
      }
    ]
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">{discipline.name}</h1>
        <p className="text-lg text-muted-foreground">{discipline.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Programs</p>
              <h3 className="text-2xl font-bold">{discipline.stats.programs}</h3>
            </div>
            <div className="bg-primary/10 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Universities</p>
              <h3 className="text-2xl font-bold">{discipline.stats.universities}</h3>
            </div>
            <div className="bg-primary/10 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Avg. Salary</p>
              <h3 className="text-2xl font-bold">{discipline.stats.avgSalary}</h3>
            </div>
            <div className="bg-primary/10 p-2 rounded-lg">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Job Growth</p>
              <h3 className="text-2xl font-bold">{discipline.stats.growth}</h3>
            </div>
            <div className="bg-primary/10 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="programs">
            <TabsList>
              <TabsTrigger value="programs">Top Programs</TabsTrigger>
              <TabsTrigger value="careers">Careers</TabsTrigger>
              <TabsTrigger value="specializations">Specializations</TabsTrigger>
            </TabsList>

            <TabsContent value="programs" className="space-y-4">
              {discipline.topPrograms.map((program, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold mb-2">{program.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{program.university}</p>
                      <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          {program.country}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{program.fee}</Badge>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="careers">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Career Opportunities</h2>
                <div className="grid gap-4">
                  {discipline.careers.map((career, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </div>
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Popular Specializations</h3>
            <div className="space-y-4">
              {discipline.specializations.map((spec, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span>{spec.name}</span>
                  <Badge variant="secondary">{spec.programs} Programs</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Need Guidance?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get expert advice on choosing the right {discipline.name} program
            </p>
            <Button className="w-full">Talk to an Advisor</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}