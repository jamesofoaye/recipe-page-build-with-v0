import { Young_Serif } from "next/font/google"

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400"
})

export function IngredientsSection() {
  return (
    <section className="mb-8">
      <h2 className={`${youngSerif.className} mb-4 text-2xl text-brown-800`}>
        Ingredients
      </h2>
      <ul className="list-disc space-y-2 pl-4 marker:text-brown-800">
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
      </ul>
    </section>
  )
}

