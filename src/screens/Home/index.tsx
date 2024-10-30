import { Button } from "@relume_io/relume-ui"
import Lottie from "react-lottie"

import headerLogo from "../../assets/AI4_HeaderLogo_Animation.json"
import classroomKids from "../../assets/classroom-kids.png"
import heroImage from "../../assets/hero-image.png"
import { DonateButton } from "../../components/DonateButton"
import en from "../../locales/en.json"
import { OurMission } from "./OurMission"
import { OurWhy } from "./OurWhy"
import { Resources } from "./Resources"
import { Solutions } from "./Solutions"
import { Testimonials } from "./Testimonials"
import { WhatWeDo } from "./WhatWeDo"

export const Home = () => {
  return (
    <>
      <section
        id="relume"
        className="px-[5%] xl:px-[8%] py-16 md:py-24 lg:py-28"
      >
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 lg:grid-cols-3 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div className="lg:col-span-2">
            <Lottie options={{ animationData: headerLogo }} />
          </div>
          <div className="xl:pl-24">
            <p className="text-base">{en.home.hero.description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <DonateButton />
              <Button
                variant="secondary"
                className="rounded uppercase text-base"
              >
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
          <div className="bg-timberwolf-100 absolute bottom-0 left-0 w-7/12 rounded-tr-[35px] p-4 lg:pl-[24px] lg:pb-[32px] lg:pr-[50px] lg:pt-[59px]">
            <h2 className="font-serif xl:text-7xl lg:text-3xl text-xl font-semibold xl:leading-[120%]">
              {en.home.hero.imageText}
            </h2>
          </div>
        </div>
      </section>
      <WhatWeDo />
      <OurMission />
      <OurWhy />
      <Solutions />
      <section className="px-[5%] xl:px-[8%]  py-16 md:py-24 lg:pt-32">
        <div>
          <img src={classroomKids} />
        </div>
      </section>
      <Testimonials />
      <Resources />
    </>
  )
}
