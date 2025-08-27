import { Activity, Heart, Leaf, Microscope, Stethoscope, TestTube } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ServicesSection() {
  return (
    <section className="py-16" id="servizi">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="text-foreground mb-4 text-3xl font-bold">I Nostri Servizi</h3>
          <p className="text-muted-foreground mx-auto text-lg text-balance">
            La Farmacia Di Castello offre una gamma completa di servizi per il vostro benessere
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <TestTube className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Laboratorio Galenico</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Preparazioni galeniche personalizzate nel nostro laboratorio interno per soddisfare esigenze specifiche.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Activity className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Misurazione Pressione</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Controllo gratuito della pressione arteriosa con apparecchiature professionali.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Stethoscope className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Prenotazioni CUP</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Servizio di prenotazione per visite ed esami presso le strutture sanitarie pubbliche.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Leaf className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Fiori di Bach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Preparazione personalizzata di rimedi floreali per il benessere emotivo e mentale.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Heart className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Cosmesi e Dermocosmesi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Consulenza specializzata per la cura della pelle e prodotti cosmetici di qualità.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Microscope className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Consulenza Specializzata</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Staff qualificato per consulenze approfondite su farmaci, integratori e prodotti sanitari.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
