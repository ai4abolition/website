import Fist from "../../icons/fist.svg"
import Scale from "../../icons/scale.svg"
import People from "../../icons/people.svg"
import Lightbulb from "../../icons/lightbulb.svg"

type ImageProps = {
  src: string
  alt?: string
}

type SectionProps = {
  icon: ImageProps
  heading: string
  description: string
}

type Props = {
  sections: SectionProps[]
}

export type Layout245Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>

export const WhatWeDo = (props: Layout245Props) => {
  const { sections } = { ...props, ...Layout245Defaults } as Props

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-[112px]">
      <div className="flex flex-col items-start gap-y-24">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-300">
              What We Do
            </p>
            <h2 className="font-serif text-5xl font-bold md:text-7xl lg:text-8xl">
              Harnessing Artificial Intelligence for Transformative Justice
            </h2>
          </div>
          <p className="md:text-md">
            AI4Abolition empowers communities, organizations, and individuals
            with the knowledge and tools necessary to harness artificial
            intelligence for transformative justice. Our commitment is to create
            an abolitionist future by promoting AI literacy and developing tech
            products, literature, and cutting edge research. We prioritize
            serving Black and Indigenous women, queer, and youth leaders, but
            our mission embraces all who strive to use AI as a force for
            systemic repair and mutual aid.
          </p>
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

export const Layout245Defaults: Layout245Props = {
  sections: [
    {
      icon: { src: Fist, alt: "Fist Icon" },
      heading: "Practicing Abolition",
      description:
        "We are a dedicated team of technologists, researchers, and advocates, innovating at the crossroads of artificial  intelligence and social transformation. Our goal is to harness AI's  potential to challenge systemic inequalities and instigate  transformative justice.",
    },
    {
      icon: { src: Scale, alt: "Scale Icon" },
      heading: "Solving Systemic Biases",
      description:
        "The landscape of data science is plagued with systemic  biases, perpetuating disparities and enabling unjust decision making. Our resolve is to construct and deploy tools capable of identifying, challenging, and rectifying these harms while imagining new uses and development practices for AI for a more equitable future.",
    },
    {
      icon: { src: People, alt: "People Icon" },
      heading: "Impacting the AI Community",
      description:
        "Our mission has made significant waves in the field of AI. Through our incisive research and advocacy, we have already drawn attention to the pervasive algorithmic bias in systems like social media recommendations, music streaming and human-algorithm interaction loops, initiating crucial conversations on the subject.",
    },
    {
      icon: { src: Lightbulb, alt: "Lightbulb Icon" },
      heading: "Innovating for Change",
      description:
        "Our contributions have been recognized by distinguished institutions and industry leaders alike. We have proven our capacity for transformative innovation. Our collaborations, including research and advocacy with Spotify Tech Research, The US Courts, and TikTok (to name a few) place us at the forefront of the discourse on tech equity.",
    },
  ],
}
