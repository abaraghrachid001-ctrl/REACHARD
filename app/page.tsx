import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { BlogPreview } from "@/components/blog-preview";
import { MembershipCta } from "@/components/membership-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <BlogPreview />
      <MembershipCta />
    </>
  );
}
