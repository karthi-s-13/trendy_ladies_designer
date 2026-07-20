import { useCallback, useEffect, useRef, useState } from "react";
import blouse1 from "@/assets/blouse-1.jpg";
import blouse2 from "@/assets/blouse-2.jpg";
import blouse3 from "@/assets/blouse-3.jpg";
import blouse4 from "@/assets/blouse-4.jpg";
import blouse5 from "@/assets/blouse-5.jpg";

const designs = [
  {
    src: blouse1,
    name: "Rubaiyat",
    story: "Deep burgundy silk. Hand zardozi in antique gold.",
    tag: "Bridal · No. 01",
    color: "oklch(0.35 0.13 20)",
  },
  {
    src: blouse2,
    name: "Solène",
    story: "Ivory duchesse silk. Seed-pearl embroidery, high collar.",
    tag: "Occasion · No. 02",
    color: "oklch(0.88 0.03 85)",
  },
  {
    src: blouse3,
    name: "Zumurrud",
    story: "Emerald velvet. Antique gold zari on sweetheart neck.",
    tag: "Signature · No. 03",
    color: "oklch(0.32 0.09 155)",
  },
  {
    src: blouse4,
    name: "Noir Mirage",
    story: "Obsidian crêpe. Hand-set crystal and mirror shards.",
    tag: "Cocktail · No. 04",
    color: "oklch(0.18 0.008 60)",
  },
  {
    src: blouse5,
    name: "Aurore",
    story: "Blush raw silk. Gota patti with silver floral thread.",
    tag: "Trousseau · No. 05",
    color: "oklch(0.82 0.05 25)",
  },
];

export function MannequinShowcase() {
  const [index, setIndex] = useState(0);
  const total = designs.length;
  const touchStart = useRef<number | null>(null);
  const wheelLock = useRef(false);

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchStart.current = null;
  };

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) < 20 || wheelLock.current) return;
    wheelLock.current = true;
    go(e.deltaX > 0 ? 1 : -1);
    setTimeout(() => (wheelLock.current = false), 900);
  };

  const current = designs[index];

  return (
    <section
      id="collection"
      className="relative min-h-screen w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onWheel={onWheel}
    >
      {/* Ambient color wash tied to the current piece */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-all duration-[2200ms] ease-out"
        style={{
          background: `radial-gradient(ellipse 70% 55% at 50% 55%, ${current.color} 0%, transparent 70%)`,
          opacity: 0.28,
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-obsidian" />

      <div className="relative mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-8 px-6 pt-32 pb-16 md:grid-cols-12 md:px-10 md:pt-36">
        {/* Left / meta */}
        <div className="md:col-span-3 md:pr-6 order-2 md:order-1">
          <p className="eyebrow reveal-up" style={{ animationDelay: "0.2s" }}>
            The Collection
          </p>
          <h1
            className="font-display mt-4 text-5xl leading-[0.95] md:text-6xl reveal-up"
            style={{ animationDelay: "0.35s" }}
          >
            A single form.
            <br />
            <em className="italic text-gold">Infinite couture.</em>
          </h1>
          <p
            className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground reveal-up"
            style={{ animationDelay: "0.5s" }}
          >
            Swipe, scroll, or arrow through the atelier. The silhouette stays.
            Only the craft transforms.
          </p>
        </div>

        {/* Center / mannequin */}
        <div className="md:col-span-6 order-1 md:order-2 flex items-center justify-center">
          <div className="relative aspect-[2/3] w-full max-w-[520px]">
            {/* soft plinth */}
            <div
              aria-hidden
              className="absolute inset-x-8 bottom-2 h-8 rounded-[50%] blur-2xl"
              style={{ background: "color-mix(in oklab, var(--gold) 30%, transparent)" }}
            />
            {designs.map((d, i) => (
              <img
                key={d.src}
                src={d.src}
                alt={d.name}
                width={1024}
                height={1536}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover object-top transition-all ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                  i === index
                    ? "opacity-100 scale-100 duration-[1600ms]"
                    : "opacity-0 scale-[1.03] duration-[1200ms]"
                }`}
                style={{
                  filter: i === index ? "none" : "blur(6px)",
                }}
              />
            ))}
            {/* Vignette */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow: "inset 0 0 120px 20px oklch(0.11 0.005 60)",
              }}
            />
          </div>
        </div>

        {/* Right / details */}
        <div className="md:col-span-3 md:pl-6 order-3 flex flex-col items-start md:items-end">
          <div className="w-full md:text-right">
            <span className="eyebrow">{current.tag}</span>
            <h3 className="font-display mt-3 text-4xl italic">{current.name}</h3>
            <p className="mt-4 text-sm text-muted-foreground">{current.story}</p>
          </div>

          {/* Controls */}
          <div className="mt-10 flex w-full items-center justify-between md:justify-end md:gap-6">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="group h-12 w-12 border border-border/70 rounded-full flex items-center justify-center transition-all duration-700 hover:border-gold hover:bg-gold/5"
            >
              <span className="text-ivory/70 group-hover:text-gold transition-colors duration-500">←</span>
            </button>
            <div className="font-display text-2xl tabular-nums text-ivory/90">
              <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-3 text-ivory/30">/</span>
              <span className="text-ivory/50">{String(total).padStart(2, "0")}</span>
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="group h-12 w-12 border border-border/70 rounded-full flex items-center justify-center transition-all duration-700 hover:border-gold hover:bg-gold/5"
            >
              <span className="text-ivory/70 group-hover:text-gold transition-colors duration-500">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail rail */}
      <div className="absolute inset-x-0 bottom-6 z-10 hidden md:flex justify-center">
        <div className="flex items-center gap-3 glass rounded-full px-4 py-3">
          {designs.map((d, i) => (
            <button
              key={d.src}
              onClick={() => setIndex(i)}
              aria-label={`View ${d.name}`}
              className={`h-14 w-10 overflow-hidden rounded-sm border transition-all duration-700 ${
                i === index
                  ? "border-gold scale-110"
                  : "border-transparent opacity-50 hover:opacity-90"
              }`}
            >
              <img src={d.src} alt="" width={40} height={56} className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center md:hidden">
        <span className="eyebrow opacity-70">swipe · to explore</span>
      </div>
    </section>
  );
}
