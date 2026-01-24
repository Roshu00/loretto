import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Events() {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAF8F3] via-[#F5F1E8] to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#504B38]">
              {content.events.title}
            </h2>
            <p className="text-xl text-[#504B38]/80 font-medium">
              {content.events.subtitle}
            </p>
            <div className="space-y-4 text-lg text-[#504B38]/90 leading-relaxed">
              <p>{content.events.description}</p>
              <div className="p-4 bg-[#EBE5C2] rounded-lg border-l-4 border-[#af8338]">
                <p className="font-bold text-[#504B38] mb-2">{content.events.capacity}</p>
              </div>
              <p>{content.events.details}</p>
            </div>

            <div className="pt-4">
              <Button size="lg">
                Kontaktirajte nas za rezervaciju
              </Button>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2" style={{ backgroundImage: `url(/image_36.webp)`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
            <div className="absolute inset-0 from-[#B9B28A] to-[#504B38] flex items-center justify-center">
              <div className="text-center text-[#F8F3D9] p-8"></div>
            </div>
          </div>
        </div>

        {/* Services list */}
        <div className="mt-12 p-8 bg-gradient-to-br from-[#FFF9ED] to-[#EBE5C2] rounded-xl border border-[#af8338]/20">
          <h3 className="text-2xl font-bold text-[#504B38] mb-6 text-center">Usluge koje nudimo</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.events.services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <div className="w-8 h-8 bg-[#af8338] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#504B38] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: "🎉", title: "Privatne proslave", desc: "Krštenja, punoletstva, porodična okupljanja" },
            { icon: "🎂", title: "Dečije proslave", desc: "Rođendani i tematske žurke za decu" },
            { icon: "🍷", title: "Korporativne proslave", desc: "Team building, godišnjice firmi, after-work eventi" },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-md border border-[#EBE5C2] hover:border-[#af8338] hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#504B38] mb-2">{feature.title}</h3>
              <p className="text-[#504B38]/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
