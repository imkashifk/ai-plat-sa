"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Microscope,
  BookOpen,
  Code,
  Building,
  Briefcase,
  Stethoscope,
  Scale,
  Camera,
  Globe,
  Plane,
  Palette,
  Calculator
} from "lucide-react"
import Link from "next/link"

const disciplines = [
  { icon: Microscope, name: "Sciences", count: 1250 },
  { icon: Code, name: "Computer Science", count: 890 },
  { icon: Building, name: "Engineering", count: 1100 },
  { icon: Briefcase, name: "Business", count: 950 },
  { icon: BookOpen, name: "Humanities", count: 780 },
  { icon: Stethoscope, name: "Medicine", count: 450 },
  { icon: Scale, name: "Law", count: 320 },
  { icon: Camera, name: "Media", count: 280 },
  { icon: Globe, name: "Social Sciences", count: 670 },
  { icon: Plane, name: "Aviation", count: 150 },
  { icon: Palette, name: "Arts & Design", count: 430 },
  { icon: Calculator, name: "Mathematics", count: 560 }
]

export function DisciplineGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {disciplines.map((discipline, index) => (
        <motion.div
          key={discipline.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/disciplines/${discipline.name.toLowerCase()}`}>
            <Card className="p-4 text-center hover:bg-primary/5 transition-colors cursor-pointer">
              <discipline.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-medium mb-1">{discipline.name}</h3>
              <p className="text-sm text-muted-foreground">
                {discipline.count} Programs
              </p>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}