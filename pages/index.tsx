import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { CaseStudy } from "@/components/case-study"
import { Star, MessageCircle, ArrowRight } from 'lucide-react'

const cases = [
  {
    id: "impact-food",
    name: "Impact Food",
    title: "Impact Food ottiene 1485 recensioni in 9 mesi",
    before: {
      date: "Marzo 2024",
      rating: 4.6,
      reviews: 308,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/impact1-v0jkVW79qKbkJanptlwerrITH1E1TZ.png",
      status: "Chiuso",
      price: "€20-30",
      type: "Ristorante"
    },
    after: {
      date: "Dicembre 2024",
      rating: 4.8,
      reviews: 1793,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2012.55.00-6RxNjVR5morxprZPTsFYxK95yU1Umw.png",
      price: "€20-30",
      type: "Restaurant"
    },
    mapsUrl: "https://maps.app.goo.gl/N875ctbiEH9kzPHM9",
    metrics: {
      ratingIncrease: 0.2,
      reviewsIncrease: 1485,
      growthPercentage: 482
    }
  },
  {
    id: "il-porto",
    name: "Il Porto",
    title: "Il Porto triplica le recensioni in 16 mesi",
    before: {
      date: "Agosto 2023",
      rating: 4.6,
      reviews: 1107,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/porto-before-4Hs0Ue7Hs4Hs0Ue7Hs.png",
      status: "Aperto",
      price: "€20-30",
      type: "Ristorante"
    },
    after: {
      date: "Dicembre 2024",
      rating: 4.8,
      reviews: 3725,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/porto-after-8Ks2We9Ks8Ks2We9Ks.png",
      price: "€20-30",
      type: "Ristorante"
    },
    mapsUrl: "https://maps.app.goo.gl/wXZ4fn3f5tVmPq9B6",
    metrics: {
      ratingIncrease: 0.2,
      reviewsIncrease: 2618,
      growthPercentage: 236
    }
  },
  {
    id: "arnolds",
    name: "Arnold's",
    title: "Arnold's aumenta le recensioni del 312% in 7 mesi",
    before: {
      date: "Maggio 2023",
      rating: 4.5,
      reviews: 700,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2012.54.48-RCcojuWMyaDN5s2CVXu6f1yCycAXtd.png",
      status: "Aperto",
      price: "€20-30",
      type: "Ristorante"
    },
    after: {
      date: "Dicembre 2023",
      rating: 4.7,
      reviews: 2129,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2013.59.19-iuJM3TEeP5pjaNPUw9AYZ28B46Sdrw.png",
      price: "€20-30",
      type: "Ristorante"
    },
    mapsUrl: "https://maps.app.goo.gl/wXZ4fn3f5tVmPq9B6",
    metrics: {
      ratingIncrease: 0.2,
      reviewsIncrease: 1429,
      growthPercentage: 204
    }
  }
]

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(cases[0])
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    setIsChanging(true)
    const timer = setTimeout(() => setIsChanging(false), 500)
    return () => clearTimeout(timer)
  }, [selectedCase])

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white pt-12 pb-24 mb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-[64px] leading-[1.1] font-bold tracking-tight text-gray-900 mb-6">
              Storie di Successo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Scopri come abbiamo aiutato questi ristoranti a migliorare la loro presenza su Google Maps
            </p>
          </div>
        </div>
      </div>

      {/* Curved line connector with labels */}
      <div className="relative -mt-32 mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="w-full max-w-5xl hidden sm:block" 
            height="250" 
            viewBox="0 0 1000 250" 
            preserveAspectRatio="none"
          >
            <path
              d="M0,125 C250,225 750,25 1000,125"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              className="opacity-20"
            />
            <path
              d="M0,125 C250,225 750,25 1000,125"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              strokeDasharray="2000"
              strokeDashoffset="2000"
              className="animate-drawLine"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#4834D4" />
                <stop offset="100%" stopColor="#686DE0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Case Study Buttons */}
        <div className="relative flex flex-col sm:flex-row justify-between max-w-4xl mx-auto px-4 sm:px-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              className={`flex flex-col items-center mb-8 sm:mb-0 ${
                index === 1 ? 'sm:mt-32' : index === 2 ? 'sm:mt-8' : 'sm:mt-16'
              }`}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut",
                delay: index * 0.2 
              }}
            >
              <Button
                onClick={() => setSelectedCase(caseStudy)}
                variant="outline"
                className={`
                  whitespace-nowrap px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg rounded-full 
                  transition-all duration-300 transform hover:scale-105 w-auto
                  ${selectedCase.id === caseStudy.id 
                    ? 'bg-white text-blue-600 shadow-lg border-blue-200 hover:border-blue-300' 
                    : 'bg-white hover:bg-gray-50 text-gray-600'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {caseStudy.name}
                  <span className="text-xs sm:text-sm text-gray-500">
                    +{caseStudy.metrics.reviewsIncrease}
                  </span>
                </span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Content */}
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-32 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
          >
            <CaseStudy
              id={selectedCase.id}
              title={selectedCase.title}
              before={selectedCase.before}
              after={selectedCase.after}
              mapsUrl={selectedCase.mapsUrl}
            />
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Metriche di Successo</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">+{selectedCase.metrics.ratingIncrease}</p>
                  <p className="text-sm text-gray-600">Aumento Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">+{selectedCase.metrics.reviewsIncrease}</p>
                  <p className="text-sm text-gray-600">Nuove Recensioni</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{selectedCase.metrics.growthPercentage}%</p>
                  <p className="text-sm text-gray-600">Crescita Recensioni</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Case Study Navigation Bottom */}
      <div className="relative max-w-6xl mx-auto px-4 mb-24">
        {/* Curved line connector */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="w-full max-w-5xl hidden sm:block" 
            height="250" 
            viewBox="0 0 1000 250" 
            preserveAspectRatio="none"
          >
            <path
              d="M0,125 C250,225 750,25 1000,125"
              fill="none"
              stroke="url(#bottomLineGradient)"
              strokeWidth="4"
              className="opacity-20"
            />
            <path
              d="M0,125 C250,225 750,25 1000,125"
              fill="none"
              stroke="url(#bottomLineGradient)"
              strokeWidth="4"
              strokeDasharray="2000"
              strokeDashoffset="2000"
              className="animate-drawLine"
            />
            <defs>
              <linearGradient id="bottomLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#4834D4" />
                <stop offset="100%" stopColor="#686DE0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="relative flex flex-col sm:flex-row justify-between max-w-4xl mx-auto px-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={`bottom-${caseStudy.id}`}
              className={`flex flex-col items-center mb-8 sm:mb-0 ${
                index === 1 ? 'sm:mt-32' : index === 2 ? 'sm:mt-8' : 'sm:mt-16'
              }`}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut",
                delay: index * 0.2 
              }}
            >
              <Button
                onClick={() => setSelectedCase(caseStudy)}
                variant="outline"
                className={`
                  relative px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105
                  ${selectedCase.id === caseStudy.id 
                    ? 'bg-white text-blue-600 shadow-lg border-blue-200 hover:border-blue-300' 
                    : 'bg-white hover:bg-gray-50 text-gray-600'
                  }
                `}
              >
                {caseStudy.name}
              </Button>
              <div className="mt-2 flex items-center text-sm font-medium text-gray-500">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>+{caseStudy.metrics.reviewsIncrease} recensioni</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action (fixed) */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h2 className="text-2xl font-bold">Vuoi provarlo gratis anche tu?</h2>
            <p className="text-lg">Scopri come possiamo trasformare la tua presenza online!</p>
          </div>
          <Link 
            href="https://wa.me/393342746427?text=Ciao%20sono%20interessato%20a%20provare%20il%20vostro%20servizio%20di%20raccolta%20recensioni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300">
              <MessageCircle className="w-5 h-5 mr-2" />
              Scrivici su WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

