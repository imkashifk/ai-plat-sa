"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    category: "Application Process",
    questions: [
      {
        question: "How do I start my application process?",
        answer: "Starting your application is easy. First, use our program finder to select your desired course and university. Then, click 'Apply Now' and follow our step-by-step guide. Our AI-powered system will help you gather all necessary documents and complete your application efficiently."
      },
      {
        question: "What documents do I need to apply?",
        answer: "Required documents typically include academic transcripts, language test scores (IELTS/TOEFL), letters of recommendation, statement of purpose, and passport. Specific requirements may vary by university and program."
      },
      {
        question: "How long does the application process take?",
        answer: "The application process usually takes 4-8 weeks, depending on the program and university. Early application is recommended to ensure the best chances of acceptance."
      }
    ]
  },
  {
    category: "Visa & Immigration",
    questions: [
      {
        question: "When should I apply for my student visa?",
        answer: "You should apply for your student visa after receiving your acceptance letter and at least 3 months before your course start date. Processing times vary by country."
      },
      {
        question: "What are the common visa requirements?",
        answer: "Common requirements include acceptance letter, financial proof, passport, visa application form, photographs, and health insurance. Requirements vary by country."
      }
    ]
  },
  {
    category: "Fees & Funding",
    questions: [
      {
        question: "Are there any scholarships available?",
        answer: "Yes, we offer access to numerous scholarships. Use our AI-powered scholarship finder to discover opportunities matching your profile and eligibility criteria."
      },
      {
        question: "How can I pay my tuition fees?",
        answer: "Tuition fees can be paid through bank transfer, credit card, or other approved payment methods. Payment plans may be available depending on the university."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Find answers to common questions about studying abroad, application process, and more.
        </p>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFaqs.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}