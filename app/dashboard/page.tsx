import { Card, CardContent } from "@/components/ui/card";
import { Users, FileStack, ShoppingBag, TrendingUp } from "lucide-react";

const stats = [
  { label: "Membres Premium", value: "1 284", icon: Users, delta: "+8.2%" },
  { label: "Ressources publiées", value: "612", icon: FileStack, delta: "+3.1%" },
  { label: "Commandes (30j)", value: "342", icon: ShoppingBag, delta: "+14%" },
  { label: "Revenu (30j)", value: "186 400 MAD", icon: TrendingUp, delta: "+11.6%" },
];

export const metadata = { title: "Tableau de bord" };

export default function DashboardPage() {
  return (
    <div>
      <h1 className="font-display text-3xl text-ivory">Vue d&apos;ensemble</h1>
      <p className="mt-1 text-ivory/50">Aperçu de l&apos;activité de la plateforme.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent>
              <div className="flex items-center justify-between">
                <s.icon className="h-5 w-5 text-gold-500" />
                <span className="font-mono text-xs text-green-400">{s.delta}</span>
              </div>
              <p className="mt-4 font-display text-2xl text-ivory">{s.value}</p>
              <p className="mt-1 text-sm text-ivory/50">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardContent>
          <h2 className="font-display text-lg text-ivory">Activité récente</h2>
          <ul className="mt-4 divide-y divide-gold-500/10">
            {[
              "Nouveau membre Premium — Karim B.",
              "Téléchargement — Plan de fondations DWG",
              "Commande — Pack complet Métrés BTP 2026",
              "Nouvel article publié — RPS 2011",
            ].map((e) => (
              <li key={e} className="py-3 text-sm text-ivory/70">
                {e}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
