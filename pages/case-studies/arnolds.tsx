import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Users, Calendar, MapPin, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react'

export default function ArnoldsCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Arnold's aumenta le recensioni del 204% in 19 mesi
          </h1>
          <p className="mt-4 text-xl text-gray-600 mb-6">
            Scopri come il nostro sistema di gestione delle recensioni ha trasformato la loro presenza su Google Maps
          </p>
          <Link 
            href="https://maps.app.goo.gl/zwaJuFkhdp4TFGoy7?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Vedi Arnold's su Google Maps
            <ExternalLink className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Banner con statistiche */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg shadow-lg p-6 mb-16">
          <h2 className="text-2xl font-bold text-center mb-4">Risultati Impressionanti</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">+0,2</p>
              <p>Aumento Rating</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">+1.429</p>
              <p>Nuove Recensioni</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">204%</p>
              <p>Crescita Recensioni</p>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">19 mesi</p>
              <p>Periodo</p>
            </div>
          </div>
        </div>

        {/* Schede Prima/Dopo */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Scheda Prima */}
          <Card className="relative overflow-hidden bg-gray-50">
            <Badge variant="secondary" className="absolute top-4 right-4 z-10">
              Prima (Maggio 2023)
            </Badge>
            <CardContent className="pt-12 pb-8">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="bg-gray-100 px-4 py-3 border-b flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-sm font-medium text-gray-600">
                      <MapPin className="w-4 h-4 text-red-500 mr-1" />
                      Screenshot Google Maps
                    </div>
                  </div>
                </div>
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2013.58.58-syIthykSXRdfM9T9NearLXgAS2hdNx.png"
                    alt="Screenshot di Google Maps per Arnold's prima del nostro sistema"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="text-3xl font-bold">Arnold's</div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400 opacity-50" />
                  </div>
                  <span className="text-2xl font-semibold">4,5</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span className="text-lg">700 recensioni</span>
                  </div>
                  <div className="text-lg text-gray-600">Fast food</div>
                  <div className="text-lg text-green-600 font-semibold">Aperto</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scheda Dopo */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-100 border-2 border-purple-500 shadow-xl transform hover:scale-105 transition-all duration-300">
            <Badge variant="default" className="absolute top-4 right-4 z-10 bg-purple-500 text-white">
              Dopo (Dicembre 2024)
            </Badge>
            <CardContent className="pt-12 pb-8">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="bg-purple-100 px-4 py-3 border-b flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-sm font-medium text-purple-600">
                      <MapPin className="w-4 h-4 text-purple-500 mr-1" />
                      Screenshot Google Maps
                    </div>
                  </div>
                </div>
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2013.59.19-iuJM3TEeP5pjaNPUw9AYZ28B46Sdrw.png"
                    alt="Screenshot di Google Maps per Arnold's dopo il nostro sistema"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="text-3xl font-bold text-purple-700">Arnold's</div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400 opacity-50" />
                  </div>
                  <span className="text-2xl font-semibold text-purple-700">4,7</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-700">
                    <Users className="w-5 h-5" />
                    <span className="text-lg font-semibold">2.129 recensioni</span>
                  </div>
                  <div className="text-lg text-purple-600">10-20 € • Hamburger</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonianza */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Cosa Dice Arnold's</h2>
          <blockquote className="text-xl italic text-center text-gray-600">
            "Il nostro obiettivo era migliorare la nostra visibilità online e aumentare il coinvolgimento dei clienti. Con questo sistema, non solo abbiamo triplicato il numero delle nostre recensioni, ma abbiamo anche visto un miglioramento significativo nel rating complessivo. È uno strumento indispensabile per qualsiasi ristorante moderno."
          </blockquote>
          <p className="mt-4 text-right text-gray-500">- Proprietario, Arnold's</p>
        </div>
      </div>

      {/* Call to Action (fixed) */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg">
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

