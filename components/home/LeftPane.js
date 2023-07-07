import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

const LeftPane = ({}) => {
  return (
    <div className="left-content">
      <div style={{ width: "70%" }}>
        <h1 className="mt-5">
          <div>
            Hi! I Am, <div className="dev">Verified</div>
          </div>
          <div>Inioluwa Bello</div>
        </h1>
        <p style={{ fontWeight: "500" }}>
          Designing web and mobile apps for over <strong>5 years</strong> as a
          software developer
        </p>
      </div>

      {/* Hire Me */}
      <div className="hire mt-5">
        <div className="row">
          <div className="col">
            <a className="home-btns hire-me">Hire Me</a>
          </div>
          {/* <div className="col"></div>
          <div className="col d-xs-none d-sm-none d-md-block">
            <img style={{ width: "100px" }} src="/images/design-pic.jpg" />
          </div> */}
        </div>
      </div>

      {/* Projects */}
      <div className="f-projects mt-3">
        <div className="text-right home-btns projects">
          Featured Projects{" "}
          <FontAwesomeIcon icon={faProjectDiagram} width={12} />
        </div>
        <hr style={{ marginTop: "0" }} />

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-title">LinkedIn Clone</div>
              <div className="card-content">
                <div className="project-img">
                  <img src="/images/projects/li.jpg" alt="LI" />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-title">EShop Checkout</div>
              <div className="card-content">
                <div className="project-img">
                  <img src="/images/projects/li.jpg" alt="LI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
