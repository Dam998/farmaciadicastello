'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from './ui/button'

const links = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#prodotti', label: 'Prodotti' },
  { href: '#contatti', label: 'Contatti' },
  { href: '#ambulatori', label: 'Ambulatori' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Image
            alt="Farmacia di Castello Logo"
            className="w-20"
            height={50}
            src="/farmaciadicastello.svg"
            width={71}
          />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link className="text-foreground hover:text-primary transition-colors" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} variant="link">
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-border border-t py-4 md:hidden">
            <div className="flex flex-col space-y-3">
              {links.map((link) => (
                <Link
                  className="text-foreground hover:text-primary py-2 transition-colors"
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
