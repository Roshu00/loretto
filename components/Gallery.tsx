import { content } from "@/lib/content";

export function Gallery() {
  const galleryImages = [36, 9, 14, 13, 1, 7, 15, 18, 21, 25, 26, 27, 28, 30, 34].map((i) => (
    {
      id: i,
      url: `/image_${i}.webp`,
    }));

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 from-[#FAF8F3] to-[#F5F1E8]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#504B38] mb-4">
            {content.gallery.title}
          </h2>
          <p className="text-xl text-[#504B38]/80 max-w-2xl mx-auto mb-2">
            {content.gallery.subtitle}
          </p>
          <p className="text-lg text-[#504B38]/70 max-w-3xl mx-auto">
            {content.gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative h-[300px] lg:h-[350px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{ backgroundImage: `url(${image.url})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
            >
              <div className="absolute inset-0 from-[#B9B28A] via-[#504B38] to-[#2C2720] flex items-center justify-center">
                <div className="text-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs opacity-75 mt-1">Slika {image.id}</p>
                </div>

              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#504B38]/70 italic">
            Zamenite placeholder slike sa fotografijama vašeg restorana, hrane i proslava
          </p>
        </div>
      </div>
    </section>
  );
}
