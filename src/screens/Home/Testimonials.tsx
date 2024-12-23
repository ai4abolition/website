import type { CarouselApi } from "@relume_io/relume-ui"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui"
import clsx from "clsx"
import React from "react"
import { useEffect, useState } from "react"

import tracy from "../../assets/headshots/tracy.jpeg"
import { Testimonial, TestimonialCard } from "../../components/TestimonialCard"

type Props = {
  testimonials: Testimonial[]
}

type Testimonial7Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>

export const Testimonials = (props: Testimonial7Props) => {
  const { testimonials } = {
    ...Testimonial7Defaults,
    ...props,
  } as Props

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] xl:px-[8%]  py-16 md:py-24 lg:py-28 bg-black-olive-400 text-timberwolf-50"
    >
      {/* for all available options: https://www.embla-carousel.com/api/options/ */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="overflow-hidden"
      >
        <div className="relative">
          <CarouselContent className="ml-0 md:mx-3">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-0 md:basis-full md:px-16"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="mt-8 hidden bg-black-olive-400 rounded hover:bg-black-olive-300 border-none  md:flex md:size-14 text-timberwolf-100" />
          <CarouselNext className="mt-8 hidden bg-black-olive-400 rounded hover:bg-black-olive-300 border-none md:flex md:size-14 text-timberwolf-100" />
        </div>
        <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx("relative mx-[3px] inline-block size-2 rounded", {
                "bg-timberwolf-50": current === index + 1,
                "bg-black-olive-300": current !== index + 1,
              })}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}

const Testimonial7Defaults: Testimonial7Props = {
  testimonials: [
    {
      quote:
        "Our TikTok Trust & Safety team had the great opportunity to learn from AI4Abolition about the nuances and real-world impact of algorithmic bias. Their virtual lecture was incredibly impactful and helped bolster our team's understanding in this space. Their combination of subject-matter expertise and approachable teaching style resulted in a meaningful and memorable session. ",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Webflow logo 1",
      },
      avatar: {
        src: tracy,
        alt: "Dr. Tracy Elizabeth",
      },
      name: "Dr. Tracy Elizabeth",
      position: "Global Head of Family Safety & Developmental Health",
      companyName: "TikTok",
    },
  ],
}
