import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi"

import andy from "../../assets/headshots/Andy.png"
import anika from "../../assets/headshots/Anika.png"
import bMack from "../../assets/headshots/BMcKensie.png"
import greg from "../../assets/headshots/Greg.png"
import patrisse from "../../assets/headshots/Patrisse.png"
import safiiya from "../../assets/headshots/Safiiya.png"
import xEyee from "../../assets/headshots/XEyee.png"
import zarinah from "../../assets/headshots/Zarinah.png"
import { TeamMember } from "../Team/TeamMember"

type ImageProps = {
  src: string
  alt?: string
}

type SocialLink = {
  href: string
  icon: React.ReactNode
}

type TeamMember = {
  image: ImageProps
  name: string
  jobTitle: string
  description: string
  socialLinks: SocialLink[]
}

export const Collaborators = () => {
  return (
    <section id="relume" className="px-[5%] xl:px-[8%] py-16 md:py-24 lg:py-28">
      <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
        <h2 className="mb-6 mt-4 font-serif rb-5 mb-5 text-3xl font-semibold md:mb-6 md:text-5xl lg:text-7xl">
          Advisors
        </h2>
        <p className="text-base">
          Our work is guided by the wisdom of some of the most notable voices in
          algorithmic justice, abolitionist praxis, organizational impact, and
          youth empowerment.
        </p>
      </div>
      <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-24 lg:grid-cols-4 ">
        {collaborators.map((member) => (
          <TeamMember key={member.name} member={member} round size="48" />
        ))}
      </div>
    </section>
  )
}

const collaborators = [
  {
    image: { src: safiiya, alt: "Safiya Noble Head Shot" },
    name: "Safiya Noble, Ph.D.",
    jobTitle: "UCLA Professor, Founder of Center for Race & Digital Justice",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: { src: patrisse, alt: "Patrisse Cullors head shot" },
    name: "Patrisse Cullors",
    jobTitle: "Artist & Abolitionist, CoFounder Black Lives Matter",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: { src: xEyee, alt: "X. Eyee head shot" },
    name: "X. Eyee",
    jobTitle: "Former Global Strategy Lead @ Google Responsible AI",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: { src: greg, alt: "Greg Gunn head shot" },
    name: "Greg Gunn",
    jobTitle: "Co-Founder of Ling Ventures and Amplify",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: { src: zarinah, alt: "Zarinah Agnew head shot" },
    name: "Zarinah Agnew",
    jobTitle: "Neuroscientist, President of District Commons",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: { src: andy, alt: "Andy Reimer head shot" },
    name: "Andy Reimer",
    jobTitle: "Principal at SidePorch",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: { src: bMack, alt: "B. Mack head shot" },
    name: "B. Mckensie Mack",
    jobTitle: "CEO of MMG Earth",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: { src: anika, alt: "Anika Navaroli head shot" },
    name: "Anika Collier Navaroli",
    jobTitle: "Senior Fellow at Columbia University Tow Center",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
]
