"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Menu,
  Globe,
  GraduationCap,
  BookOpen,
  FileText,
  Building2,
  Users,
  Newspaper,
  HelpCircle,
  MessageSquare,
  Phone
} from "lucide-react"

const mobileNavItems = [
  {
    title: "Study Destinations",
    icon: Globe,
    items: [
      { title: "Study in USA", href: "/countries/usa" },
      { title: "Study in UK", href: "/countries/uk" },
      { title: "Study in Canada", href: "/countries/canada" },
      { title: "Study in Germany", href: "/countries/germany" },
      { title: "View All Countries", href: "/countries" }
    ]
  },
  {
    title: "Programs",
    icon: GraduationCap,
    items: [
      { title: "Bachelor's Programs", href: "/programs?level=bachelor" },
      { title: "Master's Programs", href: "/programs?level=master" },
      { title: "PhD Programs", href: "/programs?level=phd" },
      { title: "Professional Courses", href: "/programs?level=professional" }
    ]
  },
  {
    title: "Universities",
    icon: Building2,
    items: [
      { title: "Top Universities", href: "/universities/top" },
      { title: "University Rankings", href: "/universities/rankings" },
      { title: "Compare Universities", href: "/universities/compare" }
    ]
  },
  {
    title: "Resources",
    icon: FileText,
    items: [
      { title: "Application Guide", href: "/resources/application-guide" },
      { title: "Visa Guide", href: "/resources/visa-guide" },
      { title: "Scholarships", href: "/scholarships" },
      { title: "Cost Calculator", href: "/resources/cost-calculator" }
    ]
  },
  {
    title: "Support",
    icon: HelpCircle,
    items: [
      { title: "Contact Us", href: "/contact" },
      { title: "FAQ", href: "/faq" },
      { title: "Book Consultation", href: "/consultation" }
    ]
  }
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (href) => {
    router.push(href)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
        <ScrollArea className="h-full">
          <div className="p-6">
            <Link 
              href="/" 
              className="flex items-center gap-2 mb-6"
              onClick={() => setOpen(false)}
            >
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">StudyGlobal</span>
            </Link>
            
            <div className="flex flex-col space-y-6">
              {mobileNavItems.map((section) => (
                <div key={section.title} className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <section.icon className="h-5 w-5" />
                    <h4 className="font-medium">{section.title}</h4>
                  </div>
                  <div className="grid gap-2 pl-7">
                    {section.items.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="grid gap-4">
                <Button className="w-full" onClick={() => handleNavigation('/contact')}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Get Free Counselling
                </Button>
                <Button variant="outline" className="w-full" onClick={() => handleNavigation('/contact')}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}