import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[900ms] ease-out ${
        scrolled ? "py-3 glass" : "py-6 bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-[1.35rem] md:text-2xl tracking-tight text-ivory">
            Trendy Ladies
          </span>
          <span className="eyebrow mt-1 text-[0.55rem] md:text-[0.6rem]">Designer Atelier</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-[0.72rem] uppercase tracking-[0.28em] text-ivory/70">
          <li><a href="/#collection" className="hover:text-gold transition-colors duration-500">Collection</a></li>
          <li><a href="/#about" className="hover:text-gold transition-colors duration-500">Atelier</a></li>
          <li><a href="/#experience" className="hover:text-gold transition-colors duration-500">Experience</a></li>
          <li><Link to="/gallery" className="hover:text-gold transition-colors duration-500">Gallery</Link></li>
          <li><a href="/#contact" className="hover:text-gold transition-colors duration-500">Contact</a></li>
        </ul>

        <a href="/#contact" className="btn-lux hidden md:inline-flex">
          <span className="btn-lux-fill" />
          Book Fitting
        </a>
      </nav>
    </header>
  );
}
