import { motion, useScroll, useTransform } from "framer-motion"
import { RefObject } from "react"

interface Props {
  word: string
  words: string[]
  index: number
  headingRef: RefObject<HTMLHeadingElement>
}

export const Word = ({ word, index, headingRef, words }: Props) => {
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
