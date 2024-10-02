import clsx from "clsx"
import { useEffect, useRef, useState } from "react"

import Why1 from "../../assets/why1.png"
import Why2 from "../../assets/why2.png"
import Why3 from "../../assets/why3.png"
import en from "../../locales/en.json"

export const OurWhy = () => {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight =
        containerRef.current?.getBoundingClientRect().height ?? 0
      const currentScrollPosition = window.scrollY + sectionHeight / 2
      const currentSection = Math.floor(currentScrollPosition / sectionHeight)
      setActiveSection(currentSection)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  console.log({ activeSection })
  return (
    <>
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-lg text-center">
          <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-200">
            {en.home.ourWhy.title}
          </p>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl font-serif">
            Together, we must make{" "}
            <span className="italic font-light">artificial intelligence</span>{" "}
            work for <span className="italic font-light">justice</span>, not
            against it.
          </h1>
          <p className="md:text-md text-black-olive-400">
            {en.home.ourWhy.caption}
          </p>
        </div>
      </section>
      <section id="relume" className="px-[5%]">
        <div className="relative grid items-stretch gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          <div ref={containerRef} className="grid grid-cols-1 gap-12 md:block">
            {contents.map((content, index) => (
              <div key={index} className="max-w-md">
                <div className="flex flex-col items-start justify-center md:h-screen">
                  <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-200">
                    {en.home.ourWhy.title}
                  </p>
                  <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    {content.heading}
                  </h2>
                  <p className="md:text-md">{content.description}</p>
                  <div className="mt-10 block w-full md:hidden">
                    <img
                      src={content.image.src}
                      className="w-full"
                      alt={content.image.alt}
                    />
                  </div>
                </div>
                <div
                  className={clsx(
                    "fixed inset-0 -z-10 bg-[#e5e5e5] transition-opacity duration-300",
                    {
                      "opacity-100": activeSection === 0 || activeSection === 2,
                      "opacity-0": activeSection !== 0 && activeSection !== 2,
                    },
                  )}
                />
              </div>
            ))}
          </div>
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            {contents.map(({ image, key }) => (
              <img
                key={key}
                src={image.src}
                className={clsx("absolute w-full", {
                  "opacity-100": activeSection === key,
                  "opacity-0": activeSection !== key,
                })}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const contents = [
  {
    key: 1,
    heading: en.home.ourWhy.sections[0].title,
    description: en.home.ourWhy.sections[0].description,
    image: { src: Why1, alt: "Why 1" },
  },
  {
    key: 2,
    heading: en.home.ourWhy.sections[1].title,
    description: en.home.ourWhy.sections[1].description,
    image: { src: Why2, alt: "Why 2" },
  },
  {
    key: 3,
    heading: en.home.ourWhy.sections[2].title,
    description: en.home.ourWhy.sections[2].description,
    image: { src: Why3, alt: "Why 3" },
  },
]
