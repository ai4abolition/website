import clsx from "clsx"

import { ImageProps, SocialLink } from "../../types"

type TeamMember = {
  image: ImageProps
  name: string
  jobTitle: string
  socialLinks: SocialLink[]
}

interface Props {
  member: TeamMember
  round?: boolean
  size?: string | "full"
}

export const TeamMember = ({ member, round, size = "full" }: Props) => {
  return (
    <div className="flex flex-col items-stretch text-center">
      <div
        className={clsx(
          `self-center rounded w-${size}`,
          round ? "rounded-full" : "rounded",
        )}
      >
        <img
          src={member.image.src}
          alt={member.image.alt}
          className={clsx(round ? "rounded-full" : "rounded")}
        />
      </div>
      <div className="mb-3 md:my-6">
        <h5 className="text-md font-semibold md:text-3xl font-serif md:tracking-[-0.64px] md:leading-[1.3]">
          {member.name}
        </h5>
        <h6 className="text-2xl italic font-light tracking-[-0.48px] leading-[1.5]">
          {member.jobTitle}
        </h6>
      </div>
      <div className="grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
        {member.socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
