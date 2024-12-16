import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Users, Calendar, MapPin, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react'

export default function ImpactFoodCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Impact Food ottiene 1485 recensioni in 9 mesi
          </h1>
          <p className="mt-4 text-xl text-gray-600 mb-6">
            Scopri come il nostro sistema di gestione delle recensioni ha trasformato la loro presenza su Google Maps
          </p>
          <Link 
            href="https://maps.app.goo.gl/N875ctbiEH9kzPHM9?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Vedi Impact Food su Google Maps
            <ExternalLink className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Banner con statistiche */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg p-6 mb-16">
          <h2 className="text-2xl font-bold text-center mb-4">Risultati Impressionanti</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">+0,2</p>
              <p>Aumento Rating</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">+1.485</p>
              <p>Nuove Recensioni</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">482%</p>
              <p>Crescita Recensioni</p>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">9 mesi</p>
              <p>Periodo</p>
            </div>
          </div>
        </div>

        {/* Schede Prima/Dopo */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Scheda Prima */}
          <Card className="relative overflow-hidden bg-gray-50">
            <Badge variant="secondary" className="absolute top-4 right-4 z-10">
              Prima (Marzo 2024)
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/impact1-v0jkVW79qKbkJanptlwerrITH1E1TZ.png"
                    alt="Screenshot di Google Maps per Impact Food prima del nostro sistema"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="text-3xl font-bold">Impact Food</div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400 opacity-50" />
                  </div>
                  <span className="text-2xl font-semibold">4,6</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span className="text-lg">308 recensioni</span>
                  </div>
                  <div className="text-lg text-gray-600">€20-30 • Ristorante</div>
                  <div className="text-lg text-red-600 font-semibold">Chiuso</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scheda Dopo */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-500 shadow-xl transform hover:scale-105 transition-all duration-300">
            <Badge variant="default" className="absolute top-4 right-4 z-10 bg-blue-500 text-white">
              Dopo (Dicembre 2024)
            </Badge>
            <CardContent className="pt-12 pb-8">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="bg-blue-100 px-4 py-3 border-b flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-sm font-medium text-blue-600">
                      <MapPin className="w-4 h-4 text-blue-500 mr-1" />
                      Screenshot Google Maps
                    </div>
                  </div>
                </div>
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2012.15.32-3DydtgqXabEpdmPFuIajCtZvYluuBh.png"
                    alt="Screenshot di Google Maps per Impact Food dopo il nostro sistema"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="text-3xl font-bold text-blue-700">Impact Food</div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-semibold text-blue-700">4,8</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-700">
                    <Users className="w-5 h-5" />
                    <span className="text-lg font-semibold">1.793 recensioni</span>
                  </div>
                  <div className="text-lg text-blue-600">€20-30 • Ristorante</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonianza */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Cosa Dice Impact Food</h2>
          <blockquote className="text-xl italic text-center text-gray-600">
            "La trasformazione della nostra presenza su Google Maps è stata straordinaria. In soli 9 mesi, abbiamo visto un significativo aumento delle recensioni positive e del punteggio complessivo. Questo si è tradotto direttamente in più clienti e un aumento dei ricavi. Il sistema è facile da usare ed è diventato parte integrante della nostra strategia di servizio clienti."
          </blockquote>
          <p className="mt-4 text-right text-gray-500">- Proprietario, Impact Food</p>
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

