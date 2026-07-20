import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import s1 from "@/assets/sample-1.png";
import s2 from "@/assets/sample-2.jpg";
import s3 from "@/assets/sample-3.png";
import s4 from "@/assets/sample-4.png";
import s5 from "@/assets/sample-5.jpg";
import s6 from "@/assets/sample-6.png";
import s7 from "@/assets/sample-7.png";
import s8 from "@/assets/sample-8.png";
import b1 from "@/assets/blouse-1.jpg";
import b2 from "@/assets/blouse-2.jpg";
import b3 from "@/assets/blouse-3.jpg";
import b4 from "@/assets/blouse-4.jpg";
import b5 from "@/assets/blouse-5.jpg";
import s9 from "@/assets/sample-9.png";
import s10 from "@/assets/sample-10.png";
import s11 from "@/assets/sample-11.png";
import s12 from "@/assets/sample-12.png";

const pieces = [
  { src: s1, name: "Neelambari", cat: "Zardozi · Royal Blue" },
  { src: b1, name: "Rubaiyat", cat: "Bridal · Burgundy Silk" },
  { src: s2, name: "Rakta", cat: "Detail · Crimson Gold" },
  { src: s3, name: "Lilā", cat: "Chanderi · Lavender" },
  { src: b3, name: "Zumurrud", cat: "Velvet · Emerald" },
  { src: s5, name: "Kesari", cat: "Coral · Floral Silk" },
  { src: s4, name: "Prishthā", cat: "Back Detail · Pearl Tassel" },
  { src: b5, name: "Aurore", cat: "Trousseau · Blush" },
  { src: s6, name: "Rājasī", cat: "Bridal · Maroon Kundan" },
  { src: b2, name: "Solène", cat: "Occasion · Ivory Duchesse" },
  { src: s7, name: "Śveta", cat: "Modern · Silk Collar" },
  { src: s8, name: "Zumurrud II", cat: "Silhouette · Emerald" },
  { src: b4, name: "Noir Mirage", cat: "Cocktail · Obsidian Crystal" },
  { src: s9, name: "Sample 9", cat: "New Arrival" },
  { src: s10, name: "Sample 10", cat: "New Arrival" },
  { src: s11, name: "Sample 11", cat: "New Arrival" },
  { src: s12, name: "Sample 12", cat: "New Arrival" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Trendy Ladies Designer" },
      {
        name: "description",
        content:
          "The full sample archive of the Trendy Ladies Designer atelier — hand-crafted saree blouses across silhouettes, silks, and embroideries.",
      },
      { property: "og:title", content: "Gallery — Trendy Ladies Designer" },
      {
        property: "og:description",
        content: "The full sample archive of hand-crafted couture saree blouses.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      <section className="pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">The Archive</p>
              <h1 className="font-display mt-6 text-6xl leading-[0.95] md:text-7xl max-w-3xl">
                Every piece <em className="italic text-gold">we remember making.</em>
              </h1>
            </div>
            <Link to="/" className="btn-lux self-start md:self-end">
              <span className="btn-lux-fill" />
              ← Back home
            </Link>
          </div>
          <p className="mt-8 max-w-xl text-sm text-muted-foreground">
            A pinboard of recent commissions from the atelier — bridal,
            occasion, and trousseau. Tap any piece to enquire after a similar
            silhouette.
          </p>
        </div>
      </section>

      {/* Pinterest-style masonry via CSS columns */}
      <section className="pb-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="columns-2 gap-4 md:columns-3 md:gap-6 lg:columns-4">
            {pieces.map((p, i) => (
              <Dialog key={p.src + i}>
                <DialogTrigger asChild>
                  <figure
                    className="group relative mb-4 md:mb-6 break-inside-avoid overflow-hidden bg-card cursor-pointer hover-lift rounded-sm"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <img
                      src={p.src}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-all duration-[1600ms] ease-out group-hover:scale-[1.05]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/10 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-90 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="eyebrow text-[0.6rem]">{p.cat}</span>
                      <div className="font-display text-2xl italic mt-2 text-ivory">{p.name}</div>
                    </figcaption>
                  </figure>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden border-border/40">
                  <div className="flex flex-col md:flex-row h-full max-h-[85vh] md:max-h-[75vh]">
                    <div className="w-full md:w-1/2 relative bg-muted/20">
                      <img
                        src={p.src}
                        alt={p.name}
                        className="w-full h-[40vh] md:h-[75vh] object-cover"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-background/95">
                      <DialogHeader>
                        <DialogTitle className="font-display text-4xl md:text-5xl italic text-gold">{p.name}</DialogTitle>
                        <DialogDescription className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                          {p.cat}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ivory/80">
                        <p>A bespoke creation from the Trendy Ladies Designer atelier. Each piece is crafted with precision, using the finest fabrics and intricate hand-embroidery techniques.</p>
                        <p>For inquiries regarding similar silhouettes or custom adaptations, please contact the atelier.</p>
                      </div>
                      <div className="mt-12 flex gap-4">
                        <DialogClose asChild>
                          <Link to="/" hash="contact" className="btn-lux">
                            <span className="btn-lux-fill" />
                            Book Consultation
                          </Link>
                        </DialogClose>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="eyebrow">Commission a piece</p>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">
            See something you love? <em className="italic text-gold">Let's begin.</em>
          </h2>
          <div className="mt-10">
            <Link to="/" hash="contact" className="btn-lux">
              <span className="btn-lux-fill" />
              Request a Fitting
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
