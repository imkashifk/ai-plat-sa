"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { GraduationCap, Mail, Lock, Loader2 } from "lucide-react"
import { authenticateUser } from "@/lib/auth"
import { toast } from "sonner"

export default function SignInPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const user = authenticateUser(formData.email, formData.password)
    
    if (user) {
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(user))
      // Dispatch a custom event to notify navbar of auth state change
      window.dispatchEvent(new Event('auth-change'))
      
      toast.success(`Welcome back, ${user.name}`)
      router.push(`/dashboard/${user.role}`)
    } else {
      toast.error("Invalid email or password")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-2xl font-bold">StudyGlobal</span>
        </div>

        <h1 className="text-2xl font-semibold mb-2">Welcome back</h1>
        <p className="text-muted-foreground mb-6">
          Sign in to access your account
        </p>

        <div className="mb-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm font-medium mb-2">Test Accounts:</p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>Admin: admin@studyglobal.com / admin123</p>
            <p>Counsellor: counsellor@studyglobal.com / counsellor123</p>
            <p>Student: student@studyglobal.com / student123</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-9"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="pl-9"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link href="/auth/forgot-password" className="text-primary hover:underline">
            Forgot password?
          </Link>
        </div>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/auth/sign-up" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  )
}