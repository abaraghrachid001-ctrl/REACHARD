"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, FileSpreadsheet, FileBox, Lock, Download } from "lucide-react";
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FileType = "PDF" | "Excel" | "DWG";

const icons: Record<FileType, typeof FileText> = {
  PDF: FileText,
  Excel: FileSpreadsheet,
  DWG: FileBox,
};

const resources: { title: string; type: FileType; size: string; premium: boolean }[] = [
  { title: "Bordereau des prix — Voirie 2026", type: "Excel", size: "240 Ko", premium: true },
  { title: "CPS type — Bâtiment R+4", type: "PDF", size: "1.2 Mo", premium: true },
  { title: "Plan de fondations — Villa 200 m²", type: "DWG", size: "3.4 Mo", premium: true },
  { title: "Métré quantitatif — Pont à poutres", type: "Excel", size: "180 Ko", premium: false },
  { title: "Règlement de consultation — Modèle", type: "PDF", size: "640 Ko", premium: false },
  { title: "Coupe type chaussée — RN", type: "DWG", size: "2.1 Mo", premium: true },
];

export default function ResourcesPage() {
  const [filter, setFilter] = useState<FileType | "Tous">("Tous");
  const [query, setQuery] = useState("");

  const filtered = resources.filter(
    (r) =>
      (filter === "Tous" || r.type === filter) &&
      r.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="bg-navy-950 py-24">
      <div className="container">
        <p className="eyebrow">Bibliothèque</p>
        <h1 className="section-title mt-4">Téléchargez vos ressources techniques</h1>
        <p className="mt-4 max-w-xl text-ivory/60">
          Fichiers PDF, Excel et DWG vérifiés par des ingénieurs, prêts à l&apos;emploi pour vos projets.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Input
            placeholder="Rechercher un fichier…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-xs"
          />
          {(["Tous", "PDF", "Excel", "DWG"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
                filter === t ? "bg-gold-500 text-navy-950" : "border border-gold-500/20 text-ivory/60 hover:border-gold-500/50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => {
            const Icon = icons[r.type];
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Icon className="h-7 w-7 text-gold-500" strokeWidth={1.4} />
                      {r.premium && <Badge>Premium</Badge>}
                    </div>
                    <CardTitle className="mt-5 leading-snug">{r.title}</CardTitle>
                    <CardDescription className="mt-2 font-mono text-xs">
                      {r.type} · {r.size}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" variant={r.premium ? "ghost" : "default"} className="w-full">
                      {r.premium ? (
                        <>
                          <Lock className="h-3.5 w-3.5" /> Réservé membres
                        </>
                      ) : (
                        <>
                          <Download className="h-3.5 w-3.5" /> Télécharger
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
