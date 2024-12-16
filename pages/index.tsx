import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Storie di Successo
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Scopri come abbiamo aiutato questi ristoranti a migliorare la loro presenza su Google Maps
          </p>
        </div>

        <div className="space-y-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <CardTitle className="text-2xl">Impact Food</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">1485 nuove recensioni in 9 mesi</p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <p className="font-bold">+0,2</p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <p className="font-bold">+1.485</p>
                  <p className="text-sm text-gray-500">Recensioni</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="font-bold">+482%</p>
                  <p className="text-sm text-gray-500">Crescita</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t">
              <Link href="/case-studies/impact-food" className="w-full">
                <Button className="w-full">
                  Leggi il caso studio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
              <CardTitle className="text-2xl">Il Porto</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">Triplicato le recensioni in 16 mesi</p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <p className="font-bold">+0,2</p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <p className="font-bold">+2.618</p>
                  <p className="text-sm text-gray-500">Recensioni</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="font-bold">+236%</p>
                  <p className="text-sm text-gray-500">Crescita</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t">
              <Link href="/case-studies/il-porto" className="w-full">
                <Button className="w-full">
                  Leggi il caso studio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

