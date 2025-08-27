import Image from 'next/image'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

const images = [
  {
    alt: 'Interno della farmacia',
    src: 'https://lirp.cdn-website.com/2b381624/dms3rep/multi/opt/_DSC0044-1920w.JPG',
  },
  {
    alt: 'Scaffali con prodotti',
    src: 'https://lirp.cdn-website.com/2b381624/dms3rep/multi/opt/_DSC0041-162e6abd-1920w.JPG',
  },
  {
    alt: 'Area della farmacia',
    src: 'https://lirp.cdn-website.com/2b381624/dms3rep/multi/opt/_DSC0038-1920w.JPG',
  },
  {
    alt: 'Vista della farmacia',
    src: 'https://lirp.cdn-website.com/2b381624/dms3rep/multi/opt/IMG_2227-1920w.JPG',
  },
]

export function PhotoGallery() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="text-foreground mb-4 text-3xl font-bold">La Farmacia</h3>
        </div>

        <Carousel opts={{ align: 'start', loop: true }}>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem className="basis-[90%] md:basis-1/2 lg:basis-1/3" key={image.alt}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    height={1080}
                    src={image.src}
                    width={1920}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  )
}
