import NewsLetterLayout from "../components/newsletter-sign-up/newsletter-layout";
import styles from "../components/newsletter-sign-up/newsletter.module.css";
import DesktopView from "../components/newsletter-sign-up/DesktopView";
import MobileView from "../components/newsletter-sign-up/MobileView";
import DesktopSuccessView from "../components/newsletter-sign-up/DesktopSuccessView";
import MobileSuccessView from "../components/newsletter-sign-up/MobileSuccessView";
import { useEffect, useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [pageWidth, setPageWidth] = useState(770);
  const [showingSuccess, setShowingSuccess] = useState(false);

  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setPageWidth(width);
  };

  setTimeout(() => {
    handleWindowSizeChange();
  }, 500);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <NewsLetterLayout>
      <div class={styles.contentLayout}>
        {!showingSuccess && (
          <div className={styles.mainPage}>
            {pageWidth > 770 && (
              <DesktopView
                email={email}
                setEmail={setEmail}
                styles={styles}
                showingSuccess={showingSuccess}
                setShowingSuccess={setShowingSuccess}
              />
            )}
            {pageWidth <= 770 && (
              <MobileView
                email={email}
                setEmail={setEmail}
                styles={styles}
                showingSuccess={showingSuccess}
                setShowingSuccess={setShowingSuccess}
              />
            )}
          </div>
        )}

        {showingSuccess && (
          <div className={styles.successPage}>
            {pageWidth > 770 && (
              <DesktopSuccessView
                email={email}
                setEmail={setEmail}
                styles={styles}
                isMobile={pageWidth <= 770}
                setShowingSuccess={setShowingSuccess}
              />
            )}
            {pageWidth <= 770 && (
              <MobileSuccessView
                email={email}
                setEmail={setEmail}
                styles={styles}
                isMobile={pageWidth <= 770}
                setShowingSuccess={setShowingSuccess}
              />
            )}
          </div>
        )}
      </div>
    </NewsLetterLayout>
  );
};

export default NewsLetter;
