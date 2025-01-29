"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  Brain,
  FileText,
  Calculator,
  MessageSquare,
  Sparkles,
  GraduationCap
} from "lucide-react"

const aiFeatures = [
  {
    icon: Brain,
    title: "AI Program Matcher",
    description: "Get personalized program recommendations based on your profile, interests, and academic history",
    href: "/program-matcher"
  },
  {
    icon: Calculator,
    title: "Cost Calculator",
    description: "Calculate total study costs including tuition, living expenses, and potential scholarships",
    href: "/cost-calculator"
  },
  {
    icon: FileText,
    title: "Document Assistant",
    description: "AI-powered assistance for preparing application documents and personal statements",
    href: "/document-assistant"
  },
  {
    icon: MessageSquare,
    title: "Virtual Counselor",
    description: "24/7 AI counselor to answer questions about admissions, visas, and more",
    href: "/virtual-counselor"
  },
  {
    icon: Sparkles,
    title: "Scholarship Finder",
    description: "AI-powered scholarship matching based on your eligibility and preferences",
    href: "/scholarship-finder"
  },
  {
    icon: GraduationCap,
    title: "Career Path Analyzer",
    description: "Analyze potential career outcomes and job prospects for different programs",
    href: "/career-analyzer"
  }
]

export function AIFeatures() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {aiFeatures.map((feature) => (
        <Card key={feature.title} className="p-6 hover:shadow-lg transition-all">
          <feature.icon className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground mb-4">{feature.description}</p>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => router.push(feature.href)}
          >
            Try Now
          </Button>
        </Card>
      ))}
    </div>
  )
}