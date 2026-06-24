import { ShoppingBag } from "lucide-react";
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Boutique digitale" };

const products = [
  { title: "Pack complet — Métrés BTP 2026", price: "490 MAD", tag: "Best-seller" },
  { title: "Modèles CPS — 12 dossiers types", price: "350 MAD", tag: "Marchés publics" },
  { title: "Bibliothèque DWG — Ouvrages d'art", price: "690 MAD", tag: "AutoCAD" },
  { title: "Formation vidéo — Calcul de structures", price: "990 MAD", tag: "Formation" },
  { title: "Bordereaux de prix actualisés 2026", price: "190 MAD", tag: "Estimation" },
  { title: "Pack étudiant — Génie civil", price: "99 MAD", tag: "Étudiant" },
];

export default function StorePage() {
  return (
    <section className="bg-navy-950 py-24">
      <div className="container">
        <p className="eyebrow">Boutique digitale</p>
        <h1 className="section-title mt-4">Des produits prêts à l&apos;emploi</h1>
        <p className="mt-4 max-w-xl text-ivory/60">
          Achetez à l&apos;unité les ressources dont vous avez besoin — paiement sécurisé, accès immédiat.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.title} className="h-full">
              <CardContent>
                <div className="flex items-center justify-between">
                  <ShoppingBag className="h-7 w-7 text-gold-500" strokeWidth={1.4} />
                  <Badge>{p.tag}</Badge>
                </div>
                <CardTitle className="mt-5 leading-snug">{p.title}</CardTitle>
                <CardDescription className="mt-3 font-display text-xl text-gold-400">
                  {p.price}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full">
                  Ajouter au panier
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
