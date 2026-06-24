import { MembershipCta } from "@/components/membership-cta";

export const metadata = { title: "Adhésion Premium" };

export default function MembershipPage() {
  return (
    <div className="bg-navy-950 pt-24">
      <div className="container text-center">
        <p className="eyebrow">Adhésion</p>
        <h1 className="section-title mt-4">Investissez dans votre expertise</h1>
        <p className="mx-auto mt-4 max-w-xl text-ivory/60">
          Rejoignez les ingénieurs et bureaux d&apos;études qui font confiance à Structura Maroc pour
          gagner du temps sur chaque projet.
        </p>
      </div>
      <MembershipCta />
    </div>
  );
}
