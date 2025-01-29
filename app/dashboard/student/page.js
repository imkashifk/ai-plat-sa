"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  BookOpen, 
  GraduationCap, 
  FileCheck, 
  Bell,
  Calendar,
  Clock,
  ArrowRight
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardNav } from "@/components/dashboard/nav"

export default function StudentDashboard() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      university: "Technical University of Munich",
      program: "Computer Science",
      status: "In Progress",
      progress: 65,
    },
    {
      id: 2,
      university: "University of Toronto",
      program: "Data Science",
      status: "Pending Documents",
      progress: 35,
    }
  ])

  const [upcomingTasks] = useState([
    {
      id: 1,
      title: "Submit IELTS Score",
      deadline: "2024-03-25",
      priority: "High"
    },
    {
      id: 2,
      title: "Complete Statement of Purpose",
      deadline: "2024-03-30",
      priority: "Medium"
    }
  ])

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-8">Welcome back, Alex</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Applications</p>
                  <h3 className="text-2xl font-bold">2</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Programs</p>
                  <h3 className="text-2xl font-bold">5</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Universities</p>
                  <h3 className="text-2xl font-bold">3</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Application Progress</h2>
              <div className="space-y-6">
                {applications.map((app) => (
                  <div key={app.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{app.university}</h3>
                        <p className="text-sm text-muted-foreground">{app.program}</p>
                      </div>
                      <span className="text-sm font-medium">{app.status}</span>
                    </div>
                    <Progress value={app.progress} />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Upcoming Tasks</h2>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{task.title}</p>
                        <p className="text-sm text-muted-foreground">Due {new Date(task.deadline).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}