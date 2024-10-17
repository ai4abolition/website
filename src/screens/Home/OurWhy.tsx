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
      const containerStart =
        window.scrollY +
        (containerRef.current?.getBoundingClientRect().top ?? 0)
      const sectionHeight =
        (containerRef.current?.getBoundingClientRect().height ?? 0) /
        contents.length
      const relScrollPosition = window.scrollY - containerStart

      let currentSection = 0
      if (relScrollPosition > sectionHeight * 1.5) currentSection = 2
      else if (relScrollPosition > sectionHeight * 0.5) currentSection = 1

      setActiveSection(currentSection)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section
        id="relume"
        className="px-[5%] xl:px-[8%]  py-16 md:py-24 lg:py-28"
      >
        <div className="container max-w-lg text-center">
          <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-200">
            {en.home.ourWhy.title}
          </p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 leading-[120%] lg:text-7xl font-serif lg:leading-[120%]">
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
      <section
        id="relume"
        className="px-[5%] xl:px-[8%] py-16 md:py-24 lg:py-28"
      >
        <div className="relative grid items-stretch gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          <div ref={containerRef} className="grid grid-cols-1 gap-12 md:block">
            {contents.map(({ key, heading, description, image }) => (
              <div key={key} className="">
                <div className="flex flex-col items-start justify-center md:h-screen">
                  <p className="mb-5 font-semibold md:mb-8 uppercase text-black-olive-200 text-base">
                    {en.home.ourWhy.title}
                  </p>
                  <h2 className="rb-5 mb-5 text-5xl font-semibold font-serif md:mb-6 md:text-7xl lg:text-6xl">
                    {heading}
                  </h2>
                  <p className="text-base max-w-md">{description}</p>
                  <div className="mt-10 block w-full md:hidden">
                    <img src={image.src} className="w-full" alt={image.alt} />
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
                className={clsx("absolute max-w-[750px]", {
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
    key: 0,
    heading: en.home.ourWhy.sections[0].title,
    description: en.home.ourWhy.sections[0].description,
    image: { src: Why1, alt: "Why 1" },
  },
  {
    key: 1,
    heading: en.home.ourWhy.sections[1].title,
    description: en.home.ourWhy.sections[1].description,
    image: { src: Why2, alt: "Why 2" },
  },
  {
    key: 2,
    heading: en.home.ourWhy.sections[2].title,
    description: en.home.ourWhy.sections[2].description,
    image: { src: Why3, alt: "Why 3" },
  },
]
