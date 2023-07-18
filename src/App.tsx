import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">AI4Abolition</Navbar.Brand>
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
      <footer className="App-footer">
        <Container>
          <Stack direction="horizontal">
            <h6>
              AI4Abolition: Empowering Communities. Building an Inclusive
              Future.
            </h6>
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about" eventKey="link-1">
                About
              </Nav.Link>
            </Nav>
          </Stack>
        </Container>
      </footer>
    </div>
  );
}

export default App;
