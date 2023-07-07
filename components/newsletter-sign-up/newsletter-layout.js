import styles from "./newsletter.module.css";

const NewsLetterLayout = ({ children }) => {
  return (
    <>
      <div className={`${styles.fontFaceRobotoRegular} ${styles.body}`}>
        <main>{children}</main>
        <div className="text-center" style={{ color: "#ffffff" }}>
          Challenge by{" "}
          <a
            target="_blank"
            href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a target="_blank" href="https://github.com/inioluwabello">
            David Ini
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default NewsLetterLayout;
