import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-[#504B38] via-[#3d3829] to-[#2C2720] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Restaurant info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#af8338] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                LL
              </div>
              <span className="text-2xl font-bold">Loretto</span>
            </div>
            <p className="text-white/90 mb-4 leading-relaxed">
              {content.restaurant.tagline}
            </p>
            <p className="text-white/80 mb-4">
              {content.location.fullAddress}
            </p>
            <p className="text-white/70 text-sm italic">
              {content.contact.reservationText}
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Brze veze</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-[#af8338] transition-colors block py-1">
                  Početna
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-[#af8338] transition-colors block py-1">
                  O nama
                </a>
              </li>
              <li>
                <a href="#menu-detailed" className="text-white/80 hover:text-[#af8338] transition-colors block py-1">
                  Meni
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-[#af8338] transition-colors block py-1">
                  Galerija
                </a>
              </li>
              <li>
                <a href="#events" className="text-white/80 hover:text-[#af8338] transition-colors block py-1">
                  Proslave
                </a>
              </li>
              <li>
                <a href="#location" className="text-white/80 hover:text-[#af8338] transition-colors block py-1">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#af8338] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-white/70 text-sm mb-1">Telefon</p>
                  <a href={`tel:${content.contact.phone}`} className="text-white hover:text-[#af8338] transition-colors font-medium">
                    {content.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#af8338] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-white/70 text-sm mb-1">Email</p>
                  <a href={`mailto:${content.contact.email}`} className="text-white hover:text-[#af8338] transition-colors font-medium break-all">
                    {content.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#af8338] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-white/70 text-sm mb-1">Radno vreme</p>
                  <p className="text-white/90 text-sm">{content.location.hours.weekdays.split(": ")[1]}</p>
                  <p className="text-white/90 text-sm">{content.location.hours.saturday.split(": ")[1]}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Loretto. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
