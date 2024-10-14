import { ReactNode } from "react"

export type ImageProps = {
  src: string
  alt?: string
}

export type SocialLink = {
  href: string
  icon: ReactNode
}
