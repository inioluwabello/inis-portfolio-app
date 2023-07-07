import Link from "next/link";

const Works = () => {
  return (
    <>
      <div className="projects">
        <div id="project-1">
          <Link href="/newsletter-sign-up">Newsletter Sign Up</Link>
          <p>
            Design preview for the Newsletter sign-up form with success message
            coding challenge
          </p>
        </div>
      </div>
    </>
  );
};

export default Works;
