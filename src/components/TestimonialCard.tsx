import { ImageProps } from "../types"

export type Testimonial = {
  quote: string
  logo: ImageProps
  avatar: ImageProps
  name: string
  position: string
  companyName: string
}

interface Props {
  testimonial: Testimonial
}

export const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="container max-w-lg">
      <div className="flex flex-col items-center text-center">
        <blockquote className="my-6 text-xl font-bold md:my-8 md:text-2xl font-serif">
          {testimonial.quote}
        </blockquote>
        <div className="flex flex-col items-center justify-center">
          <img
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt}
            className="mb-4 size-16 min-h-16 min-w-16 rounded-[50%] object-cover"
          />
          <div className="flex flex-col items-center justify-center ">
            <p className="font-semibold text-earth-yellow-400 font-serif">
              {testimonial.name}
            </p>
            <p className="font-light">
              <span>{testimonial.position}</span> at{" "}
              <span>{testimonial.companyName}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
