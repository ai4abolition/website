import { motion, useScroll, useTransform } from "framer-motion"
import { RefObject, useRef } from "react"

import en from "../../locales/en.json"

export const OurMission = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)

  const words = en.home.ourMission.body.split(" ")

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] xl:px-[8%]  py-16 md:py-24 lg:py-28 bg-reseda-green-200"
    >
      <div className="m-auto max-w-2xl text-center xl:px-48">
        <p className="mb-5 font-semibold md:mb-10 uppercase text-black-olive-300 text-lg">
          {en.home.ourMission.title}
        </p>
        <h1
          ref={headingRef}
          className="text-4xl font-bold md:text-5xl lg:text-6xl font-serif text-black-olive-400"
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
  const start = index * (1 / words.length)
  const end = start + 1 / words.length
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
