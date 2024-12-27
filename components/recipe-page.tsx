import { Outfit } from "next/font/google"
import { HeroImage } from "../components/hero-image"
import { RecipeHeader } from "../components/recipe-header"
import { PreparationTime } from "../components/preparation-time"
import { IngredientsSection } from "../components/ingredients-section"
import { InstructionsSection } from "../components/instructions-section"
import { NutritionSection } from "../components/nutrition-section"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})

export default function RecipePage() {
  return (
    <main className={`min-h-screen bg-stone-100 p-4 md:p-8 lg:p-16 ${outfit.className}`}>
      <article className="mx-auto max-w-[46rem] rounded-3xl bg-white p-5 md:p-10">
        <HeroImage />
        <RecipeHeader />
        <PreparationTime />
        <IngredientsSection />
        <InstructionsSection />
        <NutritionSection />
      </article>
    </main>
  )
}

