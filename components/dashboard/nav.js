"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  MessageSquare,
  Calendar,
  HelpCircle,
  Building2,
  Globe,
  GraduationCap
} from "lucide-react"

const adminNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard/admin",
    icon: LayoutDashboard
  },
  {
    title: "Programs",
    href: "/dashboard/admin/programs",
    icon: FileText
  },
  {
    title: "Universities",
    href: "/dashboard/admin/universities",
    icon: Building2
  },
  {
    title: "Countries",
    href: "/dashboard/admin/countries",
    icon: Globe
  },
  {
    title: "Scholarships",
    href: "/dashboard/admin/scholarships",
    icon: GraduationCap
  },
  {
    title: "Users",
    href: "/dashboard/admin/users",
    icon: Users
  },
  {
    title: "Settings",
    href: "/dashboard/admin/settings",
    icon: Settings
  }
]

const counsellorNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard/counsellor",
    icon: LayoutDashboard
  },
  {
    title: "Students",
    href: "/dashboard/counsellor/students",
    icon: Users
  },
  {
    title: "Applications",
    href: "/dashboard/counsellor/applications",
    icon: FileText
  },
  {
    title: "Messages",
    href: "/dashboard/counsellor/messages",
    icon: MessageSquare
  },
  {
    title: "Calendar",
    href: "/dashboard/counsellor/calendar",
    icon: Calendar
  },
  {
    title: "Settings",
    href: "/dashboard/counsellor/settings",
    icon: Settings
  }
]

const studentNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard/student",
    icon: LayoutDashboard
  },
  {
    title: "Applications",
    href: "/dashboard/student/applications",
    icon: FileText
  },
  {
    title: "Messages",
    href: "/dashboard/student/messages",
    icon: MessageSquare
  },
  {
    title: "Appointments",
    href: "/dashboard/student/appointments",
    icon: Calendar
  },
  {
    title: "Help Center",
    href: "/dashboard/student/help",
    icon: HelpCircle
  }
]

export function DashboardNav() {
  const pathname = usePathname()
  
  // Determine which nav items to show based on the current path
  let navItems = studentNavItems
  if (pathname.includes("/dashboard/counsellor")) {
    navItems = counsellorNavItems
  } else if (pathname.includes("/dashboard/admin")) {
    navItems = adminNavItems
  }

  return (
    <nav className="w-64 border-r min-h-[calc(100vh-4rem)] p-4">
      <div className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted transition-colors",
              pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}