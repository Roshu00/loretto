"use client";

import { content } from "@/lib/content";
import { useState } from "react";

export function DetailedMenu() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu-detailed" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#504B38] mb-4">
            {content.menu.title}
          </h2>
          <p className="text-xl text-[#504B38]/80 max-w-2xl mx-auto mb-2">
            {content.menu.subtitle}
          </p>
          <p className="text-lg text-[#504B38]/70 max-w-3xl mx-auto">
            {content.menu.description}
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {content.menu.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-[#504B38] text-white shadow-lg"
                  : "bg-[#EBE5C2] text-[#504B38] hover:bg-[#B9B28A] hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {content.menu.categories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF8F3] rounded-xl p-6 border border-[#EBE5C2] hover:border-[#af8338] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-[#504B38] group-hover:text-[#af8338] transition-colors">
                  {item.name}
                </h3>
                <span className="text-lg font-bold text-[#af8338] ml-4 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-[#504B38]/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center p-6 bg-[#FFF9ED] rounded-xl border border-[#EBE5C2]">
          <p className="text-[#504B38]/80 italic">
            * Meni se redovno ažurira. Za najnovije informacije kontaktirajte nas.
            <br />
            ** Cene mogu varirati. Sve namirnice su sveže i lokalno nabavljene.
          </p>
        </div>
      </div>
    </section>
  );
}
