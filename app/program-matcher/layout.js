"use client"

import { Suspense } from "react"

export default function ProgramMatcherLayout({ children }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-muted/30 py-12">
        <div className="container max-w-4xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-[400px] bg-muted rounded" />
          </div>
        </div>
      </div>
    }>
      {children}
    </Suspense>
  )
}