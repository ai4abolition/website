"use client"

import { useRef } from "react"
import { Word } from "../../components/Word"

export const OurMission = () => {
  const heading =
    "We are committed to creating an abolitionist future by promoting AI literacy and developing open-source community-led products to usher in a just and regenerative future."

  const headingRef = useRef<HTMLHeadingElement>(null)

  const words = heading.split(" ")

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-reseda-green-200"
    >
      <div className="m-auto max-w-2xl text-center px-20">
        <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-300">
          Our Mission
        </p>
        <h1
          ref={headingRef}
          className="text-5xl font-bold md:text-7xl lg:text-8xl font-serif text-black-olive-400"
        >
          {words.map((word, index) => (
            <Word
              key={word + index}
              word={word}
              index={index}
              words={words}
              headingRef={headingRef}
            />
          ))}
        </h1>
      </div>
    </section>
  )
}
