"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  UserCheck,
  Building2,
  TrendingUp,
  ArrowRight,
  AlertCircle
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardNav } from "@/components/dashboard/nav"

export default function AdminDashboard() {
  const [recentActivities] = useState([
    {
      id: 1,
      action: "New University Partner Added",
      details: "University of Melbourne",
      timestamp: "2024-03-20 09:30 AM"
    },
    {
      id: 2,
      action: "Counsellor Account Approved",
      details: "Sarah Johnson",
      timestamp: "2024-03-20 10:15 AM"
    }
  ])

  const [alerts] = useState([
    {
      id: 1,
      type: "warning",
      message: "5 counsellor applications pending review",
      timestamp: "1 hour ago"
    },
    {
      id: 2,
      type: "info",
      message: "New university partnership request",
      timestamp: "2 hours ago"
    }
  ])

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Total Students</p>
                  <h3 className="text-2xl font-bold">1,234</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Active Counsellors</p>
                  <h3 className="text-2xl font-bold">45</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Partner Universities</p>
                  <h3 className="text-2xl font-bold">89</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Monthly Growth</p>
                  <h3 className="text-2xl font-bold">12%</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Activities</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{activity.action}</h3>
                      <p className="text-sm text-muted-foreground">{activity.details}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">System Alerts</h2>
                <Button variant="outline" size="sm">Clear All</Button>
              </div>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <AlertCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm text-muted-foreground">{alert.timestamp}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Action
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