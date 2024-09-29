import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/NavBar"
import { Home } from "./screens/Home"
import { Footer } from "./components/Footer"

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
