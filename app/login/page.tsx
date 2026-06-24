import Link from "next/link";
import { Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Connexion" };

export default function LoginPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-navy-950 bg-navy-radial py-24">
      <div className="glass-card w-full max-w-md p-8">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Building2 className="h-6 w-6 text-gold-500" strokeWidth={1.5} />
          <span className="font-display text-xl text-ivory">
            Structura <span className="text-gold-500">Maroc</span>
          </span>
        </Link>
        <h1 className="mt-8 text-center font-display text-2xl text-ivory">Connexion</h1>
        <form className="mt-8 space-y-4">
          <Input placeholder="Email" type="email" required />
          <Input placeholder="Mot de passe" type="password" required />
          <Button className="w-full" type="submit">
            Se connecter
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-ivory/50">
          Pas encore de compte ?{" "}
          <Link href="/register" className="text-gold-400 hover:underline">
            Créer un compte
          </Link>
        </p>
      </div>
    </section>
  );
}
