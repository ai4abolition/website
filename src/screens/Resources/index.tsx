import en from "../../locales/en.json"

export const Resources = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4 uppercase text-black-olive-200 text-base">
            Resources
          </p>
          <h1 className="font-serif mb-5 text-3xl font-semibold md:mb-6 md:text-5xl lg:text-7xl">
            Advocacy Library
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-start">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
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

              <a href={post.url} className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">{post.title}</h5>
              </a>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
