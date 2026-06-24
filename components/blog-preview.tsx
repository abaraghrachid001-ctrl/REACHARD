import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    cat: "Normes",
    title: "RPS 2011 : ce qui change pour le calcul sismique",
    date: "12 juin 2026",
    slug: "rps-2011-calcul-sismique",
  },
  {
    cat: "Marchés publics",
    title: "Décret 2-22-431 : nouveautés pour les BTP",
    date: "3 juin 2026",
    slug: "decret-marches-publics-2026",
  },
  {
    cat: "Formation",
    title: "Devenir métreur certifié : le parcours complet",
    date: "28 mai 2026",
    slug: "devenir-metreur-certifie",
  },
];

export function BlogPreview() {
  return (
    <section className="bg-navy-950 py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Le blog</p>
            <h2 className="section-title mt-4">Veille technique & réglementaire</h2>
          </div>
          <Link href="/blog" className="text-sm text-gold-400 hover:underline">
            Voir tous les articles →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
