import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi"
import { FaXTwitter } from "react-icons/fa6"

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
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
        <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-300">
          Collaborators
        </p>
        <h2 className="font-serif rb-5 mb-5 text-5xl font-semibold md:mb-6 md:text-7xl lg:text-8xl">
          Collaborators
        </h2>
        <p className="md:text-md">
          Our work is guided by the wisdom of some of the most notable voices in
          algorithmic justice, abolitionist praxis, organizational impact, and
          youth empowerment.
        </p>
      </div>
      <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4 ">
        {collaborators.map((member) => (
          <TeamMember key={member.name} member={member} round />
        ))}
      </div>
    </section>
  )
}

const collaborators = [
  {
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },
    name: "Full name",
    jobTitle: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },
    name: "Full name",
    jobTitle: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 3",
    },
    name: "Full name",
    jobTitle: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 4",
    },
    name: "Full name",
    jobTitle: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 5",
    },
    name: "Full name",
    jobTitle: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 6",
    },
    name: "Full name",
    jobTitle: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 7",
    },
    name: "Full name",
    jobTitle: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
]
