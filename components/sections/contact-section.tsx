import { Clock, Facebook, Mail, MapPin, Phone, Send } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  return (
    <section className="bg-muted py-16" id="contatti">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-foreground mb-4 text-center text-3xl font-bold">Contatti e Orari</h3>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
            Siamo sempre a vostra disposizione per qualsiasi informazione o consulenza
          </p>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Contact Information and Hours */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="text-primary h-5 w-5" />
                    Orari di Apertura
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Lunedì - Venerdì</span>
                    <span className="text-muted-foreground">09:00-13:00 / 16:00-20:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Sabato</span>
                    <span className="text-muted-foreground">09:00-13:00*</span>
                  </div>
                  <div className="text-muted-foreground border-t pt-2 text-sm">*escluso mese di agosto e festività</div>
                  <div className="text-muted-foreground text-sm">
                    Sabato e domenica secondo turni stabiliti dal Comune di Firenze con orario 9:00 - 20:00
                  </div>
                  <div className="text-primary text-sm font-medium">
                    Consultare il numero verde:{' '}
                    <Link className="text-primary underline underline-offset-3" href="tel:800420707">
                      800 420707
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="text-primary h-5 w-5" />
                    Informazioni di Contatto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-muted-foreground h-5 w-5" />
                    <div>
                      <p className="font-medium">Telefono</p>
                      <Link className="text-primary underline underline-offset-3" href="tel:055450600">
                        055 450600
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-muted-foreground h-5 w-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link
                        className="text-primary underline underline-offset-3"
                        href="mailto:farmaciadicastello@gmail.com"
                      >
                        farmaciadicastello@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-muted-foreground h-5 w-5" />
                    <div>
                      <p className="font-medium">Fax</p>
                      <p className="text-muted-foreground">055 4250654</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Facebook className="text-muted-foreground h-5 w-5" />
                    <div>
                      <p className="font-medium">Social</p>
                      <Link
                        className="text-primary underline underline-offset-3"
                        href="https://www.facebook.com/profile.php?id=100064049947275"
                      >
                        Seguici su Facebook
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="text-primary h-5 w-5" />
                  Scrivici
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome *</Label>
                      <Input id="nome" placeholder="Il tuo nome" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cognome">Cognome *</Label>
                      <Input id="cognome" placeholder="Il tuo cognome" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" placeholder="la-tua-email@esempio.com" required type="email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Telefono</Label>
                    <Input id="telefono" placeholder="Il tuo numero di telefono" type="tel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="messaggio">Messaggio *</Label>
                    <Textarea
                      className="min-h-[120px]"
                      id="messaggio"
                      placeholder="Scrivi qui il tuo messaggio..."
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="privacy" required />
                    <Label className="text-muted-foreground text-sm leading-relaxed" htmlFor="privacy">
                      Acconsento al trattamento dei miei dati personali secondo l&apos;informativa sulla privacy *
                    </Label>
                  </div>

                  <Button className="w-full" type="submit">
                    <Send className="mr-2 h-4 w-4" />
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2" id="dove-siamo">
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="grid grid-rows-[auto_1fr] gap-6">
                    <div className="flex items-center gap-2 font-semibold">
                      <MapPin className="text-primary h-5 w-5" />
                      Dove Siamo
                    </div>

                    <div className="flex flex-col justify-between gap-4">
                      <div>
                        <p className="mb-2 font-medium">Farmacia di Castello</p>
                        <p className="text-muted-foreground">
                          235, via Giuliani
                          <br />
                          50141 Firenze (FI)
                        </p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <p className="text-muted-foreground text-sm">
                          La farmacia ha un accesso comodo, che passa attraverso il giardino attrezzato con giochi per i
                          bambini e panchine nel verde. Gli ambulatori medici sono vicini e facilmente raggiungibili.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted flex h-80 w-full items-center justify-center rounded-lg">
                    <iframe
                      allowFullScreen
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.8234567890123!2d11.2345678!3d43.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ1JzU1LjYiTiAxMcKwMTQnMDQuNCJF!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
                      style={{ border: 0, borderRadius: '0.5rem' }}
                      title="Mappa Farmacia di Castello"
                      width="100%"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          {/* <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Come Raggiungerci</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted flex h-96 w-full items-center justify-center rounded-lg">
                  <iframe
                    allowFullScreen
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.8234567890123!2d11.2345678!3d43.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ1JzU1LjYiTiAxMcKwMTQnMDQuNCJF!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    title="Mappa Farmacia di Castello"
                    width="100%"
                  />
                </div>
                <p className="text-muted-foreground mt-4 text-center text-sm">235, via Giuliani - 50141 Firenze (FI)</p>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  )
}
