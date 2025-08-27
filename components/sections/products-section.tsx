import { Pill, ShoppingBag } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ProductsSection() {
  return (
    <section className="py-16" id="prodotti">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="text-foreground mb-4 text-3xl font-bold">Prodotti e Reparti</h3>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            I nostri spazi sono organizzati in reparti specifici per offrirvi il miglior servizio
          </p>
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <ShoppingBag className="text-primary h-6 w-6" />
                Reparti Specializzati
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Badge className="justify-center py-2" variant="secondary">
                  Omeopatia
                </Badge>
                <Badge className="justify-center py-2" variant="secondary">
                  Veterinaria
                </Badge>
                <Badge className="justify-center py-2" variant="secondary">
                  Dermocosmetica
                </Badge>
                <Badge className="justify-center py-2" variant="secondary">
                  Profumeria
                </Badge>
                <Badge className="justify-center py-2" variant="secondary">
                  Sanitaria
                </Badge>
                <Badge className="justify-center py-2" variant="secondary">
                  Infanzia
                </Badge>
                <Badge className="justify-center py-2" variant="secondary">
                  Alimenti Speciali
                </Badge>
                <Badge className="justify-center py-2" variant="secondary">
                  Prenotazioni CUP
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Pill className="text-primary h-6 w-6" />
                Gamma Prodotti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  Farmaci etici e da banco
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  Prodotti omeopatici e fitoterapici
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  Parafarmaci e articoli sanitari
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  Elettromedicali
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  Alimenti per diabetici e infanzia
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  Medicinali veterinari
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mx-auto max-w-6xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Marchi Trattati</CardTitle>
            <p className="text-muted-foreground">
              Collaboriamo con i migliori marchi del settore per garantirvi prodotti di qualità superiore
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-6 lg:grid-cols-8">
              <Badge className="justify-center py-2 text-xs" variant="outline">
                BIONIKE
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                RILASTIL
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                LA ROCHE POSAY
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                DEO DEFENCE
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                VEA
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                HELAN
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                VIDERMINA
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                4711
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                TRIDERM
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                SPECCHIASOL
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                SWISSE
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                SOLGAR
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                METAGENICS
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                ORAL-B
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                GUM
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                CURAPROX
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                DUREX
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                TENA
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                SCHOLL&apos;S
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                COMPEED
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                TONIMER
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                CEMON
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                BOIRON
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                BAYER
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                CLEARBLU
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                MAM
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                SAUGELLA
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                OMRON
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                3M
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                FUTURO
              </Badge>
              <Badge className="justify-center py-2 text-xs" variant="outline">
                AMUCHINA
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
