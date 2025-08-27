import { Clock, MapPin, Phone, Stethoscope } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AmbulatoriSection() {
  return (
    <section className="py-16" id="ambulatori">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h3 className="text-foreground mb-4 text-3xl font-bold">Ambulatori Medici</h3>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Struttura ambulatoriale completa nelle immediate vicinanze della farmacia
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="text-primary h-6 w-6" />
                  Ambulatori Medici
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-muted-foreground mt-1 h-5 w-5" />
                  <div>
                    <p className="font-medium">Indirizzo</p>
                    <p className="text-muted-foreground">
                      via Braccini 1<br />
                      50141 Firenze
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-muted-foreground mt-1 h-5 w-5" />
                  <div>
                    <p className="font-medium">Telefono</p>
                    <p className="text-muted-foreground">055 4250653</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="text-primary h-6 w-6" />
                  Orari Ambulatori
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 font-medium">Orari Visite</p>
                  <p className="text-muted-foreground">Lunedì - Venerdì: 08:30 - 19:30</p>
                </div>

                <div>
                  <p className="mb-2 font-medium">Reception</p>
                  <p className="text-muted-foreground">Lunedì - Venerdì: 09:00-12:00 / 15:30-18:30</p>
                </div>

                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-primary text-sm font-medium">
                    Per prenotazioni e informazioni contattare la reception negli orari indicati
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
