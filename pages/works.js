import Link from "next/link";

const Works = () => {
  return (
    <>
      <div className="projects p-3">
        <div id="project-0">
          <Link href="https://linkedin-two-chi.vercel.app">LinkedIn Clone</Link>
          <p>A clone of the LinkeIn Feeds page</p>
        </div>

        <div id="project-1">
          <Link href="https://newsletter-nine-ecru.vercel.app">
            Newsletter Sign Up
          </Link>
          <p>
            Design preview for the Frontend Mentor - "Newsletter sign-up" coding
            challenge
          </p>
        </div>

        <div id="project-2">
          <Link href="https://age-calculator-pi-one.vercel.app">
            Age Calculator
          </Link>
          <p>
            Design preview for the FrontEnd Mentor Age Calculator coding
            challenge
          </p>
        </div>

        <div id="project-3">
          <Link href="https://result-summary-beta.vercel.app">
            Result Summary
          </Link>
          <p>
            Design preview for the FrontEnd Mentor Result Preview coding challenge
          </p>
        </div>
      </div>
    </>
  );
};

export default Works;
