import { Button } from "@relume_io/relume-ui"
import { Link } from "react-router-dom"

import en from "../../locales/en.json"

export const Resources = () => {
  return (
    <section
      id="relume"
      className="px-[5%] xl:px-[8%]  py-16 md:py-24 lg:py-28"
    >
      <div className="">
        <div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-200 text-base">
            Resources
          </p>
          <h2 className="rb-5 mb-5 text-3xl font-semibold font-serif md:mb-6 md:text-6xl lg:text-7xl lg:leading-[120%]">
            Access Our Advocacy
            <br /> Library
          </h2>
          <p className="text-base">
            Empower change through knowledge and action.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
          {en.resources.content.map((post, index) => (
            <div key={index}>
              <a
                href={post.url}
                className="mb-6 inline-block w-full max-w-full"
              >
                <div className="w-full overflow-hidden rounded">
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a href={post.url} className="mb-2 block max-w-full font-serif">
                <h5 className="text-xl font-semibold md:text-3xl">
                  {post.title}
                </h5>
              </a>
              <p className="text-lg">{post.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link to="/resources">
            <Button
              variant="secondary"
              className="mt-10 md:mt-14 lg:mt-16 uppercase bg-transparent rounded text-base"
            >
              View More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
