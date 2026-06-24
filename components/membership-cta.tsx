import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Essentiel",
    price: "0",
    period: "Gratuit",
    features: ["Accès au blog", "5 téléchargements / mois", "Newsletter technique"],
  },
  {
    name: "Premium",
    price: "299",
    period: "MAD / mois",
    highlight: true,
    features: [
      "Téléchargements illimités",
      "Tous les fichiers AutoCAD",
      "Dossiers de marchés publics",
      "Formations en accès anticipé",
      "Support prioritaire",
    ],
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    period: "",
    features: ["Multi-utilisateurs", "Fichiers sur mesure", "Formations en présentiel", "Account manager dédié"],
  },
];

export function MembershipCta() {
  return (
    <section className="bg-navy-900 py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Adhésion</p>
          <h2 className="section-title mt-4">Choisissez votre niveau d&apos;accès</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                t.highlight
                  ? "relative rounded-2xl border border-gold-500/50 bg-gradient-to-b from-gold-500/10 to-transparent p-8 shadow-[0_0_60px_-15px_rgba(201,162,39,0.35)]"
                  : "glass-card p-8"
              }
            >
              {t.highlight && (
                <span className="absolute -top-3 right-8 rounded-full bg-gold-500 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-navy-950">
                  Le plus choisi
                </span>
              )}
              <h3 className="font-display text-xl text-ivory">{t.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-3xl text-gold-400">{t.price}</span>
                <span className="text-sm text-ivory/50">{t.period}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ivory/70">
                    <Check className="mt-0.5 h-4 w-4 text-gold-500" /> {f}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full" variant={t.highlight ? "default" : "ghost"} asChild>
                <Link href="/membership">Choisir {t.name}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
