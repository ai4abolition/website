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
}

export const TeamMember = ({ member, round }: Props) => {
  return (
    <div className="flex flex-col items-stretch text-center">
      <div className="relative mb-5 size-full overflow-hidden md:mb-6">
        <img
          src={member.image.src}
          alt={member.image.alt}
          className={clsx(
            "size-full object-cover rounded",
            round ? "rounded-full" : "rounded",
          )}
        />
      </div>
      <div className="mb-3 md:mb-4">
        <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
        <h6 className="md:text-md">{member.jobTitle}</h6>
      </div>
      <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
        {member.socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
