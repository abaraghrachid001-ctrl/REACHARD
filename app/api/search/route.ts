import { NextRequest, NextResponse } from "next/server";

// TODO: replace with real search (e.g. Postgres full-text, Algolia, or Meilisearch).
const corpus = [
  { title: "Bordereau des prix — Voirie 2026", type: "resource", href: "/resources" },
  { title: "RPS 2011 : calcul sismique", type: "blog", href: "/blog/rps-2011-calcul-sismique" },
  { title: "Pack complet — Métrés BTP 2026", type: "product", href: "/store" },
];

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.toLowerCase() ?? "";
  const results = q ? corpus.filter((c) => c.title.toLowerCase().includes(q)) : [];
  return NextResponse.json({ results });
}
