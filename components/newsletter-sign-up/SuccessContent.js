import { useState } from "react";

const SuccessContent = ({
  styles,
  email,
  setEmail,
  isMobile,
  setShowingSuccess,
}) => {
  const rootAssets = "/project-assets/newsletter-sign-up/assets/";
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={`p-3 ${isMobile ? "p-5" : ""}`}>
      <img
        className={`${isMobile ? styles.mobileSpacing1 : ""}`}
        style={{ width: "40px" }}
        src={`${rootAssets}images/icon-success.svg`}
      />

      <h1 className={`${styles.fontFaceRobotoBold} mt-4`}>
        Thanks for subscribing!
      </h1>
      <p className={styles.smText}>
        A confirmation email has been sent to <strong>{email}.</strong> Please
        open it and click the button inside to confirm your subscription
      </p>

      <div className={`${isMobile ? "relative" : ""}`}>
        <div className={`${isMobile ? styles.mobileSpacing2 : ""}`}>
          <div
            className={`mt-5 ${styles.shadow} ${
              isHovering ? styles.shadowActive : ""
            }`}
            style={{ top: "1rem" }}
          ></div>
          <div className="relative">
            <button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => {
                setShowingSuccess(false);
                setEmail("");
              }}
              style={{ position: "absolute", top: "-2rem" }}
              className={`${styles.formButton} ${
                isHovering ? styles.formButtonActive : ""
              }`}
            >
              Dismiss message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessContent;
