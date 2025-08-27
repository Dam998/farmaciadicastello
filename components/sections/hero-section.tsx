import { Heart, MapPin, Package, Phone, Stethoscope } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function HeroSection() {
  return (
    <section className="from-muted to-background bg-gradient-to-b py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-8 flex flex-col items-center">
            <h2 className="text-foreground mb-2 text-4xl font-bold text-balance md:text-5xl">Farmacia di Castello</h2>
            <p className="text-primary text-lg font-medium">La vostra farmacia di fiducia dal 1932</p>
          </div>

          <p className="text-muted-foreground mb-8 text-xl text-balance">
            La Farmacia Di Castello, condotta dalla famiglia Piemontese dal 1932, mette a vostra disposizione una
            elevata professionalità ed esperienza maturata negli anni.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="tel:055450600">
              <Button className="bg-primary hover:bg-primary/90" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Chiamaci: 055 450600
              </Button>
            </Link>
            <Link href="#dove-siamo">
              <Button size="lg" variant="outline">
                <MapPin className="mr-2 h-4 w-4" />
                Come raggiungerci
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-card/50 border-primary/20 text-center backdrop-blur-sm">
            <CardHeader>
              <div className="bg-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Heart className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Tradizione Familiare</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground text-sm">
                Oltre 90 anni di esperienza nella cura e nel benessere della comunità fiorentina.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 text-center backdrop-blur-sm">
            <CardHeader>
              <div className="bg-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Stethoscope className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Professionalità</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground text-sm">
                Staff altamente qualificato pronto ad offrirvi consulenza approfondita su ogni prodotto.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 text-center backdrop-blur-sm">
            <CardHeader>
              <div className="bg-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Package className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Vasto Assortimento</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground text-sm">
                Medicinali, prodotti omeopatici, fitoterapici e articoli sanitari sempre aggiornati.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
