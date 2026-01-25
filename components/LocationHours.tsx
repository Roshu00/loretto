"use client";

import { content } from "@/lib/content";
import Image from "next/image";

export function LocationHours() {
  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#EBE5C2] via-[#F5F1E8] to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#504B38] mb-4">
            {content.location.title}
          </h2>
          <p className="text-lg text-[#504B38]/70 max-w-3xl mx-auto">
            {content.location.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map placeholder */}
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl border border-[#EBE5C2]">
            <Image src="/map.png" alt="Map" fill className="object-cover" />
          </div>

          {/* Hours and info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#EBE5C2]">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#af8338] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#504B38] mb-2">Adresa</h3>
                  <p className="text-[#504B38]/80 leading-relaxed">
                    {content.location.fullAddress}
                  </p>
                  <p className="text-sm text-[#504B38]/70 mt-2">
                    Blizu Sepkovačkog parka
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#EBE5C2]">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#af8338] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#504B38] mb-4">Radno vreme</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-[#EBE5C2]">
                      <span className="text-[#504B38] font-medium">Ponedeljak - Petak</span>
                      <span className="text-[#504B38]/80">{content.location.hours.weekdays.split(": ")[1]}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#EBE5C2]">
                      <span className="text-[#504B38] font-medium">Subota</span>
                      <span className="text-[#504B38]/80">{content.location.hours.saturday.split(": ")[1]}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#504B38] font-medium">Nedelja</span>
                      <span className="text-[#504B38]/80">{content.location.hours.sunday.split(": ")[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="bg-gradient-to-br from-[#FFF9ED] to-[#EBE5C2] rounded-xl p-6 border border-[#af8338]/20">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[#af8338]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <p className="text-[#504B38] font-medium">
                  Parking prostor dostupan za goste
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
