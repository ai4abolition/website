import { Button } from "@relume_io/relume-ui"
import Lottie from "react-lottie"
import headerLogo from "../../assets/AI4_HeaderLogo_Animation.json"
import heroImage from "../../assets/hero-image.png"
import en from "../../locales/en.json"
import { motion } from "framer-motion"

import { OurMission } from "./OurMission"
import { WhatWeDo } from "./WhatWeDo"
import { OurWhy } from "./OurWhy"
import { Solutions } from "./Solutions"
import clsx from "clsx"

export const Home = () => {
  return (
    <>
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 lg:grid-cols-3 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div className="lg:col-span-2">
            <Lottie options={{ animationData: headerLogo }} />
          </div>
          <div>
            <p className="md:text-md">{en.home.hero.description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button className="rounded">Donate</Button>
              <Button variant="secondary" className="rounded">
                Join Us
              </Button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            className="w-full object-cover"
            alt="Hero Image"
          />
          <div className="bg-timberwolf-100 absolute bottom-0 left-0 max-w-[1035px] rounded-tr-[35px] pl-[24px] pb-[32px] pr-[50px] pt-[59px]">
            <h2 className="font-serif text-9xl font-semibold">
              {en.home.hero.imageText}
            </h2>
          </div>
        </div>
      </section>
      <WhatWeDo />
      <OurMission />
      <OurWhy />
      <Solutions />
      <section
        id="relume"
        className="px-[5%] py-16 md:py-24 lg:py-56 bg-reseda-green-200"
      >
        <div className="container">
          <div className="mx-auto w-full max-w-lg text-center">
            <motion.h1
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className={clsx(
                "text-6xl font-semibold md:text-9xl lg:text-10xl font-serif",
                {
                  "mb-5 md:mb-6": 0 !== 0,
                },
              )}
            >
              Join us in co-creating the
              <br />
              <span className="italic font-light">future of justice.</span>
            </motion.h1>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button className="rounded">Donate</Button>
              <Button
                variant="secondary-alt"
                className="rounded text-black border-black"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
