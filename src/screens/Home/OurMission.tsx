import { motion, useScroll, useTransform } from "framer-motion"
import { RefObject, useRef } from "react"

import en from "../../locales/en.json"

export const OurMission = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)

  const words = en.home.ourMission.body.split(" ")

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-reseda-green-200"
    >
      <div className="m-auto max-w-2xl text-center xl:px-48">
        <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-300">
          {en.home.ourMission.title}
        </p>
        <h1
          ref={headingRef}
          className="text-5xl font-bold md:text-7xl lg:text-8xl font-serif text-black-olive-400"
        >
          {words.map((word, index) => (
            <Word
              key={word + index}
              word={word}
              index={index}
              words={words}
              headingRef={headingRef}
            />
          ))}
        </h1>
      </div>
    </section>
  )
}

interface Props {
  word: string
  words: string[]
  index: number
  headingRef: RefObject<HTMLHeadingElement>
}

const Word = ({ word, index, headingRef, words }: Props) => {
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start center", "end center"],
  })
  const start = index * 0.025
  const end = start + 0.025
  const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1])

  return (
    <>
      <motion.span className="inline-block" style={{ opacity }}>
        {word}
      </motion.span>
      {index < words.length - 1 && " "}
    </>
  )
}
