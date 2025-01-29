"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Bot, Send } from "lucide-react"

export function AIAdvisor() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    // Here we would integrate with the AI backend
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    setQuery("")
  }

  return (
    <div className="rounded-lg border bg-background p-4">
      <div className="mb-4 h-[200px] overflow-y-auto">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Bot className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm">
              Hi! I'm your AI study advisor. Ask me anything about studying abroad,
              and I'll help you find the information you need.
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          placeholder="Ask about programs, universities, visas..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-h-[60px]"
        />
        <Button type="submit" disabled={loading}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}