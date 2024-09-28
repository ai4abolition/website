import { Hero } from "./Hero"
import { OurMission } from "./OurMission"
import { WhatWeDo } from "./WhatWeDo"
import { WhyWeDo } from "./WhyWeDo"

export const Home = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurMission />
      <WhyWeDo />
    </>
  )
}
