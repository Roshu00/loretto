"use client";

import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F3D9]/95 backdrop-blur-sm border-b border-[#EBE5C2]">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo placeholder - 2 L slova */}
          <a href="#home" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Loretto Restoran" width={50} height={50} />

            <span className="text-2xl font-bold text-[#504B38]">Loretto</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#home" className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium text-sm">
              Početna
            </a>
            <a href="#about" className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium text-sm">
              O nama
            </a>
            <a href="#menu-detailed" className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium text-sm">
              Meni
            </a>
            <a href="#gallery" className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium text-sm">
              Galerija
            </a>
            <a href="#events" className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium text-sm">
              Proslave
            </a>
            <a href="#location" className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium text-sm">
              Kontakt
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#504B38]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#EBE5C2] mt-4 pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Početna
              </a>
              <a
                href="#about"
                className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                O nama
              </a>
              <a
                href="#menu-detailed"
                className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Meni
              </a>
              <a
                href="#gallery"
                className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galerija
              </a>
              <a
                href="#events"
                className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proslave
              </a>
              <a
                href="#location"
                className="text-[#504B38] hover:text-[#af8338] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
