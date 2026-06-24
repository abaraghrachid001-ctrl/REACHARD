import Link from "next/link";
import { Building2 } from "lucide-react";

const columns = [
  {
    title: "Plateforme",
    links: [
      { href: "/services", label: "Services" },
      { href: "/resources", label: "Bibliothèque" },
      { href: "/membership", label: "Adhésion Premium" },
      { href: "/store", label: "Boutique digitale" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/blog?cat=normes", label: "Normes & réglementation" },
      { href: "/blog?cat=marches-publics", label: "Marchés publics" },
      { href: "/blog?cat=formation", label: "Formations" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/a-propos", label: "À propos" },
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/confidentialite", label: "Confidentialité" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gold-500/10 bg-navy-950">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-gold-500" strokeWidth={1.5} />
              <span className="font-display text-xl text-ivory">
                Structura <span className="text-gold-500">Maroc</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ivory/50">
              La plateforme premium dédiée au Génie Civil et aux Travaux Publics au Maroc.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-ivory/60 hover:text-gold-400">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="gold-line mt-12" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-ivory/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Structura Maroc. Tous droits réservés.</p>
          <p className="font-mono">Casablanca · Rabat · Marrakech</p>
        </div>
      </div>
    </footer>
  );
}
