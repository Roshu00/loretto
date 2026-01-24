# Loretto Restoran - Website

Moderan, responsive landing page za restoran Loretto u Ubu.

## Funkcionalnosti

- 🎨 Prilagođena bojna paleta (#504B38, #B9B28A, #EBE5C2, #F8F3D9, #af8338)
- 📱 Potpuno responsive dizajn
- 🎯 SEO optimizacija
- 📝 Svi tekstovi na jednom mestu (`lib/content.ts`)
- 🖼️ Placeholder slike za brzu zamenu

## Struktura

- `/lib/content.ts` - **Svi tekstualni sadržaji restorana** (OVDE MENJATE TEKST)
- `/components/` - Komponente stranice
- `/app/` - Next.js app router struktura
- `/public/` - Statički fajlovi (slike, logo)

## Izmene sadržaja

Svi tekstovi se nalaze u fajlu `/lib/content.ts`. Otvorite ovaj fajl i jednostavno zamenite tekst po potrebi.

### Kontakt informacije

U fajlu `/lib/content.ts` naći ćete sekciju `contact`:

```typescript
contact: {
  phone: "+381 XX XXX XXXX", // Zameniti sa pravim brojem
  email: "info@loretto.rs", // Zameniti sa pravim emailom
}
```

### SEO

SEO metapodaci se nalaze u `app/layout.tsx` i `lib/content.ts` (sekcija `seo`).

## Slike

Trenutno su sve slike placeholders. Zamenite ih u:
- Hero sekcija - glavna slika restorana
- About sekcija - ambijent restorana  
- Menu Preview - 4 slike hrane
- Events sekcija - slika prostora za proslave

### Kako dodati slike:

1. Stavite slike u folder `/public/images/`
2. Zamenite placeholder div-ove sa `<Image>` komponentom u odgovarajućim fajlovima

Primer:
```tsx
<Image 
  src="/images/restaurant-hero.jpg" 
  alt="Loretto Restoran" 
  width={1200} 
  height={800}
  className="object-cover"
/>
```

## Logo

Logo placeholder se nalazi u komponentama. Zamenite ga sa:
- SVG fajlom u `/public/logo.svg` (već postoji placeholder)
- Ili PNG/JPG slikom

## Pokretanje

```bash
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000) u browseru.

## Build za produkciju

```bash
npm run build
npm start
```

## Predloge za poboljšanja

- Dodati realne slike hrane i ambijenta
- Integrisati formu za rezervacije
- Dodati Google Maps za lokaciju
- Dodati galeriju slika
- Integrisati booking sistem
- Dodati recenzije gostiju
- Dodati akcije i specijalne ponude

## Boje

- Primarna tamna: `#504B38`
- Primarna svetla: `#B9B28A`
- Akcent: `#EBE5C2`
- Pozadina: `#F8F3D9`
- Logo: `#af8338`
