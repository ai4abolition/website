import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/NavBar"
import { Home } from "./screens/Home"

export const App = () => {
  return (
    <div className="bg-timberwolf-100">
      <BrowserRouter>
        <Navbar
          navLinks={[
            { title: "Explore", url: "/" },
            { title: "About", url: "/about" },
            { title: "Resources", url: "/resources" },
          ]}
          buttons={[{ title: "Donate" }]}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<></>} />
          <Route path="/resources" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
