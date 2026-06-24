import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="bg-navy-950 py-24">
      <div className="container grid gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="section-title mt-4">Parlons de votre projet</h1>
          <p className="mt-4 max-w-md text-ivory/60">
            Notre équipe d&apos;ingénieurs vous répond en moins de 24h, du lundi au samedi.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3 text-ivory/70">
              <Mail className="h-5 w-5 text-gold-500" /> contact@structura-maroc.ma
            </div>
            <div className="flex items-center gap-3 text-ivory/70">
              <Phone className="h-5 w-5 text-gold-500" /> +212 5 22 00 00 00
            </div>
            <div className="flex items-center gap-3 text-ivory/70">
              <MapPin className="h-5 w-5 text-gold-500" /> Twin Center, Casablanca, Maroc
            </div>
          </div>
        </div>

        <form className="glass-card space-y-4 p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Nom complet" required />
            <Input placeholder="Email" type="email" required />
          </div>
          <Input placeholder="Sujet" required />
          <textarea
            placeholder="Votre message"
            rows={5}
            className="flex w-full rounded-xl border border-gold-500/20 bg-white/5 p-4 text-sm text-ivory placeholder:text-ivory/40 outline-none focus:border-gold-500/60"
          />
          <Button className="w-full" type="submit">
            Envoyer le message
          </Button>
        </form>
      </div>
    </section>
  );
}
