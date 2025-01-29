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
import { Calculator, DollarSign, Home, GraduationCap, Plane } from "lucide-react"

export default function CostCalculator() {
  const [calculating, setCalculating] = useState(false)
  const [formData, setFormData] = useState({
    country: "",
    program: "",
    duration: "",
    accommodation: "student_housing",
    lifestyle: "moderate",
    includeFlights: false,
    includeInsurance: false,
    scholarshipAmount: 0
  })

  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState(null)

  const calculateCosts = () => {
    const costs = {
      tuition: 0,
      living: 0,
      additional: 0,
      total: 0
    }

    // Base tuition costs per year by country
    const tuitionCosts = {
      germany: 0, // Free education
      usa: 25000,
      uk: 20000,
      canada: 18000,
      australia: 22000
    }

    // Living costs per month by country and lifestyle
    const livingCosts = {
      germany: { basic: 800, moderate: 1000, comfortable: 1500 },
      usa: { basic: 1200, moderate: 1800, comfortable: 2500 },
      uk: { basic: 1000, moderate: 1500, comfortable: 2200 },
      canada: { basic: 1000, moderate: 1500, comfortable: 2000 },
      australia: { basic: 1200, moderate: 1800, comfortable: 2400 }
    }

    // Calculate tuition
    costs.tuition = tuitionCosts[formData.country] || 0

    // Calculate living expenses
    const monthlyLiving = livingCosts[formData.country]?.[formData.lifestyle] || 0
    costs.living = monthlyLiving * 12

    // Additional costs
    if (formData.includeFlights) {
      costs.additional += 1500 // Average flight cost
    }
    if (formData.includeInsurance) {
      costs.additional += 800 // Average insurance cost per year
    }

    // Accommodation adjustments
    if (formData.accommodation === "private") {
      costs.living *= 1.5
    }

    // Subtract scholarships
    const scholarshipDeduction = parseFloat(formData.scholarshipAmount) || 0

    // Calculate total
    costs.total = costs.tuition + costs.living + costs.additional - scholarshipDeduction

    return costs
  }

  const handleCalculate = () => {
    if (!formData.country) {
      alert('Please select a destination country');
      return;
    }
    
    setCalculating(true);
    
    try {
      const calculatedCosts = calculateCosts()
      setResults(calculatedCosts)
      setShowResults(true)
    } catch (error) {
      console.error('Calculation error:', error)
      alert('Error calculating costs. Please try again.')
    } finally {
      setCalculating(false)
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
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
            <Calculator className="w-12 h-12 text-primary" />
            <h1 className="text-4xl font-bold">Cost Calculator</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Calculate your total study abroad costs including tuition, living expenses, and more
          </p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Destination Country</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
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
                <Label>Accommodation Type</Label>
                <Select
                  value={formData.accommodation}
                  onValueChange={(value) => setFormData({ ...formData, accommodation: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select accommodation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student_housing">Student Housing</SelectItem>
                    <SelectItem value="private">Private Apartment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Lifestyle</Label>
                <Select
                  value={formData.lifestyle}
                  onValueChange={(value) => setFormData({ ...formData, lifestyle: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select lifestyle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="comfortable">Comfortable</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Expected Scholarship Amount (USD)</Label>
                <Input
                  type="number"
                  placeholder="0"
                  value={formData.scholarshipAmount}
                  onChange={(e) => setFormData({ ...formData, scholarshipAmount: e.target.value })}
                />
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  id="includeFlights"
                  checked={formData.includeFlights}
                  onChange={(e) => setFormData({ ...formData, includeFlights: e.target.checked })}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="includeFlights">Include Flight Costs</Label>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  id="includeInsurance"
                  checked={formData.includeInsurance}
                  onChange={(e) => setFormData({ ...formData, includeInsurance: e.target.checked })}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="includeInsurance">Include Insurance</Label>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={handleCalculate}
                disabled={calculating || !formData.country}
              >
                {calculating ? "Calculating..." : "Calculate Costs"}
              </Button>
            </div>
          </Card>

          {showResults && results && (
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Cost Breakdown</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Annual Tuition</p>
                      <p className="text-sm text-muted-foreground">Academic fees</p>
                    </div>
                  </div>
                  <p className="font-semibold">{formatCurrency(results.tuition)}</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Living Expenses</p>
                      <p className="text-sm text-muted-foreground">Annual estimate</p>
                    </div>
                  </div>
                  <p className="font-semibold">{formatCurrency(results.living)}</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Additional Costs</p>
                      <p className="text-sm text-muted-foreground">Flights, insurance, etc.</p>
                    </div>
                  </div>
                  <p className="font-semibold">{formatCurrency(results.additional)}</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Total Annual Cost</p>
                      <p className="text-sm text-muted-foreground">After scholarships</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-primary">{formatCurrency(results.total)}</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}