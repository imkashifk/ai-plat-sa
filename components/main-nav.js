"use client"

import Link from "next/link"
import Image from "next/image"
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
  Newspaper, 
  HelpCircle,
  Building2,
  Code,
  Stethoscope,
  Palette,
  Users,
  Flask,
  Scale,
  MapPin,
  Flag,
  School
} from "lucide-react"

const menuItems = [
  {
    title: "Study Abroad",
    icon: Globe,
    content: {
      regions: [
        { name: "Europe", countries: ["UK", "Germany", "France", "Spain", "Italy"] },
        { name: "North America", countries: ["USA", "Canada"] },
        { name: "Asia", countries: ["Japan", "South Korea", "Singapore"] },
        { name: "Oceania", countries: ["Australia", "New Zealand"] }
      ],
      featured: {
        title: "Popular Destinations",
        items: [
          { name: "Study in USA", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" },
          { name: "Study in UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" }
        ]
      }
    }
  },
  {
    title: "MBBS Abroad",
    icon: Stethoscope,
    content: {
      countries: [
        "Russia",
        "Ukraine",
        "Kazakhstan",
        "Georgia",
        "Philippines"
      ],
      features: [
        "World-class medical education",
        "Affordable tuition fees",
        "Global recognition",
        "Clinical exposure"
      ]
    }
  },
  {
    title: "Aviation",
    icon: GraduationCap,
    content: {
      programs: [
        "Commercial Pilot Training",
        "Aircraft Maintenance",
        "Aviation Management",
        "Air Traffic Control"
      ],
      locations: [
        "USA",
        "Canada",
        "Australia",
        "New Zealand"
      ]
    }
  },
  {
    title: "Resources",
    icon: FileText,
    content: {
      categories: [
        {
          title: "Exams",
          items: ["IELTS", "TOEFL", "GRE", "GMAT", "SAT"]
        },
        {
          title: "Guides",
          items: ["Application Process", "Visa Guide", "Scholarships", "Student Life"]
        },
        {
          title: "Tools",
          items: ["Cost Calculator", "University Finder", "Course Matcher"]
        }
      ]
    }
  }
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger className="text-white hover:text-blue-400 bg-transparent hover:bg-white/10">
              <item.icon className="w-4 h-4 mr-2" />
              {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] p-6 grid grid-cols-12 gap-6 bg-white text-black">
                {item.title === "Study Abroad" && (
                  <>
                    <div className="col-span-4">
                      <h3 className="font-bold mb-4">Study Destinations</h3>
                      {item.content.regions.map((region) => (
                        <div key={region.name} className="mb-4">
                          <h4 className="font-medium text-sm text-gray-600 mb-2">{region.name}</h4>
                          <ul className="space-y-2">
                            {region.countries.map((country) => (
                              <li key={country}>
                                <Link href={`/study-in-${country.toLowerCase()}`} className="text-sm hover:text-blue-600">
                                  Study in {country}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="col-span-8">
                      <h3 className="font-bold mb-4">{item.content.featured.title}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {item.content.featured.items.map((featured) => (
                          <Link 
                            key={featured.name}
                            href="#"
                            className="group relative rounded-lg overflow-hidden"
                          >
                            <div className="aspect-video relative">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <img 
                                src={featured.image} 
                                alt={featured.name}
                                className="object-cover w-full h-full"
                              />
                              <span className="absolute bottom-2 left-2 text-white font-medium">
                                {featured.name}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {item.title === "MBBS Abroad" && (
                  <>
                    <div className="col-span-6">
                      <h3 className="font-bold mb-4">Top Destinations</h3>
                      <ul className="space-y-2">
                        {item.content.countries.map((country) => (
                          <li key={country}>
                            <Link href={`/mbbs-in-${country.toLowerCase()}`} className="text-sm hover:text-blue-600">
                              MBBS in {country}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-6">
                      <h3 className="font-bold mb-4">Why MBBS Abroad?</h3>
                      <ul className="space-y-2">
                        {item.content.features.map((feature) => (
                          <li key={feature} className="text-sm text-gray-600">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {item.title === "Aviation" && (
                  <>
                    <div className="col-span-6">
                      <h3 className="font-bold mb-4">Programs</h3>
                      <ul className="space-y-2">
                        {item.content.programs.map((program) => (
                          <li key={program}>
                            <Link href={`/aviation/${program.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm hover:text-blue-600">
                              {program}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-6">
                      <h3 className="font-bold mb-4">Training Locations</h3>
                      <ul className="space-y-2">
                        {item.content.locations.map((location) => (
                          <li key={location}>
                            <Link href={`/aviation/locations/${location.toLowerCase()}`} className="text-sm hover:text-blue-600">
                              {location}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {item.title === "Resources" && (
                  <>
                    {item.content.categories.map((category) => (
                      <div key={category.title} className="col-span-4">
                        <h3 className="font-bold mb-4">{category.title}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item}>
                              <Link href={`/resources/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm hover:text-blue-600">
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}