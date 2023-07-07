import SuccessContent from "./SuccessContent";

const DesktopSuccessView = ({ styles, email, setEmail, isMobile, setShowingSuccess }) => {
  return (
    <div className={`${styles.contentSuccess} ${styles.content}`}>
      <SuccessContent
        email={email}
        setEmail={setEmail}
        styles={styles}
        isMobile={isMobile}
        setShowingSuccess={setShowingSuccess}
      />
    </div>
  );
};

export default DesktopSuccessView;
