import { Container, Nav, Stack } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="App-footer bg-black text-white p-5">
      <Container>
        <Stack direction="horizontal" className="d-flex">
          <div className="text-start w-50">
            <h1 className="mb-5">AI 4 Abolition</h1>
            <p className="fs-5">
              AI4Abolition is an abolitionist-led organization that focuses on
              leveraging the power of artificial intelligence (AI) to challenge
              systemic inequality and prioritize transformative justice. We aim
              to empower individuals, organizations, and communities with the
              tools, knowledge, and resources needed to navigate an AI-driven
              future while upholding the principles of abolitionist values. We
              offer education services, consulting services, research, AI
              audits, and community prototyping.
            </p>
          </div>
          <div className="w-50 align-self-start">
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link className="link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="link" href="/about" eventKey="link-1">
                About
              </Nav.Link>
            </Nav>
          </div>
        </Stack>
      </Container>
    </footer>
  );
};
