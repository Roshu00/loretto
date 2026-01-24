import { content } from "@/lib/content";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#FAF8F3] to-[#F5F1E8]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#504B38] mb-4">
            {content.about.title}
          </h2>
          <p className="text-xl text-[#504B38]/80 max-w-2xl mx-auto">
            {content.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image placeholder */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"

          >
            <Image src="/image_25.webp" alt="Loretto Restoran" fill className="object-cover" />
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg text-[#504B38]/90 leading-relaxed">
              <p>{content.about.paragraph1}</p>
              <p>{content.about.paragraph2}</p>
              <p>{content.about.paragraph3}</p>
            </div>

            {/* Location highlight */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#FFF9ED] to-[#EBE5C2] rounded-xl border-l-4 border-[#af8338] shadow-md">
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-[#af8338] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-[#504B38] mb-2">Idealna lokacija</h3>
                  <p className="text-[#504B38]/90">{content.location.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {content.about.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-[#EBE5C2] hover:shadow-lg hover:border-[#af8338] transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#af8338] to-[#504B38] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[#504B38] font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
