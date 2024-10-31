import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Footer } from "./components/Footer"
import { Navbar } from "./components/NavBar"
import { About } from "./screens/About"
import { Home } from "./screens/Home"
import { Resources } from "./screens/Resources"

export const App = () => {
  return (
    <div className="bg-timberwolf-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
