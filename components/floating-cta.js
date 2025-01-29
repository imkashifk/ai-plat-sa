"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 right-4 z-50"
          >
            {isMinimized ? (
              <Button
                size="icon"
                className="h-12 w-12 rounded-full shadow-lg"
                onClick={() => setIsMinimized(false)}
              >
                <MessageSquare className="h-6 w-6" />
              </Button>
            ) : (
              <div className="bg-background border rounded-lg shadow-lg p-4 max-w-[300px]">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Need Help?</h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setIsMinimized(true)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => setShowDialog(true)}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Get Free Counselling
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Free Counselling Session</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Fill out the form below and our counsellors will get back to you shortly.
            </p>
            {/* Add form content here */}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}