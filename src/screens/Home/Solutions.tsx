import cadu from "../../assets/cadu.png"
import justiceGPT from "../../assets/justice-gpt.png"
import en from "../../locales/en.json"

export const Solutions = () => {
  return (
    <section id="relume" className="px-[5%] xl:px-[8%] py-16 md:py-24 lg:py-28">
      <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
        <p className="mb-3 font-semibold md:mb-4 text-black-olive-200 uppercase text-base">
          {en.home.solutions.tagline}
        </p>
        <h2 className="rb-5 mb-5 text-5xl font-semibold md:mb-6 md:text-7xl lg:text-7xl font-serif">
          {en.home.solutions.heading}
        </h2>
        <p className="text-base">{en.home.solutions.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 ">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-stretch rounded bg-white"
            >
              <div>
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  className="w-full object-cover"
                />
              </div>
              <div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12 ">
                <div>
                  <p className="mb-10 font-light italic font-serif text-2xl">
                    {card.tagline}
                  </p>
                  <h3 className="font-serif mb-5 text-4xl font-semibold leading-[1.2] md:mb-6 md:text-3xl lg:text-4xl">
                    {card.heading}
                  </h3>
                  <p className="text-base">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const cards = [
  {
    tagline:
      "Transformative, Empowering, Responsive, Ethical, Healing, Scalable",
    image: {
      src: justiceGPT,
      alt: "Relume placeholder image 3",
    },
    heading: "Justice GPT",
    description:
      "JusticeGPT is a novel AI platform designed to facilitate transformative justice dialogues within and across criminal-legal system impacted communities. Recognizing the often-fatal consequences of involving the criminal justice system for marginalized populations, JusticeGPT offers a scalable alternative. Through this tool, communities can address harm  and resolve conflict without resorting to carceral state-sponsored systems.",
  },
  {
    tagline: "Empowering, Grassroots, Community-Building, Reparative",

    image: {
      src: cadu,
      alt: "Relume placeholder image 3",
    },
    heading: "California Data Union",
    description:
      "The California Data Union will represent Data Laborers, or the users of technology who generate the data that is used to power artificial intelligence systems. Yes, that means practically everyone connected to the internet in California. By recognizing our production of data as a type of labor, data laborers can organize themselves to collectively bargain with big tech companies for harm reducing  policies, fair compensation, and comprehensive data rights.",
  },
]
