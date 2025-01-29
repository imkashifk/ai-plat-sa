"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin, GraduationCap, Coins } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function HeroSearch() {
  const router = useRouter()
  const [value, setValue] = useState("")
  const [country, setCountry] = useState("")
  const [degree, setDegree] = useState("")
  const [budget, setBudget] = useState("")

  const handleSearch = (e) => {
    e?.preventDefault()
    
    const params = new URLSearchParams()
    if (value) params.append("q", value)
    if (country && country !== "all") params.append("country", country)
    if (degree && degree !== "all") params.append("degree", degree)
    if (budget && budget !== "all") params.append("budget", budget)
    
    router.push(`/search?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Input
            placeholder="What would you like to study?"
            className="h-12 text-lg pl-10"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Search className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
        </div>
        <Button 
          type="submit"
          size="lg" 
          className="w-full sm:w-auto h-12 px-8 text-lg"
        >
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger className="w-full sm:w-[180px] h-12">
            <MapPin className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Countries</SelectItem>
            <SelectItem value="germany">Germany</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="australia">Australia</SelectItem>
          </SelectContent>
        </Select>

        <Select value={degree} onValueChange={setDegree}>
          <SelectTrigger className="w-full sm:w-[180px] h-12">
            <GraduationCap className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Degree Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Degrees</SelectItem>
            <SelectItem value="bachelor">Bachelor's</SelectItem>
            <SelectItem value="master">Master's</SelectItem>
            <SelectItem value="phd">PhD</SelectItem>
          </SelectContent>
        </Select>

        <Select value={budget} onValueChange={setBudget}>
          <SelectTrigger className="w-full sm:w-[180px] h-12">
            <Coins className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Budgets</SelectItem>
            <SelectItem value="0-10000">Under $10,000</SelectItem>
            <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
            <SelectItem value="20000-30000">$20,000 - $30,000</SelectItem>
            <SelectItem value="30000+">$30,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </form>
  )
}