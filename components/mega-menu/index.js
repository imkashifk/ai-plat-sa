"use client"

import { NavigationMenu } from "@/components/ui/navigation-menu"
import { StudyDestinations } from "./study-destinations"
import { Programs } from "./programs"
import { Universities } from "./universities"
import { Resources } from "./resources"

export function MegaMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <StudyDestinations />
      <Programs />
      <Universities />
      <Resources />
    </NavigationMenu>
  )
}