"use client"

// Dummy user data for testing
export const users = {
  admin: {
    email: "admin@studyglobal.com",
    password: "admin123",
    role: "admin",
    name: "Admin User"
  },
  counsellor: {
    email: "counsellor@studyglobal.com",
    password: "counsellor123",
    role: "counsellor",
    name: "Sarah Johnson"
  },
  student: {
    email: "student@studyglobal.com",
    password: "student123",
    role: "student",
    name: "Alex Thompson"
  }
}

export function authenticateUser(email, password) {
  const user = Object.values(users).find(u => u.email === email && u.password === password)
  return user || null
}