import Image from 'next/image'

export function HeroImage() {
  return (
    <div className="mb-8">
      <Image
        src="/image-omelette.jpeg"
        alt="Simple omelette with fresh herbs, spinach, mushrooms and salmon, served an orange sauce"
        width={800}
        height={400}
        className="rounded-xl"
      />
    </div>
  )
}

