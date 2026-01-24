import { content } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFF9ED] via-[#F5F1E8] to-[#EBE5C2]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#504B38] mb-4">
            {content.testimonials.title}
          </h2>
          <p className="text-xl text-[#504B38]/80 max-w-2xl mx-auto mb-2">
            {content.testimonials.subtitle}
          </p>
          <p className="text-lg text-[#504B38]/70 max-w-3xl mx-auto">
            {content.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {content.testimonials.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#EBE5C2]"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#af8338] fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-[#504B38] text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-4 border-t border-[#EBE5C2]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#af8338] to-[#504B38] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#504B38]">{review.name}</p>
                  <p className="text-sm text-[#504B38]/70">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
