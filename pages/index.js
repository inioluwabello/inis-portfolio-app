// import Layout from "../components/layout";
import Heading from "../components/heading";
// import LeftPane from "../components/home/LeftPane";
// import RightPane from "../components/home/RightPane";
const Index = ({}) => {
  return (
    <>
      <Heading title={"David's Portfolio"} />
      <nav id="navbar" class="nav">
        <ul class="nav-list">
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

      <section id="welcome-section" class="welcome-section">
        <h1>Hey, I am David</h1>
        <p>I'm a software developer...</p>
      </section>

      <section id="projects" class="projects-section">
        <h2 class="projects-section-header">These are some of my projects</h2>

        <div class="projects-grid">
          <a
            href="https://rock-paper-scissors-lizard-spock-gilt.vercel.app"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://rock-paper-scissors-lizard-spock-gilt.vercel.app/images/screenshot.jpg"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Rock Paper Scissor Lizard Spock
              <span class="code">/&gt;</span>
            </p>
          </a>

          <a
            href="https://newsletter-nine-ecru.vercel.app"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://newsletter-nine-ecru.vercel.app/assets/images/screenshot.jpg"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Newsletter App
              <span class="code">/&gt;</span>
            </p>
          </a>

          <a
            href="https://multi-step-form-khaki-ten.vercel.app"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://multi-step-form-khaki-ten.vercel.app/assets/images/screenshot.jpg"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Multi-step Form
              <span class="code">/&gt;</span>
            </p>
          </a>
          <a
            href="https://linkedin-two-chi.vercel.app/"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://placehold.co/600x400"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              LinkedIn Clone (Feeds Page)
              <span class="code">/&gt;</span>
            </p>
          </a>

          <a
            href="https://result-summary-beta.vercel.app"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://result-summary-beta.vercel.app/images/screenshot.png"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Wikipedia Viewer
              <span class="code">/&gt;</span>
            </p>
          </a>

          <a
            href="https://age-calculator-pi-one.vercel.app"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://age-calculator-pi-one.vercel.app/images/screenshot.png"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Tic Tac Toe Game
              <span class="code">/&gt;</span>
            </p>
          </a>
        </div>

        <a
          href="https://codepen.io/FreeCodeCamp/"
          class="btn btn-show-all"
          target="_blank"
        >
          Show all<i class="fas fa-chevron-right"></i>
        </a>
      </section>

      <section id="contact" class="contact-section">
        <div class="contact-section-header">
          <h2>Let's work together...</h2>
          <p>How do you take your coffee?</p>
        </div>
        <div class="contact-links">
          <a
            id="profile-link"
            href="https://github.com/inioluwabello"
            target="_blank"
            class="btn contact-details"
          >
            <i class="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://twitter.com/DavidInioluwaB"
            target="_blank"
            class="btn contact-details"
          >
            <i class="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="mailto:belloolakunledavid@gmail.com"
            class="btn contact-details"
          >
            <i class="fas fa-at"></i> Send a mail
          </a>
          <a href="tel:2347047596287" class="btn contact-details">
            <i class="fas fa-mobile-alt"></i> Call me
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
