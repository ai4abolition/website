import { FaXTwitter } from "react-icons/fa6"
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi"
import FooterBg from "../../assets/footer-bg.png"
import Ai4Large from "../../assets/AI4Abolition_horizontal_black_vector.png"

type Links = {
  title: string
  url: string
  icon?: React.ReactNode
}

type ColumnLinks = {
  title: string
  links: Links[]
}

type FooterLink = {
  title: string
  url: string
}

type Props = {
  columnLinks: ColumnLinks[]
  footerLinks: FooterLink[]
}

type Footer1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>

export const Footer = (props: Footer1Props) => {
  const { columnLinks, footerLinks } = {
    ...Footer1Defaults,
    ...props,
  } as Props
  return (
    <div style={{ backgroundImage: `url(${FooterBg})` }} className="bg-cover">
      <footer
        style={{
          background:
            "linear-gradient(270deg, rgba(30, 32, 31, 0.00) 0.23%, #1E201F 75.77%)",
        }}
        className="px-[5%] py-12 md:py-18 lg:py-20 text-timberwolf-100"
      >
        <div className="grid grid-cols-1 gap-x-auto gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr,1fr] lg:gap-y-4 lg:pb-48">
          {columnLinks.map((column, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start"
            >
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="py-2 text-sm">
                    <a href={link.url} className="flex items-center gap-3">
                      {link.icon && <span>{link.icon}</span>}
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ mixBlendMode: "soft-light" }} className="pb-12">
          <img src={Ai4Large} />
        </div>
        <div className="h-px w-full bg-transparent" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-6 md:mt-0">
            © 2024 AI4Abolition. A nonprofit organization. All rights reserved.
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline">
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}

const Footer1Defaults: Footer1Props = {
  columnLinks: [
    {
      title: "Column One",
      links: [
        { title: "Explore", url: "/" },
        { title: "About", url: "about" },
        { title: "Advocacy Library", url: "resources" },
      ],
    },
    {
      title: "Follow us",
      links: [
        {
          title: "Facebook",
          url: "#",
          icon: <BiLogoFacebookCircle className="size-6" />,
        },
        {
          title: "Instagram",
          url: "#",
          icon: <BiLogoInstagram className="size-6" />,
        },
        { title: "X", url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        {
          title: "LinkedIn",
          url: "#",
          icon: <BiLogoLinkedinSquare className="size-6" />,
        },
      ],
    },
  ],
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
  ],
}
