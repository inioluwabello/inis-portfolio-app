import Link from "next/link";

const Works = () => {
  return (
    <>
      <div className="projects">
        <div id="project-1">
          <Link href="https://newsletter-nine-ecru.vercel.app">Newsletter Sign Up</Link>
          <p>
            Design preview for the Frontend Mentor - "Newsletter sign-up" coding challenge
          </p>
        </div>

        <div id="project-2">
          <Link href="https://age-calculator-pi-one.vercel.app">Age Calculator</Link>
          <p>
            Design preview for the FrontEnd Mentor Age Calculator coding challenge
          </p>
        </div>
      </div>
    </>
  );
};

export default Works;
