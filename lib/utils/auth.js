// Move auth logic to dedicated utility file
export const authenticateUser = (email, password) => {
  const users = {
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

  return Object.values(users).find(u => u.email === email && u.password === password) || null
}