import { Button } from "react-bootstrap";

export const About = () => {
  return (
    <div className="About-container">
      <section className="About-jumbotron">
        <h1 className="About-header">About Us: AI for the People</h1>
        <h4>
          Get to Know AI4Abolition, a Worker-Owned Cooperative Committed to
          Social Justice
        </h4>
      </section>
      <section className="About-section">
        <h5>Our Story</h5>
        <p>
          AI4Abolition was born from a dream to reshape the narrative around
          artificial intelligence (AI) and its potential to uplift communities.
          Founded by Dr. Jaquan Johnson, a visionary leader in both AI and
          abolitionist movements, our cooperative is an embodiment of the belief
          that technology can be a powerful tool for liberation.
        </p>
      </section>
      <section className="About-section">
        <h5>Our Mission and Vision</h5>
        <p>
          Our mission is to harness the power of AI to uproot systemic
          injustices and build a more equitable and inclusive society. We
          envision a future where AI is a tool for abolition, education, and
          social transformation. A future where technology serves all of us, not
          just a privileged few.
        </p>
      </section>
      <section className="About-section">
        <h5>Our Cooperative Structure</h5>
        <p>
          As a worker-owned cooperative, we believe in the power of collective
          action. Every member of our team has a voice in decision-making and
          shares in the profits of our work. This structure enables us to align
          our business practices with our abolitionist values and to ensure that
          our work truly benefits the communities we serve.
        </p>
      </section>
      <section className="About-section">
        <h5>Our Team</h5>
        <p>
          AI4Abolition is a collective of technologists, educators, social
          justice advocates, and abolitionists. Our diverse backgrounds and
          shared commitment to social justice allow us to approach AI from a
          unique, human-centered perspective. We are dedicated to ongoing
          learning, fostering an inclusive culture, and using our skills to make
          a positive impact.
        </p>
        <Button>Meet Our Team</Button>
      </section>
      <section className="About-section">
        <h5>Our Community</h5>
        <p>
          We are more than just a tech company. We are a part of a vibrant,
          global community of people who believe in the transformative power of
          AI. Together, we are working to build a future where everyone can
          thrive.
        </p>
        <Button>Join Our Community</Button>
      </section>
      <section className="About-section">
        <h5>Our Advisory Board</h5>
        <p>
          Guided by a board of accomplished advisors, including esteemed
          educators, technologists, and abolitionists, we are continually
          refining our strategy to align with the evolving needs of the
          communities we serve.
        </p>
        <Button>Meet Our Advisory Board</Button>
      </section>
    </div>
  );
};
