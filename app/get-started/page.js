"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { ChevronRight, ChevronLeft, Loader2 } from 'lucide-react'

const steps = [
  {
    id: 'personal',
    title: 'Personal Information',
    description: 'Tell us about yourself'
  },
  {
    id: 'education',
    title: 'Educational Background',
    description: 'Share your academic history'
  },
  {
    id: 'preferences',
    title: 'Study Preferences',
    description: 'What are you looking to study?'
  },
  {
    id: 'tests',
    title: 'Test Scores',
    description: 'Your standardized test results'
  },
  {
    id: 'experience',
    title: 'Work Experience',
    description: 'Tell us about your work history'
  }
]

export default function GetStartedPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    
    // Educational Background
    educationLevel: '',
    cgpa: '',
    schoolName: '',
    graduationYear: '',
    
    // Study Preferences
    studyLevel: '',
    desiredCountry: '',
    discipline: '',
    startDate: '',
    
    // Test Scores
    englishTest: '',
    englishScore: '',
    aptitudeTest: '',
    aptitudeScore: '',
    
    // Work Experience
    hasWorkExperience: '',
    yearsOfExperience: '',
    currentCompany: '',
    jobTitle: ''
  })

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    // Here we would submit the data to the backend
    await new Promise(resolve => setTimeout(resolve, 1500))
    router.push('/programs?matched=true')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="+1234567890"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Select
                value={formData.nationality}
                onValueChange={(value) => updateFormData('nationality', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in">India</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="educationLevel">Current Education Level</Label>
              <Select
                value={formData.educationLevel}
                onValueChange={(value) => updateFormData('educationLevel', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high_school">High School</SelectItem>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cgpa">CGPA/Percentage</Label>
              <Input
                id="cgpa"
                value={formData.cgpa}
                onChange={(e) => updateFormData('cgpa', e.target.value)}
                placeholder="Enter your CGPA or percentage"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="schoolName">School/University Name</Label>
              <Input
                id="schoolName"
                value={formData.schoolName}
                onChange={(e) => updateFormData('schoolName', e.target.value)}
                placeholder="Enter your institution name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="graduationYear">Graduation Year</Label>
              <Select
                value={formData.graduationYear}
                onValueChange={(value) => updateFormData('graduationYear', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select graduation year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() - 5 + i
                    return (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="studyLevel">Desired Study Level</Label>
              <Select
                value={formData.studyLevel}
                onValueChange={(value) => updateFormData('studyLevel', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select study level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="desiredCountry">Preferred Country</Label>
              <Select
                value={formData.desiredCountry}
                onValueChange={(value) => updateFormData('desiredCountry', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="discipline">Field of Study</Label>
              <Select
                value={formData.discipline}
                onValueChange={(value) => updateFormData('discipline', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select discipline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="medicine">Medicine</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="startDate">Intended Start Date</Label>
              <Select
                value={formData.startDate}
                onValueChange={(value) => updateFormData('startDate', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select start date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall_2024">Fall 2024</SelectItem>
                  <SelectItem value="spring_2025">Spring 2025</SelectItem>
                  <SelectItem value="fall_2025">Fall 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="englishTest">English Proficiency Test</Label>
              <Select
                value={formData.englishTest}
                onValueChange={(value) => updateFormData('englishTest', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select test" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ielts">IELTS</SelectItem>
                  <SelectItem value="toefl">TOEFL</SelectItem>
                  <SelectItem value="pte">PTE</SelectItem>
                  <SelectItem value="duolingo">Duolingo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="englishScore">Test Score</Label>
              <Input
                id="englishScore"
                value={formData.englishScore}
                onChange={(e) => updateFormData('englishScore', e.target.value)}
                placeholder="Enter your score"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="aptitudeTest">Aptitude Test</Label>
              <Select
                value={formData.aptitudeTest}
                onValueChange={(value) => updateFormData('aptitudeTest', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select test" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gre">GRE</SelectItem>
                  <SelectItem value="gmat">GMAT</SelectItem>
                  <SelectItem value="sat">SAT</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="aptitudeScore">Test Score</Label>
              <Input
                id="aptitudeScore"
                value={formData.aptitudeScore}
                onChange={(e) => updateFormData('aptitudeScore', e.target.value)}
                placeholder="Enter your score"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hasWorkExperience">Do you have work experience?</Label>
              <Select
                value={formData.hasWorkExperience}
                onValueChange={(value) => updateFormData('hasWorkExperience', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {formData.hasWorkExperience === 'yes' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                  <Select
                    value={formData.yearsOfExperience}
                    onValueChange={(value) => updateFormData('yearsOfExperience', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentCompany">Current/Last Company</Label>
                  <Input
                    id="currentCompany"
                    value={formData.currentCompany}
                    onChange={(e) => updateFormData('currentCompany', e.target.value)}
                    placeholder="Enter company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => updateFormData('jobTitle', e.target.value)}
                    placeholder="Enter job title"
                  />
                </div>
              </>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>{steps[currentStep].title}</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex items-center"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-1 w-12 ${
                          index < currentStep ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing
                  </>
                ) : (
                  <>
                    {currentStep === steps.length - 1 ? 'Find Programs' : 'Next'}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}