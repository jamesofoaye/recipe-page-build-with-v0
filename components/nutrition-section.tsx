import { Young_Serif } from "next/font/google"

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400"
})

export function NutritionSection() {
  const nutritionData = [
    { label: "'Calories'", value: "'277kcal'" },
    { label: "'Carbs'", value: "'0g'" },
    { label: "'Protein'", value: "'20g'" },
    { label: "'Fat'", value: "'22g'" }
  ]

  return (
    <section className="border-t border-stone-150 pt-8">
      <h2 className={`${youngSerif.className} mb-4 text-2xl text-brown-800`}>
        Nutrition
      </h2>
      <p className="mb-4 text-sm text-stone-600">
        The table below shows nutritional values per serving without the additional fillings.
      </p>
      <div className="divide-y divide-stone-150">
        {nutritionData.map(({ label, value }) => (
          <div key={label} className="flex py-3 text-stone-600">
            <span className="flex-1">{label}</span>
            <span className="font-semibold text-brown-800">{value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

