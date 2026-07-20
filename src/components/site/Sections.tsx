import { Link } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import designerImg from "@/assets/designer.jpg";
import s1 from "@/assets/sample-1.png";
import s2 from "@/assets/sample-2.jpg";
import s3 from "@/assets/sample-3.png";
import s5 from "@/assets/sample-5.jpg";
import s8 from "@/assets/sample-8.png";
import s12 from "@/assets/sample-12.png";

/* ============ ABOUT ============ */
export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
          <p className="eyebrow">The Atelier</p>
          <h2 className="font-display mt-6 text-5xl leading-[0.98] md:text-6xl">
            Cut, stitched, and
            <br />
            <em className="italic text-gold">whispered into being.</em>
          </h2>
          <div className="hairline my-10 max-w-xs" />
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            <span className="font-display italic text-ivory text-lg">Trendy Ladies Designer</span> is
            your one-stop destination for tailored perfection. We specialize in Blouses, 
            Princess Blouses, Bridal Blouses, Aari Works, Salwar Sets, Lehenga Sets, 
            Full Frocks, and School Uniforms. Each piece is drafted to your measure and 
            finished with couture patience.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Our thread comes from Surat, our mirrors from Kutch, our silks from
            Kanchipuram. Our discipline comes from decades of practice.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={designerImg}
              alt="The designer at work in the atelier"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <p className="eyebrow">The Owner & Artisan</p>
              <h3 className="font-display mt-3 text-3xl italic">Latha</h3>
              <p className="mt-2 max-w-md text-sm text-ivory/75">
                Ten years of experience crafting bespoke garments. A one-woman atelier 
                devoted to perfection.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "10", v: "Years of experience" },
              { k: "25+", v: "Hours per bridal piece" },
              { k: "1", v: "Master artisan" },
            ].map((s) => (
              <div key={s.v} className="border-t border-border pt-5">
                <div className="font-display text-4xl text-gold">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ EXPERIENCE ============ */
const steps = [
  {
    n: "01",
    t: "Consultation",
    d: "A private conversation. Your occasion, your silhouette, your desire.",
  },
  {
    n: "02",
    t: "Sketch & Swatch",
    d: "Hand-drawn croquis, fabric selection, and thread palette curated to you.",
  },
  {
    n: "03",
    t: "The Craft",
    d: "Zardozi, gota patti, mirror, pearl. Every stitch placed by hand.",
  },
  {
    n: "04",
    t: "Final Fitting",
    d: "A single visit. The garment adjusts to you — never the other way.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-48 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="eyebrow">The Experience</p>
            <h2 className="font-display mt-6 text-5xl leading-[0.98] md:text-6xl max-w-2xl">
              Four movements
              <br />
              <em className="italic text-gold">from thought to thread.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A made-to-measure journey lasts eight to twelve weeks. Slow, so it
            arrives eternal.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px bg-border/60 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative bg-background p-8 md:p-10 transition-all duration-700 hover:bg-accent/40 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(200,165,100,0.1)]"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="font-display text-6xl text-gold/80 transition-transform duration-[1200ms] group-hover:-translate-y-1">
                {s.n}
              </div>
              <div className="hairline my-6 w-10" />
              <h3 className="font-display text-2xl italic">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SAMPLES ============ */
const previewSamples = [
  { src: s1, name: "Neelambari", cat: "Zardozi · Royal Blue" },
  { src: s2, name: "Rakta", cat: "Detail · Crimson Gold" },
  { src: s5, name: "Kesari", cat: "Floral · Coral Silk" },
  { src: s8, name: "Zumurrud II", cat: "Silhouette · Emerald" },
  { src: s3, name: "Lilā", cat: "Chanderi · Lavender" },
  { src: s12, name: "Lilā", cat: "Chanderi · Lavender" },
];

export function Samples() {
  return (
    <section id="samples" className="relative py-32 md:py-48 border-t border-border/60">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="eyebrow">Sample Dresses</p>
            <h2 className="font-display mt-6 text-5xl leading-[0.98] md:text-6xl">
              Recent pieces
              <br />
              <em className="italic text-gold">from the workroom.</em>
            </h2>
          </div>
          <Link to="/gallery" className="btn-lux">
            <span className="btn-lux-fill" />
            View more
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
          {previewSamples.map((s, i) => (
            <Dialog key={s.src}>
              <DialogTrigger asChild>
                <figure
                  className={`group relative overflow-hidden cursor-pointer ${i === 0 ? "col-span-2 row-span-2 aspect-[4/5]" : "aspect-[3/4]"
                    }`}
                >
                  <img
                    src={s.src}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/0 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-1 transition-transform duration-700 group-hover:translate-y-0">
                    <span className="eyebrow text-[0.6rem]">{s.cat}</span>
                    <div className="font-display text-2xl italic mt-2">{s.name}</div>
                  </figcaption>
                </figure>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden border-border/40">
                <div className="flex flex-col md:flex-row h-full max-h-[85vh] md:max-h-[75vh]">
                  <div className="w-full md:w-1/2 relative bg-muted/20">
                    <img
                      src={s.src}
                      alt={s.name}
                      className="w-full h-[40vh] md:h-[75vh] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-background/95 text-left">
                    <DialogHeader>
                      <DialogTitle className="font-display text-4xl md:text-5xl italic text-gold">{s.name}</DialogTitle>
                      <DialogDescription className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        {s.cat}
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
  );
}

/* ============ REVIEWS ============ */
const reviews = [
  {
    q: "I had a very good experience at this tailor shop with affordable rate... The tailoring Latha guided me patiently throughout the process. Highly recommend!",
    who: "Lakshmi Priya",
    where: "2 months ago",
  },
  {
    q: "The best place for everything. I felt like one stop solution for all kinds of tailored clothes. The customization of the dress is the best among all.",
    who: "Nandhini Diya",
    where: "6 months ago",
  },
  {
    q: "Recently Sai baba Colony la irukkura Trendy Ladies Designer la dress stitch panninen. Fitting super ah set aachu, stitching neat & finishing clean. Definitely recommend!",
    who: "Bagya Lakshmi",
    where: "5 months ago",
  },
  {
    q: "Very satisfied with the stitching and fitting. The tailor understood exactly what I wanted. Great service and perfect fitting.",
    who: "Chahana",
    where: "6 months ago",
  },
];

export function Reviews() {
  return (
    <section className="relative py-32 md:py-48 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow flex items-center justify-center gap-2">
            Google Reviews <span className="text-gold pulse-gold inline-block font-semibold">★ 4.9 Rating (93 reviews)</span>
          </p>
          <h2 className="font-display mt-6 text-5xl leading-[1] md:text-6xl">
            <em className="italic text-gold">Voices</em> of our happy customers.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <blockquote
              key={r.who}
              className="group relative border border-border/70 p-8 md:p-12 hover-lift transition-all duration-700 hover:border-gold/60 bg-card/30"
            >
              <span className="absolute -top-6 left-8 font-display text-8xl text-gold/60 leading-none select-none">
                “
              </span>
              <p className="font-display text-2xl leading-[1.35] italic text-ivory/95">
                {r.q}
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="hairline w-10" />
                <div>
                  <div className="text-sm font-medium text-ivory">{r.who}</div>
                  <div className="eyebrow mt-1 text-[0.6rem]">{r.where}</div>
                </div>
              </footer>
              <span
                aria-hidden
                className="absolute right-6 top-6 text-gold/70 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CONTACT ============ */
export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Visit · Write · Call</p>
          <h2 className="font-display mt-6 text-5xl leading-[0.98] md:text-6xl">
            Get in touch
            <br />
            <em className="italic text-gold">with the atelier.</em>
          </h2>
          <div className="hairline my-10 w-24 mx-auto" />

          <dl className="space-y-8 text-sm max-w-2xl flex flex-col items-center">
            <div>
              <dt className="eyebrow">The Atelier</dt>
              <dd className="mt-3 font-display text-xl italic">
                No. 11 Sabaapathi Street K.K.Pudur Sai Baba Colony
                <br />
                Coimbatore, Tamil Nadu 641038.
              </dd>
            </div>
            <div className="grid grid-cols-2 gap-12 w-full max-w-md">
              <div>
                <dt className="eyebrow">Direct</dt>
                <dd className="mt-3">
                  <a href="tel:+919941479877" className="hover:text-gold transition-colors duration-500">
                    +91 99414 79877
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Correspond</dt>
                <dd className="mt-3">
                  <a
                    href="mailto:atelier@trendyladies.in"
                    className="hover:text-gold transition-colors duration-500"
                  >
                    atelier@trendyladies.in
                  </a>
                </dd>
              </div>
            </div>
            <div className="pt-4">
              <dt className="eyebrow">Follow</dt>
              <dd className="mt-3 flex justify-center gap-6 text-sm">
                <a href="https://www.instagram.com/latha.siva.54540/" className="hover:text-gold transition-colors duration-500">Instagram</a>
                <a href="#" className="hover:text-gold transition-colors duration-500">Pinterest</a>
                <a href="https://wa.me/+919941479877" className="hover:text-gold transition-colors duration-500">WhatsApp</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
export function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-2xl">Trendy Ladies Designer</div>
          <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Blouse · Bridal · Aari Works · Salwar · Lehenga
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Trendy Ladies Designer. Every piece, an heirloom.
        </p>
      </div>
    </footer>
  );
}
