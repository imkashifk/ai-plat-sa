import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the origin from the request headers
  const origin = request.headers.get('origin') || ''
  
  // Define allowed origins
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://your-production-domain.com'
  ]

  // Check if the origin is allowed
  const isAllowedOrigin = allowedOrigins.includes(origin)

  // Get response
  const response = NextResponse.next()

  // Set CORS headers if origin is allowed
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  } else {
    // For security, you might want to restrict to your known domains only
    response.headers.set('Access-Control-Allow-Origin', allowedOrigins[0])
  }

  // Set other CORS headers
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Max-Age', '86400') // 24 hours

  return response
}

// Configure middleware to run only for API routes
export const config = {
  matcher: '/api/:path*'
}