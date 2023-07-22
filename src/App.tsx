import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App bg-info bg-gradient">
      <Navbar expand="lg" className="my-3 bg-transparent">
        <Container>
          <Navbar.Brand className="fs-4" href="/">
            AI 4 Abolition
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App-body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
