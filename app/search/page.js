"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { SearchFilters } from "@/components/search/search-filters"
import { SearchResults } from "@/components/search/search-results"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const [results, setResults] = useState({ programs: [], countries: [], disciplines: [] })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return

      try {
        setLoading(true)
        setError(null)

        const params = new URLSearchParams()
        params.append('query', query)

        const response = await fetch(`/api/search?${params.toString()}`)
        if (!response.ok) {
          throw new Error('Failed to fetch results')
        }

        const data = await response.json()
        setResults(data)
      } catch (err) {
        console.error('Error fetching results:', err)
        setError('Failed to load search results')
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [query])

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        <aside className="hidden lg:block">
          <SearchFilters />
        </aside>
        <main>
          <SearchResults 
            query={query} 
            results={results} 
            loading={loading} 
            error={error} 
          />
        </main>
      </div>
    </div>
  )
}