import styles from "./newsletter.module.css";

const NewsLetterLayout = ({ children }) => {
  return (
    <>
      <div className={`${styles.fontFaceRobotoRegular} ${styles.body}`}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default NewsLetterLayout;
