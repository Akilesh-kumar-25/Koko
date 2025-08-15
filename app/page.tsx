import { KokoBeautyOfFood } from "@/components/blocks/about/koko-beauty-of-food"
import { KokoAboutBio } from "@/components/blocks/about/koko-about-bio"
import { KokoLuxuryStats } from "@/components/blocks/stats/koko-luxury-stats"
import { KokoLuxuryCTA } from "@/components/blocks/ctas/koko-luxury-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <KokoBeautyOfFood />
      <KokoAboutBio />
      <KokoLuxuryStats />
      <KokoLuxuryCTA />
    </main>
  )
}
