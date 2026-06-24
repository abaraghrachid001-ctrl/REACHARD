"use client";

import { motion } from "framer-motion";
import { Calculator, FileStack, FileCheck2, GraduationCap, Ruler } from "lucide-react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Ruler,
    title: "Métrés & Quantitatifs",
    desc: "Détails de quantités précis, conformes aux normes marocaines, prêts à intégrer dans vos appels d'offres.",
  },
  {
    icon: FileStack,
    title: "Fichiers AutoCAD",
    desc: "Plans DWG structurés — VRD, ouvrages d'art, bâtiments — vérifiés par des ingénieurs.",
  },
  {
    icon: FileCheck2,
    title: "Dossiers de marchés publics",
    desc: "CPS, règlements de consultation et bordereaux conformes au code marocain des marchés publics.",
  },
  {
    icon: GraduationCap,
    title: "Formations spécialisées",
    desc: "Sessions animées par des experts : calcul de structures, génie routier, gestion de chantier.",
  },
  {
    icon: Calculator,
    title: "Estimation des coûts",
    desc: "Bordereaux de prix actualisés et outils de chiffrage pour des devis fiables et rapides.",
  },
];

export function Services() {
  return (
    <section className="bg-navy-900 py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">Ce que nous proposons</p>
          <h2 className="section-title mt-4">Une suite complète pour vos projets de BTP</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <CardContent>
                  <s.icon className="h-7 w-7 text-gold-500" strokeWidth={1.4} />
                  <CardTitle className="mt-5">{s.title}</CardTitle>
                  <CardDescription className="mt-2">{s.desc}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
