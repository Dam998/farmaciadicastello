import { AmbulatoriSection } from '@/components/sections/ambulatori-section'
import { ContactSection } from '@/components/sections/contact-section'
import { HeroSection } from '@/components/sections/hero-section'
import { PhotoGallery } from '@/components/sections/photo-gallery'
import { ProductsSection } from '@/components/sections/products-section'
import { ServicesSection } from '@/components/sections/services-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PhotoGallery />
      <ProductsSection />
      <ContactSection />
      <AmbulatoriSection />
    </>
  )
}
