import abolition from "../../assets/partner-logos/abolition-dream-lab.png"
import dataForBlackLives from "../../assets/partner-logos/data-for-black-lives.png"
import libraryFoundation from "../../assets/partner-logos/library-foundation.png"
import newMediaVentures from "../../assets/partner-logos/new-media-ventures.png"
import rodenberry from "../../assets/partner-logos/rodenberry.png"
import ucla from "../../assets/partner-logos/ucla-center-on-race.png"
import { Collaborators } from "../../components/Collaborators"
import { Team } from "../../components/Team"

const logos = [
  { src: ucla, alt: "UCLA Center on Race and Digital Justice" },
  { src: abolition, alt: "Abolition Dream Lab" },
  { src: dataForBlackLives, alt: "Data for Black Lives" },
  { src: newMediaVentures, alt: "New Media Ventures" },
  { src: rodenberry, alt: "Roddenberry Foundation" },
  { src: libraryFoundation, alt: "Library Foundation of Los Angeles" },
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
              Tell the story of how your company came about
            </h3>
          </div>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit
            turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
            eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a,
            euismod risus rhoncus. Elementum ullamcorper nec, habitasse
            vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam
            ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget
            faucibus urna, nam risus nec elementum cras porta. Sed elementum,
            sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit
            sagittis in eleifend dignissim. Natoque mauris cras molestie velit.
            Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt
            ultrices pellentesque.
          </p>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full object-cover rounded"
          />
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
              className="max-h-12 md:max-h-14"
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
    icon: {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      alt: "Relume logo 1",
    },
    heading: "Participatory AI Development",
    description:
      "Communities affected by AI should have a say in how these technologies are developed and used. This helps ensure that AI is developed with an understanding of the unique contexts and needs of different communities.",
  },
  {
    icon: {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      alt: "Relume logo 2",
    },
    heading: "Collaboration and Mutual Aid",
    description:
      "Foster collaboration between individuals, communities, and organizations in the development and use of AI. Promote the idea that mutual aid, rather than competition, is the key to a healthier society.",
  },
  {
    icon: {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      alt: "Relume logo 3",
    },
    heading: "Respecting and Enhancing Human Autonomy",
    description:
      "AI should be designed to respect and enhance human autonomy, rather than diminish it. This means avoiding over-reliance on AI in decision-making processes, especially in contexts that directly impact individuals' lives and well-being.",
  },
  {
    icon: {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      alt: "Relume logo 3",
    },
    heading: "Abolition as Constant Praxis",
    description:
      "Always strive for abolitionist outcomes, understanding that this is a continuous process of learning, unlearning, and transformative action. See each challenge as an opportunity to advance towards a more equitable, just, and compassionate society.",
  },
]
