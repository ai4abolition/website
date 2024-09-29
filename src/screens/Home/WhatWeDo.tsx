import Fist from "../../icons/fist.svg"
import Scale from "../../icons/scale.svg"
import People from "../../icons/people.svg"
import Lightbulb from "../../icons/lightbulb.svg"
import en from "../../locales/en.json"

export const WhatWeDo = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-[112px]">
      <div className="flex flex-col items-start gap-y-24">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-300">
              {en.home.whatWeDo.title}
            </p>
            <h2 className="font-serif text-5xl font-bold md:text-7xl lg:text-8xl">
              {en.home.whatWeDo.subtitle}
            </h2>
          </div>
          <p className="md:text-md">{en.home.whatWeDo.description}</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-8">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src={section.icon.src}
                  className="size-12"
                  alt={section.icon.alt}
                />
              </div>
              <h3 className="font-serif mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {section.heading}
              </h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const icons: Record<string, { src: string; alt?: string }> = {
  "practicing-abolition": { src: Fist, alt: "Fist Icon" },
  "solving-systemic-biases": { src: Scale, alt: "Scale Icon" },
  "impacting-the-ai-community": { src: People, alt: "People Icon" },
  "innovating-for-change": { src: Lightbulb, alt: "Lightbulb Icon" },
}

const sections = en.home.whatWeDo.sections.map(
  ({ title, description, key }) => ({
    icon: icons[key],
    heading: title,
    description,
  }),
)
