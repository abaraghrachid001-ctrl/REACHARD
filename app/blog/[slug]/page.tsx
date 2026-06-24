import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: params.slug.replace(/-/g, " "),
    description: "Article technique Structura Maroc sur le génie civil et les travaux publics.",
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <article className="bg-navy-950 py-24">
      <div className="container max-w-2xl">
        <Badge>Normes</Badge>
        <h1 className="section-title mt-6 text-balance">
          {params.slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-4 font-mono text-xs text-ivory/40">12 juin 2026 · 6 min de lecture</p>
        <div className="gold-line my-10" />
        <div className="prose prose-invert max-w-none text-ivory/70">
          <p>
            Cet article technique sera alimenté depuis le CMS / la base de données de Structura Maroc.
            Contenu détaillé, schémas et références réglementaires viendront enrichir cette page.
          </p>
        </div>
      </div>
    </article>
  );
}
