"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { 
  Globe, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  MapPin,
  Building2
} from "lucide-react"

const menuItems = [
  {
    title: "Programs",
    icon: BookOpen,
    content: {
      featured: [
        { name: "Computer Science", count: "850+ Programs" },
        { name: "Business & Management", count: "720+ Programs" },
        { name: "Engineering", count: "650+ Programs" },
        { name: "Medicine", count: "450+ Programs" }
      ],
      categories: [
        "Undergraduate Programs",
        "Master's Programs",
        "PhD Programs",
        "Professional Courses"
      ]
    }
  },
  {
    title: "Countries",
    icon: Globe,
    content: {
      regions: [
        {
          name: "Europe",
          countries: ["Germany", "UK", "France", "Spain", "Italy"]
        },
        {
          name: "North America",
          countries: ["USA", "Canada"]
        },
        {
          name: "Asia Pacific",
          countries: ["Australia", "New Zealand", "Japan", "Singapore"]
        }
      ]
    }
  },
  {
    title: "Universities",
    icon: Building2,
    content: {
      rankings: [
        "Top 100 Universities",
        "QS World Rankings",
        "Times Higher Education"
      ],
      categories: [
        "Public Universities",
        "Private Universities",
        "Technical Universities",
        "Medical Schools"
      ]
    }
  },
  {
    title: "Resources",
    icon: FileText,
    content: {
      guides: [
        "Application Process",
        "Visa Requirements",
        "Scholarships Guide",
        "Student Life"
      ],
      tools: [
        "Program Finder",
        "Cost Calculator",
        "Scholarship Search",
        "University Compare"
      ]
    }
  }
]

export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger className="bg-transparent">
              <item.icon className="w-4 h-4 mr-2" />
              {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[500px] p-6">
                {item.title === "Programs" && (
                  <div className="grid gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Popular Disciplines</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {item.content.featured.map((program) => (
                          <Link
                            key={program.name}
                            href={`/disciplines/${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group p-3 hover:bg-muted rounded-lg transition-colors"
                          >
                            <div className="font-medium group-hover:text-primary">
                              {program.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {program.count}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Program Types</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {item.content.categories.map((category) => (
                          <Link
                            key={category}
                            href={`/programs?type=${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/programs"
                        className="mt-4 text-sm text-primary hover:underline"
                      >
                        View All Programs →
                      </Link>
                    </div>
                  </div>
                )}

                {item.title === "Countries" && (
                  <div className="grid gap-6">
                    {item.content.regions.map((region) => (
                      <div key={region.name}>
                        <h3 className="font-medium mb-3">{region.name}</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {region.countries.map((country) => (
                            <Link
                              key={country}
                              href={`/countries/${country.toLowerCase()}`}
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                            >
                              <MapPin className="w-3 h-3" />
                              {country}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {item.title === "Universities" && (
                  <div className="grid gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Rankings</h3>
                      <div className="grid gap-2">
                        {item.content.rankings.map((ranking) => (
                          <Link
                            key={ranking}
                            href={`/universities/rankings/${ranking.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {ranking}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Categories</h3>
                      <div className="grid gap-2">
                        {item.content.categories.map((category) => (
                          <Link
                            key={category}
                            href={`/universities/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.title === "Resources" && (
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Guides</h3>
                      <div className="grid gap-2">
                        {item.content.guides.map((guide) => (
                          <Link
                            key={guide}
                            href={`/resources/guides/${guide.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {guide}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Tools</h3>
                      <div className="grid gap-2">
                        {item.content.tools.map((tool) => (
                          <Link
                            key={tool}
                            href={`/resources/tools/${tool.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {tool}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
