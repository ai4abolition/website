import { Button } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="Home-container">
      <section className="Home-jumbotron">
        <h1 className="Home-header">
          AI4Abolition: Leveraging Technology for Liberation
        </h1>
        <h4>
          Welcome to AI4Abolition, a worker-owned cooperative committed to
          building a future where artificial intelligence fosters justice and
          equality.
        </h4>
      </section>
      <section className="Home-section">
        <h5>Our Mission</h5>
        <p>
          AI4Abolition envisions a world where artificial intelligence (AI) is
          used to uproot systemic injustices and create a truly inclusive
          society. Our mission is to harness AI as a tool for abolition,
          education, and social transformation. We aim to create AI-driven
          solutions that promote justice, mitigate bias, and empower the
          community.
        </p>
        <Button>Learn More</Button>
      </section>
      <section className="Home-section">
        <h5>Our Services</h5>
        <p>
          As pioneers at the intersection of technology and social justice, we
          offer a wide range of services, including AI consulting, education,
          and software development, always with an abolitionist lens.
        </p>
        <Button>Explore Our Services</Button>
      </section>
      <section className="Home-section">
        <h5>Join the Movement</h5>
        <p>
          Be part of a collective effort to shape the future of AI in a way that
          prioritizes humanity, equity, and justice. By joining AI4Abolition,
          you're becoming a part of a vibrant community that believes in the
          power of technology to transform society.
        </p>
        <Button>Join Us</Button>
      </section>
      <section className="Home-section">
        <h5>Resources</h5>
        <p>
          We believe knowledge is power. Explore our comprehensive repository of
          resources designed to educate and empower. Learn more about AI, the
          abolitionist movement, and how they intersect.
        </p>
        <Button>Explore Resources</Button>
      </section>
      <section className="Home-section">
        <h5>Testimonials</h5>
        <p></p>
        <Button>Read More Stories</Button>
      </section>
      <section className="Home-section">
        <h5>Support Our Work</h5>
        <p>
          Your support helps us continue our mission to leverage AI for social
          good. Join us in making a meaningful difference in the world.
        </p>
        <Button>Donate Now</Button>
      </section>
    </div>
  );
};
