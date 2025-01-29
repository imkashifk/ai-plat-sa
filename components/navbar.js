"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { GraduationCap, LogOut, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactBar } from "@/components/header/contact-bar"
import { MainNav } from "@/components/header/main-nav"
import { ThemeToggle } from "@/components/header/theme-toggle"
import { MegaMenu } from "@/components/mega-menu"
import { MobileNav } from "@/components/mobile-nav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

export function Navbar() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    checkAuthState()
    window.addEventListener('auth-change', checkAuthState)
    return () => window.removeEventListener('auth-change', checkAuthState)
  }, [])

  const checkAuthState = () => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const parsedUser = JSON.parse(userData)
      setIsAuthenticated(true)
      setUser(parsedUser)
    } else {
      setIsAuthenticated(false)
      setUser(null)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setIsAuthenticated(false)
    setUser(null)
    router.push('/')
  }

  const handleNavigation = (path) => {
    router.push(path)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <ContactBar />
      
      <div className="bg-background/60 backdrop-blur-lg border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <MobileNav />
              <Link 
                href="/" 
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">StudyGlobal</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-6 flex-1">
              <MegaMenu />
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleNavigation('/search')}
                className="hover:bg-primary/10"
              >
                <Search className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback>{user?.name[0]}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user?.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleNavigation(`/dashboard/${user?.role}`)}>
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button 
                    variant="ghost"
                    size="sm" 
                    onClick={() => handleNavigation('/auth/sign-in')}
                    className="hidden sm:flex hover:bg-primary/10"
                  >
                    Sign In
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => handleNavigation('/get-started')}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}