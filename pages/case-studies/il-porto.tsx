import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Users, Calendar, MapPin, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react'

export default function IlPortoCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Il Porto triplica le recensioni in 16 mesi
          </h1>
          <p className="mt-4 text-xl text-gray-600 mb-6">
            Scopri come il nostro sistema di gestione delle recensioni ha trasformato la loro presenza su Google Maps
          </p>
          <Link 
            href="https://maps.app.goo.gl/wXZ4fn3f5tVmPq9B6?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Vedi Il Porto su Google Maps
            <ExternalLink className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Schede Prima/Dopo */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Scheda Prima */}
          <Card className="relative overflow-hidden bg-gray-50">
            <Badge variant="secondary" className="absolute top-4 right-4 z-10">
              Prima (Agosto 2023)
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2012.54.48-RCcojuWMyaDN5s2CVXu6f1yCycAXtd.png"
                    alt="Screenshot di Google Maps per Il Porto prima del nostro sistema"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="text-3xl font-bold">Il Porto</div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400 opacity-50" />
                  </div>
                  <span className="text-2xl font-semibold">4,3</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span className="text-lg">1.108 recensioni</span>
                  </div>
                  <div className="text-lg text-gray-600">€€ • Ristorante di pesce</div>
                  <div className="text-lg text-green-600 font-semibold">Aperto</div>
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-16%20alle%2012.55.00-6RxNjVR5morxprZPTsFYxK95yU1Umw.png"
                    alt="Screenshot di Google Maps per Il Porto dopo il nostro sistema"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="text-3xl font-bold text-blue-700">Il Porto Fish Restaurant</div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400 opacity-50" />
                  </div>
                  <span className="text-2xl font-semibold text-blue-700">4,5</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-700">
                    <Users className="w-5 h-5" />
                    <span className="text-lg font-semibold">3.726 recensioni</span>
                  </div>
                  <div className="text-lg text-blue-600">€€ • Seafood restaurant</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Riepilogo dei Risultati */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Risultati Impressionanti su Google Maps in 16 Mesi</h2>
          <div className="grid sm:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold">+0,2</div>
              <div className="text-gray-600">Aumento del Punteggio</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-2xl font-bold">+2.618</div>
              <div className="text-gray-600">Nuove Recensioni</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-2xl font-bold">236%</div>
              <div className="text-gray-600">Crescita delle Recensioni</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-8 h-8 text-purple-500" />
              </div>
              <div className="text-2xl font-bold">16 mesi</div>
              <div className="text-gray-600">Periodo di Tempo</div>
            </div>
          </div>
        </div>

        {/* Testimonianza */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Cosa Dice Il Porto</h2>
          <blockquote className="text-xl italic text-center text-gray-600">
            "Il cambiamento nella nostra presenza online è stato fenomenale. In 16 mesi, abbiamo visto un aumento esponenziale delle recensioni e un miglioramento significativo del nostro punteggio. Questo ha portato a un notevole incremento di clienti, soprattutto turisti che ci trovano su Google Maps. Il sistema è intuitivo e ci ha permesso di gestire efficacemente la nostra reputazione online."
          </blockquote>
          <p className="mt-4 text-right text-gray-500">- Proprietario, Il Porto Fish Restaurant</p>
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

