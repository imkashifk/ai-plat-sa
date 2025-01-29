"use client"

import { SearchFilters } from "@/components/search/search-filters"

export default function SearchLayout({ children }) {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        <aside className="hidden lg:block">
          <SearchFilters />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  )
}