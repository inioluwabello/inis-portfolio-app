import Layout from "../components/layout";
import Heading from "../components/heading";
const Index = ({}) => {
  return (
    <>
      <Heading title={"New App"} />
      <Layout>
        <div className="border-top-1">
          <div className="row">
            <div className="col"></div>
            <div className="col d-sm-none d-md-block">
              <div className="right-content">
                <div className="intro-text">
                  <p>
                    I build web apps using <strong>Javascript</strong> <br />
                    in <strong>Angular</strong>, <strong>React</strong>,{" "}
                    <strong>Next.js</strong>, <strong>Node.js</strong>
                  </p>
                </div>

                <div style={{ marginTop: "-6rem"}}>
                <div className="relative">
                  <div className="absolute" style={{ top: "10rem", left: "40%" }}>
                    <img className="profile-img" src="/images/ini.jpg" />
                  </div>
                </div>

                <div className="relative">
                  <div
                    className="absolute"
                    style={{ top: "13rem", left: "8rem" }}
                  >
                    <div className="app-icon" style={{ color: "#087ea4" }}>
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="-10.5 -9.45 21 18.9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-sm mr-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
                      >
                        <circle
                          cx="0"
                          cy="0"
                          r="2"
                          fill="currentColor"
                        ></circle>
                        <g stroke="currentColor" stroke-width="1" fill="none">
                          <ellipse rx="10" ry="4.5"></ellipse>
                          <ellipse
                            rx="10"
                            ry="4.5"
                            transform="rotate(60)"
                          ></ellipse>
                          <ellipse
                            rx="10"
                            ry="4.5"
                            transform="rotate(120)"
                          ></ellipse>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className="absolute"
                    style={{ top: "13rem", left: "23rem" }}
                  >
                    <div className="app-icon">
                      <img src="/images/angular.png" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className="absolute"
                    style={{ top: "19rem", left: "19rem" }}
                  >
                    <div className="app-icon">
                      <svg
                        aria-label="Vercel logomark"
                        role="img"
                        viewBox="0 0 74 64"
                      >
                        <path
                          d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                          fill="var(--geist-foreground)"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div
                    className="absolute"
                    style={{ top: "19rem", left: "12rem" }}
                  >
                    <div className="app-icon">
                      <img src="/images/node.jpg" />
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
