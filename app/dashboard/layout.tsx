import Link from "next/link";
import { LayoutDashboard, FileStack, Users, ShoppingBag, Settings, Building2 } from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Vue d'ensemble", icon: LayoutDashboard },
  { href: "/dashboard/resources", label: "Ressources", icon: FileStack },
  { href: "/dashboard/members", label: "Membres", icon: Users },
  { href: "/dashboard/orders", label: "Commandes", icon: ShoppingBag },
  { href: "/dashboard/settings", label: "Paramètres", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-navy-950">
      <aside className="hidden w-64 flex-col border-r border-gold-500/10 bg-navy-900/60 p-6 lg:flex">
        <Link href="/" className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-gold-500" strokeWidth={1.5} />
          <span className="font-display text-lg text-ivory">Structura</span>
        </Link>
        <nav className="mt-10 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ivory/70 transition-colors hover:bg-gold-500/10 hover:text-gold-400"
            >
              <item.icon className="h-4 w-4" /> {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 lg:p-10">{children}</main>
    </div>
  );
}
