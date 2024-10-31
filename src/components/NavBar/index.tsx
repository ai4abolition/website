"use client"

import { Button } from "@relume_io/relume-ui"
import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

import BlackLogo from "../../assets/condensed-logo.svg?react"
import WhiteLogo from "../../assets/condensed-logo-white.svg?react"
import { DonateButton } from "../DonateButton"

const navLinks = [
  {
    key: "home",
    url: "/",
    label: "Explore",
  },
  {
    key: "about",
    url: "about",
    label: "About",
  },
  {
    key: "resources",
    url: "resources",
    label: "Resources",
  },
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const darkMode = location.pathname.includes("about")

  return (
    <nav
      className={clsx(
        "grid h-auto w-full grid-cols-[1fr_max-content_1fr] items-center justify-between px-[5%] xl:px-[8%] md:min-h-18",
        darkMode && "bg-black-olive-400 text-timberwolf-100",
      )}
    >
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <span
              key={index}
              className="my-[3px] h-0.5 w-6 bg-black lg:hidden"
            />
          ))}
      </button>
      <AnimatePresence>
        <motion.div
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          exit="closed"
          variants={{
            closed: {
              x: "-100%",
              opacity: 1,
              transition: { type: "spring", duration: 0.6, bounce: 0 },
              transitionEnd: {
                opacity: "var(--opacity-closed, 0%)",
                x: "var(--x-closed, -100%)",
              },
            },
            open: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 0.4, bounce: 0 },
            },
          }}
          className="absolute left-0 top-0 z-50 flex h-dvh w-[90%] flex-col border-r border-border-primary bg-white md:bg-inherit px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
        >
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            to="/"
            className="mb-8 mt-10 flex flex-shrink-0 lg:hidden"
          >
            {darkMode ? <WhiteLogo /> : <BlackLogo />}
          </Link>
          {navLinks.map((navLink) => (
            <div key={navLink.key} className="w-full lg:w-auto ">
              <NavLink
                onClick={() => setIsMobileMenuOpen(false)}
                to={navLink.url}
                className={({ isActive }) =>
                  clsx(
                    "relative block py-3 text-md lg:px-4 lg:py-2 lg:text-base",
                    {
                      "font-semibold": isActive,
                      "text-black-olive-300": !isActive && !darkMode,
                      "text-timberwolf-100": darkMode && isActive,
                      "text-black-olive-100": darkMode && !isActive,
                    },
                  )
                }
              >
                {navLink.label}
              </NavLink>
            </div>
          ))}
          <div className="mt-6 lg:hidden">
            <Button className="w-full">Donate</Button>
          </div>
        </motion.div>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <Link to="/" className="flex min-h-16 flex-shrink-0 items-center">
        {darkMode ? <WhiteLogo /> : <BlackLogo />}
      </Link>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div>
          <DonateButton
            darkMode={darkMode}
            buttonClasses="px-4 py-1 md:px-6 md:py-2"
          />
        </div>
      </div>
    </nav>
  )
}
