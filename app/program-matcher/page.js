"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motion } from "framer-motion"
import { Brain } from "lucide-react"

export default function ProgramMatcher() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    interests: [],
    academicLevel: "",
    desiredCountry: "",
    budget: "",
    startDate: ""
  })

  const handleSubmit = async () => {
    try {
      setLoading(true)
      
      // Validate form data
      if (!formData.academicLevel || !formData.desiredCountry || !formData.budget || !formData.startDate) {
        throw new Error('Please fill in all required fields')
      }

      // Store data and navigate
      localStorage.setItem('programMatcherData', JSON.stringify(formData));
      router.push('/program-matcher/results', { scroll: false });
      
    } catch (error) {
      console.error('Error submitting form:', error)
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-12 h-12 text-primary" />
            <h1 className="text-4xl font-bold">AI Program Matcher</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Get personalized program recommendations based on your profile and preferences
          </p>
        </motion.div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Academic Level</Label>
              <Select
                value={formData.academicLevel}
                onValueChange={(value) => setFormData({ ...formData, academicLevel: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your academic level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                  <SelectItem value="master">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Desired Country</Label>
              <Select
                value={formData.desiredCountry}
                onValueChange={(value) => setFormData({ ...formData, desiredCountry: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select desired country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="germany">Germany</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Budget Range (Annual)</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => setFormData({ ...formData, budget: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-5000">$0 - $5,000</SelectItem>
                  <SelectItem value="5000-15000">$5,000 - $15,000</SelectItem>
                  <SelectItem value="15000-30000">$15,000 - $30,000</SelectItem>
                  <SelectItem value="30000+">$30,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Preferred Start Date</Label>
              <Select
                value={formData.startDate}
                onValueChange={(value) => setFormData({ ...formData, startDate: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select start date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-fall">Fall 2024</SelectItem>
                  <SelectItem value="2025-spring">Spring 2025</SelectItem>
                  <SelectItem value="2025-fall">Fall 2025</SelectItem>
                  <SelectItem value="2026-spring">Spring 2026</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="w-full" 
              size="lg"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Finding matches..." : "Find Matching Programs"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}