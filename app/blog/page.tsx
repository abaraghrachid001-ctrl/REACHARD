import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = ["Tous", "Normes", "Marchés publics", "Formation", "Matériaux", "Chantier"];

const posts = [
  { cat: "Normes", title: "RPS 2011 : ce qui change pour le calcul sismique", date: "12 juin 2026", slug: "rps-2011-calcul-sismique" },
  { cat: "Marchés publics", title: "Décret 2-22-431 : nouveautés pour les BTP", date: "3 juin 2026", slug: "decret-marches-publics-2026" },
  { cat: "Formation", title: "Devenir métreur certifié : le parcours complet", date: "28 mai 2026", slug: "devenir-metreur-certifie" },
  { cat: "Matériaux", title: "Béton bas-carbone : où en est le Maroc ?", date: "20 mai 2026", slug: "beton-bas-carbone-maroc" },
  { cat: "Chantier", title: "5 erreurs fréquentes en suivi de chantier", date: "14 mai 2026", slug: "erreurs-suivi-chantier" },
];

export default function BlogPage() {
  return (
    <section className="bg-navy-950 py-24">
      <div className="container">
        <p className="eyebrow">Blog</p>
        <h1 className="section-title mt-4">Veille technique & réglementaire</h1>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((c) => (
            <span
              key={c}
              className="cursor-pointer rounded-full border border-gold-500/20 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ivory/60 transition-colors hover:border-gold-500/50 hover:text-gold-400"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`}>
              <Card className="h-full">
                <CardContent>
                  <Badge>{p.cat}</Badge>
                  <CardTitle className="mt-4 leading-snug">{p.title}</CardTitle>
                  <CardDescription className="mt-3 font-mono text-xs">{p.date}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
