import { Navbar } from "./components/NavBar"
import Logo from "./assets/condensed-logo.svg"
import { Header17 } from "./components/Hero"
import { WhatWeDo } from "./components/WhatWeDo"

export const App = () => {
  return (
    <>
      <Navbar
        navLinks={[
          { title: "Explore", url: "/" },
          { title: "About", url: "/about" },
          { title: "Resources", url: "/resources" },
        ]}
        buttons={[{ title: "Donate" }]}
        logo={{ src: Logo }}
      />
      <Header17 />
      <WhatWeDo />
    </>
  )
}
