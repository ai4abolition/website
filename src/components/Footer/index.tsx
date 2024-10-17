import { Button } from "@relume_io/relume-ui"
import { motion } from "framer-motion"
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

import Ai4Large from "../../assets/AI4Abolition_horizontal_black_vector.png"
import FooterBg from "../../assets/footer-bg.png"

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
    <>
      <section className="px-[5%] xl:px-[8%] py-16 md:py-24 lg:py-48 bg-reseda-green-200">
        <div className="container">
          <div className="mx-auto w-full max-w-lg text-center">
            <motion.h1
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="font-serif text-6xl font-semibold md:text-9xl lg:text-7xl lg:leading-[120%]"
            >
              Join us in co-creating the
            </motion.h1>
            <motion.h1
              initial={{ x: "50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="font-serif text-6xl italic font-light md:text-9xl lg:text-7xl mb-5 md:mb-6  lg:leading-[120%]"
            >
              future of justice.
            </motion.h1>
            <div className="pt-2 flex items-center justify-center gap-x-4 md:pt-4">
              <Button className="rounded uppercase text-base">Donate</Button>
              <Button
                variant="secondary-alt"
                className="rounded text-black border-black uppercase text-base"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div style={{ backgroundImage: `url(${FooterBg})` }} className="bg-cover">
        <footer
          style={{
            background:
              "linear-gradient(270deg, rgba(30, 32, 31, 0.00) 0.23%, #1E201F 75.77%)",
          }}
          className="px-[5%] xl:px-[8%] py-12 md:py-18 lg:py-20 text-timberwolf-100"
        >
          <div className="gap-x-auto gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:gap-y-4 lg:pb-48 flex justify-between">
            {columnLinks.map((column, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start"
              >
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="py-2 text-lg">
                      <Link
                        to={link.url}
                        className="flex items-center gap-3 medium"
                      >
                        {link.icon && <span>{link.icon}</span>}
                        <span>{link.title}</span>
                      </Link>
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
              © 2024 AI4Abolition. A nonprofit organization. All rights
              reserved.
            </p>
            <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
              {footerLinks.map((link, index) => (
                <li key={index} className="underline text-sm">
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </>
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
