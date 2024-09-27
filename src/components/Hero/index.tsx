"use client"

import { Button } from "@relume_io/relume-ui"
import type { ButtonProps } from "@relume_io/relume-ui"
import Lottie from "react-lottie"
import headerLogo from "../../assets/AI4_HeaderLogo_Animation 0.5x.json"
import heroImage from "../../assets/hero-image.png"

type Props = {
  buttons: ButtonProps[]
}

export type Header17Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>

export const Header17 = (props: Header17Props) => {
  const { buttons } = {
    ...Header17Defaults,
    ...props,
  } as Props

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 lg:grid-cols-3 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
        <div className="lg:col-span-2">
          <Lottie options={{ animationData: headerLogo }} />
        </div>
        <div>
          <p className="md:text-md">
            We are a nonprofit organization promoting AI literacy and developing
            open source tools for a just and regenerative future. We center the
            experiences of Black and Indigenous women, queer, and youth leaders.
          </p>
          <div className="mt-6 flex gap-x-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button} className="rounded">
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={heroImage} className="w-full object-cover" alt="Hero Image" />
        <div className="bg-background-primary absolute bottom-0 left-0 max-w-[1035px] rounded-tr-[35px] pl-[24px] pb-[32px] pr-[50px] pt-[59px]">
          <h2 className="font-serif text-9xl font-semibold">
            Building collective power with and around artificial intelligence.
          </h2>
        </div>
      </div>
    </section>
  )
}

export const Header17Defaults: Header17Props = {
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
}
