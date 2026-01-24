import { content } from "@/lib/content";

export function MenuPreview() {
  const menuItems = [
    {
      name: "Tradicionalna jela",
      description: "Autentična jela naše kuhinje",
      image: "food_1.webp",
    },
    {
      name: "Savremene kreacije",
      description: "Moderni pristup tradicionalnim ukusima",
      image: "food_2.webp",
    },
    {
      name: "Mljeveno meso i roštilj",
      description: "Sveže meso sa roštilja",
      image: "food_8.webp",
    },
    {
      name: "Deserti",
      description: "Slatke završnice vašeg obroka",
      image: "food_11.webp",
    },
  ];

  return (
    <section id="menu-preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF9ED] via-[#F5F1E8] to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#504B38] mb-4">
            Specijaliteti
          </h2>
          <p className="text-xl text-[#504B38]/80 max-w-2xl mx-auto mb-2">
            Neki od naših najpoznatijih jela
          </p>
          <p className="text-lg text-[#504B38]/70 mt-4 max-w-3xl mx-auto">
            Odaberite između naših tradicionalnih specijaliteta i modernih kreacija koje će zadovoljiti sve vaše čulne želje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EBE5C2]"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[2/3] overflow-hidden" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#504B38] mb-2 group-hover:text-[#af8338] transition-colors">
                  {item.name}
                </h3>
                <p className="text-[#504B38]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#504B38]/70 mb-4">
            Za kompletan meni sa cenama, pogledajte sekciju ispod ↓
          </p>
        </div>
      </div>
    </section>
  );
}
