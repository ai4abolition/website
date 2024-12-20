import hero from "../../assets/about-us-hero.png"
import abolition from "../../assets/partner-logos/abolition-dream-lab.png"
import altJ from "../../assets/partner-logos/alt-j.png"
import dataForBlackLives from "../../assets/partner-logos/data-for-black-lives.png"
import libraryFoundation from "../../assets/partner-logos/library-foundation.png"
import newMediaVentures from "../../assets/partner-logos/new-media-ventures.png"
import rodenberry from "../../assets/partner-logos/rodenberry.png"
import ucla from "../../assets/partner-logos/ucla-center-on-race.png"
import { Collaborators } from "../../components/Collaborators"
import { Team } from "../../components/Team"
import Brain from "../../icons/brain.svg"
import Chat from "../../icons/chat.svg"
import Handshake from "../../icons/handshake.svg"
import Person from "../../icons/person.svg"

const logos = [
  { src: libraryFoundation, alt: "Library Foundation of Los Angeles" },
  { src: ucla, alt: "UCLA Center on Race and Digital Justice" },
  { src: altJ, alt: "Alternative Justice" },
  { src: abolition, alt: "Abolition Dream Lab" },
  { src: dataForBlackLives, alt: "Data for Black Lives" },
  { src: newMediaVentures, alt: "New Media Ventures" },
  { src: rodenberry, alt: "Roddenberry Foundation" },
]

export const About = () => {
  return (
    <>
      <section
        id="relume"
        className="px-[5%] xl:px-[8%] py-16 md:py-24 lg:py-28 bg-black-olive-400 text-timberwolf-100"
      >
        <div className="xl:px-64 lg:px-32 text-center">
          <h1 className="mb-5 text-3xl font-semibold md:mb-6 md:text-5xl lg:text-7xl font-serif">
            Who We Are
          </h1>
          <p className="text-xl xl:px-60 lg:px-24 md:px-24">
            We are a diverse team of BIPOC, Queer, Neurodiverse, Femme,
            Intergenerational, and First-Gen American leaders.
          </p>
        </div>
      </section>
      <section
        id="relume"
        className="px-[5%] xl:px-[8%] py-16 md:py-24 lg:py-28"
      >
        <div className=" mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-300 text-lg">
              our story
            </p>
            <h3 className="text-4xl font-semibold font-serif xl:leading-[1.2] md:text-5xl lg:text-7xl">
              Reimagining AI for Liberation
            </h3>
          </div>
          <p className="text-base">
            AI4Abolition was founded out of a deep commitment to dismantling
            harmful algorithmic systems and reimagining technology as a force
            for liberation. After nearly a decade of diagnosing the ways AI
            reinforces oppression in housing, healthcare, education, and the
            criminal legal system, our co-founders realized that addressing the
            systemic flaws in AI wasn't enough. While it's crucial to expose the
            harm these systems cause—especially to Black, brown, poor, and other
            marginalized communities—it's just as vital to imagine and build
            alternatives. We can't simply dismantle oppressive technologies
            without dreaming up systems that foster justice, equity, and human
            flourishing.
          </p>
        </div>
        <div>
          <img src={hero} className="w-full object-cover rounded" />
        </div>
      </section>
      <section className="px-[5%] xl:px-[8%] py-12 md:py-16 lg:py-20">
        <h1 className="mx-auto mb-6 w-full max-w-lg text-center xl:text-7xl font-serif font-semibold xl:leading-[1.2] md:mb-8 md:text-4xl text-2xl md:leading-[1.2] xl:mb-32">
          Our Partners and Funders
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-2 pt-4 md:pt-2 xl:gap-x-96 xl:gap-y-24">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 md:max-h-16"
            />
          ))}
        </div>
      </section>
      <Team />
      <Collaborators />
      <section className="px-[5%] xl:px-[8%] py-16 md:py-24 lg:py-28">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h2 className="font-serif rb-5 mb-5 text-5xl font-semibold md:mb-6 md:text-6xl lg:text-7xl lg:leading-[1.2]">
                Our Values
              </h2>
              <p className="text-base">
                Our guiding principles merge the perspectives of
                justice-centered AI development with those of Black queer
                feminist abolitionist theory.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center text-center"
              >
                <div className="rb-5 mb-5 md:mb-6">
                  <img
                    src={section.icon.src}
                    className="size-12"
                    alt={section.icon.alt}
                  />
                </div>
                <h3 className="font-serif mb-5 text-2xl font-semibold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                  {section.heading}
                </h3>
                <p className="text-base">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const sections = [
  {
    icon: { src: Chat, alt: "Chat Icon" },
    heading: "Participatory AI Development",
    description:
      "Communities affected by AI should have a say in how these technologies are developed and used. This helps ensure that AI is developed with an understanding of the unique contexts and needs of different communities.",
  },
  {
    icon: { src: Handshake, alt: "Handshake Icon" },
    heading: "Collaboration and Mutual Aid",
    description:
      "Foster collaboration between individuals, communities, and organizations in the development and use of AI. Promote the idea that mutual aid, rather than competition, is the key to a healthier society.",
  },
  {
    icon: { src: Person, alt: "Person Icon" },
    heading: "Respecting and Enhancing Human Autonomy",
    description:
      "AI should be designed to respect and enhance human autonomy, rather than diminish it. This means avoiding over-reliance on AI in decision-making processes, especially in contexts that directly impact individuals' lives and well-being.",
  },
  {
    icon: { src: Brain, alt: "Brain Icon" },
    heading: "Abolition as Constant Praxis",
    description:
      "Always strive for abolitionist outcomes, understanding that this is a continuous process of learning, unlearning, and transformative action. See each challenge as an opportunity to advance towards a more equitable, just, and compassionate society.",
  },
]
