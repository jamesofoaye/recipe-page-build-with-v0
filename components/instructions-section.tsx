import { Young_Serif } from "next/font/google"

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400"
})

export function InstructionsSection() {
  const instructions = [
    "Beat the eggs: In a bowl, beat eggs with pinch of salt and pepper until they are well mixed. You can add tablespoon water or milk for fluffier texture.",
    "Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.",
    "Cook the omelette: Once butter is melted and bubbling, pour in eggs. Tilt pan to ensure eggs evenly coat surface.",
    "Add fillings (optional): When the eggs begin to set at edges but are still slightly runny in middle, sprinkle your chosen over one half of omelette.",
    "Fold and serve: As the omelette continues to cook, carefully lift one edge fold it over fillings. Let cook for another minute, then slide onto a plate.",
    "Enjoy: Serve hot, with additional salt and pepper if needed."
  ]

  return (
    <section className="mb-8 border-t border-stone-150 pt-8">
      <h2 className={`${youngSerif.className} mb-4 text-2xl text-brown-800`}>
        Instructions
      </h2>
      <ol className="space-y-4">
        {instructions.map((step, index) => (
          <li key={index} className="flex gap-4">
            <span className="font-bold text-brown-800">{index + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

