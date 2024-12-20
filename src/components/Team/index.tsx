import { BiLogoLinkedinSquare } from "react-icons/bi"

import avriel from "../../assets/headshots/avriel.png"
import carolyn from "../../assets/headshots/Carolyn.png"
import jordan from "../../assets/headshots/jordan.png"
import linh from "../../assets/headshots/linh.png"
import sara from "../../assets/headshots/sara.jpg"
import taylor from "../../assets/headshots/taylor.jpeg"
import { TeamMember } from "./TeamMember"

export const Team = () => {
  return (
    <>
      <section className="px-[5%] xl:px-[8%] py-12 md:py-16 lg:py-20">
        <div className="max-w-md mb-24">
          <h1 className="my-3 text-6xl font-semibold font-serif xl:leading-[1.2] md:text-8xl lg:text-7xl">
            Our Team
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col gap-y-8 xl:gap-y-16 self-end">
            <p className="text-lg">
              <span className="font-semibold italic text-xl">Avriel Epps</span>{" "}
              is an accomplished academic, innovative technologist, and
              dedicated advocate for justice and equality in AI. She received
              her Ph.D. in Human Development and SM in Data Science at Harvard.
              Avriel has cultivated a profound understanding of the complex
              interplay between AI, human development, and societal
              transformation. A recognized thought leader, Avriel has sparked
              critical dialogues about algorithmic bias across academia, policy
              circles, and public platforms.
            </p>
            <p className="text-lg">
              <span className="font-semibold italic text-xl">Jordan Epps</span>{" "}
              is an experienced technologist and visionary leader, with a
              deep-rooted commitment to using technology to address systemic
              injustices. Jordan's blend of technical expertise and social
              awareness has been pivotal in guiding the organization's tech
              direction. He brings years of experience in software development,
              data management, and AI applications, honed at top tech firms,
              including Netflix. Jordan's unique skill set and passion for
              justice position him perfectly to transform the AI landscape
              through his work at AI4Abolition, building innovative tech
              solutions that promote fairness and accountability.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <img className="pt-32 rounded" src={avriel} alt="Avriel Epps" />
            <h5 className="font-serif font-semibold text-4xl mt-8 mb-4">
              Avriel Epps, Ph.D.
            </h5>
            <p className="italic font-serif font-extralight text-2xl">
              CEO & Founder
            </p>
          </div>
          <div className="flex flex-col text-center">
            <img className="rounded" src={jordan} alt="Jordan Epps" />
            <h5 className="font-serif font-semibold text-4xl mt-8 mb-4">
              Jordan Epps
            </h5>
            <p className="italic font-serif font-extralight text-2xl">
              CTO & Founder
            </p>
          </div>
        </div>
      </section>
      <section
        id="relume"
        className="px-[5%] xl:px-[8%] py-16 md:py-24 lg:py-28"
      >
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-y-16 lg:grid-cols-5 lg:gap-x-12">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              member={member}
              imgClassName="h-64 w-48"
            />
          ))}
        </div>
      </section>
    </>
  )
}

const teamMembers = [
  {
    image: { src: linh, alt: "Relume placeholder image 1" },
    name: "Linh Nguyen",
    jobTitle: "Executive Assistant",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    ],
  },
  {
    image: {
      src: taylor,
      alt: "Relume placeholder image 1",
    },
    name: "Taylor Ferrari",
    jobTitle: "UX Researcher",
    socialLinks: [
      {
        href: "https://www.linkedin.com/in/taylorferrari/",
        icon: <BiLogoLinkedinSquare className="size-6" />,
      },
    ],
  },
  {
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },
    name: "Ra Ames",
    jobTitle: "UX Designer",
    socialLinks: [
      {
        href: "https://www.linkedin.com/in/raames1/",
        icon: <BiLogoLinkedinSquare className="size-6" />,
      },
    ],
  },
  {
    image: {
      src: carolyn,
      alt: "Relume placeholder image 1",
    },
    name: "Carolyn Wang",
    jobTitle: "Data Science Intern",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    ],
  },
  {
    image: {
      src: sara,
      alt: "Relume placeholder image 1",
    },
    name: "Sara Jin Li",
    jobTitle: "Consultant",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    ],
  },
]
