import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Footer } from "./components/Footer"
import { Navbar } from "./components/NavBar"
import { Home } from "./screens/Home"

export const App = () => {
  return (
    <div className="bg-timberwolf-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<></>} />
          <Route path="/resources" element={<></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
