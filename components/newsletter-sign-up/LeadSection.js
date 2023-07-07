import styles from "./newsletter.module.css";

const LeadSection = () => {
  const rootAssets = "/project-assets/newsletter-sign-up/assets/";

  return (
    <>
      <div className="lead mt-5">
        <h1 className={styles.fontFaceRobotoBold}>Stay Updated!</h1>
      </div>
      <section
        className={`${styles.charcoalGrey} mt-3`}
        style={{ fontSize: ".75rem" }}
      >
        Join 60,000+ product managers receiving monthly updates on:
        <ul className={`${styles.list} mt-3`}>
          <li className={`${styles.listItem} mt-2`}>
            <img
              className={styles.imgInline}
              src={`${rootAssets}images/icon-list.svg`}
            />
            <span>Product discovery and building what matters</span>
          </li>
          <li className={`${styles.listItem} mt-2`}>
            <img
              className={styles.imgInline}
              src={`${rootAssets}images/icon-list.svg`}
            />
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li className={`${styles.listItem} mt-2`}>
            <img
              className={styles.imgInline}
              src={`${rootAssets}images/icon-list.svg`}
            />
            <span>And much more...</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default LeadSection;
