"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 bg-navy-radial pb-28 pt-24 lg:pt-32">
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-blueprint bg-[length:44px_44px] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/40 to-navy-950" />

      <div className="container relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge>Génie Civil & Travaux Publics — Maroc</Badge>
          <h1 className="section-title mt-6 text-balance text-5xl lg:text-6xl">
            L&apos;ingénierie marocaine,
            <br />
            élevée au rang d&apos;<span className="text-gold-500">excellence</span>.
          </h1>
          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ivory/60">
            Métrés, plans AutoCAD, dossiers d&apos;appel d&apos;offres, formations et estimations de
            coûts — réunis dans une plateforme pensée pour les ingénieurs, bureaux d&apos;études et
            entreprises de BTP.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/resources">Explorer la bibliothèque</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/membership">Devenir membre Premium</Link>
            </Button>
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 font-mono">
            {[
              ["1 200+", "plans DWG"],
              ["340+", "CPS types"],
              ["98%", "satisfaction"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="text-2xl text-gold-400">{num}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-ivory/40">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Signature: drafted elevation, ink-drawn in gold */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="glass absolute inset-0 rounded-2xl" />
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full p-10" fill="none">
            <g stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <motion.path
                d="M40 320 L40 140 L200 60 L360 140 L360 320 Z"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
              />
              <motion.path
                d="M40 320 L360 320 M90 320 L90 200 L150 200 L150 320 M250 320 L250 200 L310 200 L310 320 M170 320 L170 240 L230 240 L230 320"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 1.1 }}
              />
              <motion.circle
                cx="200"
                cy="60"
                r="3"
                fill="#C9A227"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              />
            </g>
            <text x="40" y="350" fill="#C9A227" opacity="0.5" fontSize="10" fontFamily="monospace">
              ÉLÉVATION — ÉCH. 1/100
            </text>
          </svg>
          <motion.div
            className="absolute -bottom-6 -right-6 rounded-xl border border-gold-500/30 bg-navy-900/90 px-4 py-3 font-mono text-xs text-gold-400 shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            DWG • Validé ✓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
