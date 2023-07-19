import Heading from "../components/heading";
const Index = ({}) => {
  return (
    <>
      <Heading title={"David's Portfolio"} />
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="welcome-section" className="welcome-section">
        <h1>Hey, I am David</h1>
        <p>I'm a Full Stack Developer</p>
      </section>

      <section id="projects" className="projects-section">
        <h2 className="projects-section-header">
          Some of my projects...
        </h2>

        <div className="projects-grid">
          <a
            href="https://rock-paper-scissors-lizard-spock-gilt.vercel.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://rock-paper-scissors-lizard-spock-gilt.vercel.app/images/screenshot.jpg"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Rock Paper Scissor Lizard Spock
              <span className="code">/&gt;</span>
            </p>
          </a>

          <a
            href="https://rest-countries-api-with-color-theme-switcher-bay.vercel.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://rest-countries-api-with-color-theme-switcher-bay.vercel.app/images/screenshot.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Country List (React, Redux, Redux Toolkit, Next, API)
              <span className="code">/&gt;</span>
            </p>
          </a>

          <a
            href="https://linkedin-two-chi.vercel.app/"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://placehold.co/600x400"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              LinkedIn Clone (Feeds Page)
              <span className="code">/&gt;</span>
            </p>
          </a>

          <a
            href="https://interactive-comments-section-lilac.vercel.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://interactive-comments-section-lilac.vercel.app/images/screenshot.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Interactive Comments Component
              <span className="code">/&gt;</span>
            </p>
          </a>

          <a
            href="https://newsletter-nine-ecru.vercel.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://newsletter-nine-ecru.vercel.app/assets/images/screenshot.jpg"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Newsletter App
              <span className="code">/&gt;</span>
            </p>
          </a>

          <a
            href="https://multi-step-form-khaki-ten.vercel.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://multi-step-form-khaki-ten.vercel.app/assets/images/screenshot.jpg"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Multi-step Form
              <span className="code">/&gt;</span>
            </p>
          </a>
          
          <a
            href="https://result-summary-beta.vercel.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://result-summary-beta.vercel.app/images/screenshot.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Summary Component
              <span className="code">/&gt;</span>
            </p>
          </a>

          <a
            href="https://age-calculator-pi-one.vercel.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://age-calculator-pi-one.vercel.app/images/screenshot.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Age Calculator
              <span className="code">/&gt;</span>
            </p>
          </a>
        </div>

        {/* <a
          href="https://codepen.io/FreeCodeCamp/"
          className="btn btn-show-all"
          target="_blank"
        >
          Show all<i className="fas fa-chevron-right"></i>
        </a> */}
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-section-header">
          <h2>Let's work together...</h2>
          <p>How do you take your coffee?</p>
        </div>
        <div className="contact-links">
          <a
            id="profile-link"
            href="https://github.com/inioluwabello"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://twitter.com/DavidInioluwaB"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="mailto:belloolakunledavid@gmail.com"
            className="btn contact-details"
          >
            <i className="fas fa-at"></i> Send a mail
          </a>
          <a href="tel:2347047596287" className="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
      </section>

      <footer>
        <p>© Created for David</p>
      </footer>
      {/* <Layout>
        <div className="row">
          <div className="col-md-12 col-lg-7">
            <LeftPane />
          </div>
          <div className="d-xs-none d-sm-none d-md-none d-lg-block col-lg-5">
            <RightPane />
          </div>
        </div>
      </Layout> */}
    </>
  );
};

export default Index;
