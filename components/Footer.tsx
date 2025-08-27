import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-lg font-bold">Farmacia Di Castello</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm leading-relaxed">
              Dal 1932 al servizio della vostra salute. Professionalità, esperienza e tradizione per il benessere di
              tutta la famiglia.
            </p>
            <div className="flex space-x-3">
              <a className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="#">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contatti</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <div>
                  <p>055 123456</p>
                  <p>055 654321</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a className="hover:underline" href="mailto:farmaciadicastello@gmail.com">
                  farmaciadicastello@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                <div>
                  <p>Via del Castello, 123</p>
                  <p>50100 Firenze (FI)</p>
                  <p className="text-primary-foreground/60">Fax: 055 987654</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Orari di Apertura</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Lun-Ven:</span>
                <span>09:00-13:00</span>
              </div>
              <div className="flex justify-between">
                <span></span>
                <span>16:00-20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabato:</span>
                <span>09:00-13:00*</span>
              </div>
              <p className="text-primary-foreground/60 mt-3 text-xs">* escluso agosto e festività</p>
              <div className="border-primary-foreground/20 mt-3 border-t pt-3">
                <p className="text-primary-foreground/80 text-xs">Turni weekend: 800 420707</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">I Nostri Servizi</h3>
            <ul className="space-y-2 text-sm">
              <li>• Galenica</li>
              <li>• Omeopatia</li>
              <li>• Fitoterapia</li>
              <li>• Sanitari</li>
              <li>• Dermocosmetica</li>
              <li>• Prodotti per l&apos;infanzia</li>
              <li>• Servizio CUP</li>
            </ul>
          </div>
        </div>

        <div className="border-primary-foreground/20 mt-8 border-t pt-8">
          <div className="text-primary-foreground/80 flex flex-row items-center justify-between text-sm">
            <p>© 2025 Farmacia Di Castello. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
