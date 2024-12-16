import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, ExternalLink } from 'lucide-react'

interface CaseStudyProps {
  id: string
  title: string
  before: {
    date: string
    rating: number
    reviews: number
    image: string
    status?: string
    price: string
    type: string
  }
  after: {
    date: string
    rating: number
    reviews: number
    image: string
    price: string
    type: string
  }
  mapsUrl: string
}

export function CaseStudy({ id, title, before, after, mapsUrl }: CaseStudyProps) {
  return (
    <div id={id} className="scroll-mt-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          {title}
        </h2>
        <Link 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800"
        >
          <MapPin className="w-5 h-5 mr-2" />
          Vedi su Google Maps
          <ExternalLink className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Scheda Prima */}
        <Card className="relative overflow-hidden bg-gray-50">
          <Badge variant="secondary" className="absolute top-4 right-4 z-10">
            Prima ({before.date})
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
                  src={before.image}
                  alt={`Screenshot di Google Maps per ${title} prima del nostro sistema`}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(Math.floor(before.rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                  ))}
                  {before.rating % 1 !== 0 && (
                    <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400 opacity-50" />
                  )}
                </div>
                <span className="text-xl font-semibold">{before.rating}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span className="text-base">{before.reviews} recensioni</span>
                </div>
                <div className="text-base text-gray-600">{before.price} • {before.type}</div>
                {before.status && (
                  <div className={`text-base font-semibold ${before.status === 'Aperto' ? 'text-green-600' : 'text-red-600'}`}>
                    {before.status}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scheda Dopo */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-500 shadow-xl transform hover:scale-105 transition-all duration-300">
          <Badge variant="default" className="absolute top-4 right-4 z-10 bg-blue-500 text-white">
            Dopo ({after.date})
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
                  src={after.image}
                  alt={`Screenshot di Google Maps per ${title} dopo il nostro sistema`}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(Math.floor(after.rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                  ))}
                  {after.rating % 1 !== 0 && (
                    <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400 opacity-50" />
                  )}
                </div>
                <span className="text-xl font-semibold text-blue-700">{after.rating}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-700">
                  <Users className="w-5 h-5" />
                  <span className="text-base font-semibold">{after.reviews} recensioni</span>
                </div>
                <div className="text-base text-blue-600">{after.price} • {after.type}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

