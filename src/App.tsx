import { Navbar } from "./components/NavBar"
import Logo from "./assets/condensed-logo.svg"
import { Home } from "./screens/Home"

export const App = () => {
  return (
    <div className="bg-timberwolf-100">
      <Navbar
        navLinks={[
          { title: "Explore", url: "/" },
          { title: "About", url: "/about" },
          { title: "Resources", url: "/resources" },
        ]}
        buttons={[{ title: "Donate" }]}
        logo={{ src: Logo }}
      />
      <Home />
    </div>
  )
}
