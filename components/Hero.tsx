import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder background - zameniti sa realnom slikom */}

        <Image
          src="/bg-image.jpeg"
          alt="Loretto Restoran"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#B9B28A] via-[#504B38] to-[#2C2720] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-10">

        <div className="text-center space-y-8 py-20 lg:py-32">
          {/* Logo/Naziv */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-40 h-40 bg-white rounded-full p-8 flex items-center justify-center">
              <Image src="/logo.png" alt="Loretto Restoran" width={60} height={100} className="object-contain w-full h-full" />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-medium drop-shadow-lg max-w-3xl mx-auto">
            {content.restaurant.tagline}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            {content.restaurant.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#events">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#af8338] hover:bg-[#9a7229] text-white border-0 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Iznajmi prostor
              </Button>
            </a>
            <a href="#gallery">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Galerija
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-0"></div>
    </section>
  );
}
