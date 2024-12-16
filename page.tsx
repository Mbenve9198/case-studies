import '@/styles/globals.css'
import { CaseStudy } from "@/components/case-study"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

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
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2012.15.32-3DydtgqXabEpdmPFuIajCtZvYluuBh.png",
      price: "€20-30",
      type: "Restaurant"
    },
    mapsUrl: "https://maps.app.goo.gl/N875ctbiEH9kzPHM9?g_st=com.google.maps.preview.copy",
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
      rating: 4.3,
      reviews: 1108,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2012.54.48-RCcojuWMyaDN5s2CVXu6f1yCycAXtd.png",
      status: "Aperto",
      price: "€€",
      type: "Ristorante di pesce"
    },
    after: {
      date: "Dicembre 2024",
      rating: 4.5,
      reviews: 3726,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2012.55.00-6RxNjVR5morxprZPTsFYxK95yU1Umw.png",
      price: "€€",
      type: "Seafood restaurant"
    },
    mapsUrl: "https://maps.app.goo.gl/wXZ4fn3f5tVmPq9B6?g_st=com.google.maps.preview.copy",
    metrics: {
      ratingIncrease: 0.2,
      reviewsIncrease: 2618,
      growthPercentage: 236
    }
  },
  {
    id: "arnolds",
    name: "Arnold's",
    title: "Arnold's aumenta le recensioni del 204% in 19 mesi",
    before: {
      date: "Maggio 2023",
      rating: 4.5,
      reviews: 700,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2013.58.58-syIthykSXRdfM9T9NearLXgAS2hdNx.png",
      status: "Aperto",
      price: "€€",
      type: "Fast food"
    },
    after: {
      date: "Dicembre 2024",
      rating: 4.7,
      reviews: 2129,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2013.59.19-iuJM3TEeP5pjaNPUw9AYZ28B46Sdrw.png",
      price: "10-20 €",
      type: "Hamburger"
    },
    mapsUrl: "https://maps.app.goo.gl/zwaJuFkhdp4TFGoy7?g_st=com.google.maps.preview.copy",
    metrics: {
      ratingIncrease: 0.2,
      reviewsIncrease: 1429,
      growthPercentage: 204
    }
  }
]

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 500);
    return () => clearTimeout(timer);
  }, [selectedCase]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Logo */}
      <div className="bg-white pt-12 pb-24 mb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Midachat%20logo-u3pLMI5csbu2rZt0505x7W0VorbZqA.png"
              alt="Midachat Logo"
              width={150}
              height={150}
              className="h-32 w-auto"
            />
          </div>
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
      <div className="relative -mt-32 mb-12"> {/* Update 1: Reduced bottom margin */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full max-w-5xl" height="250" viewBox="0 0 1000 250" preserveAspectRatio="none">
            {/* Background gradient line */}
            <path
              d="M0,125 C250,225 750,25 1000,125"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              className="opacity-20"
            />
            {/* Animated line overlay */}
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

        <div className="relative flex justify-between max-w-4xl mx-auto px-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              className={`flex flex-col items-center ${
                index === 1 ? 'mt-32' : index === 2 ? 'mt-8' : 'mt-16'
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

      <div className="max-w-6xl mx-auto px-4 pt-4 pb-32 sm:px-6 lg:px-8"> {/* Update 2: Reduced top padding */}
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

