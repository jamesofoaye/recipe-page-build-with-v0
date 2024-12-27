import { Young_Serif } from "next/font/google"

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400"
})

export function RecipeHeader() {
  return (
    <>
      <h1 className={`${youngSerif.className} mb-4 text-3xl md:text-4xl text-stone-900`}>
        Simple Omelette Recipe
      </h1>
      <p className="mb-6 text-stone-600">
        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
        cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
      </p>
    </>
  )
}

