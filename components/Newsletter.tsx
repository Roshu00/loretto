"use client";

import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Hvala vam na prijavi! Email: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#504B38] via-[#3d3829] to-[#2C2720] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#af8338] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B9B28A] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content.newsletter.title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-2">
            {content.newsletter.subtitle}
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {content.newsletter.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.newsletter.placeholder}
              required
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#af8338] focus:border-transparent"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-[#af8338] hover:bg-[#9a7229] text-white border-0 whitespace-nowrap"
            >
              {content.newsletter.buttonText}
            </Button>
          </div>
        </form>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: "🎉", text: "Specijalne ponude" },
            { icon: "📅", text: "Novi događaji" },
            { icon: "🍽️", text: "Sezonski meni" },
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <p className="text-white/90 font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
