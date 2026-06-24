"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Bibliothèque" },
  { href: "/membership", label: "Adhésion" },
  { href: "/store", label: "Boutique" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "AR">("FR");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-500/10 bg-navy-950/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-gold-500" strokeWidth={1.5} />
          <span className="font-display text-xl tracking-wide text-ivory">
            Structura <span className="text-gold-500">Maroc</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-ivory/70 transition-colors hover:text-gold-400"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            aria-label="Rechercher"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/20 text-ivory/70 transition-colors hover:border-gold-500/50 hover:text-gold-400"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            onClick={() => setLang(lang === "FR" ? "AR" : "FR")}
            className="font-mono text-xs tracking-wider text-ivory/60 hover:text-gold-400"
            aria-label="Changer de langue"
          >
            {lang} / {lang === "FR" ? "AR" : "FR"}
          </button>
          <Link href="/login" className="text-sm text-ivory/70 hover:text-gold-400">
            Connexion
          </Link>
          <Button size="sm" asChild>
            <Link href="/membership">Devenir membre</Link>
          </Button>
        </div>

        <button className="lg:hidden text-ivory" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden border-t border-gold-500/10 bg-navy-950 px-6 py-6"
        >
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-ivory/80" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/login" className="text-ivory/80">
              Connexion
            </Link>
            <Button asChild>
              <Link href="/membership">Devenir membre</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
