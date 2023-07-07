import SuccessContent from "./SuccessContent";

const MobileSuccessView = ({ styles, email, setEmail, isMobile, setShowingSuccess }) => {
  return (
    <div className={`${styles.mobileContentSuccess} ${styles.mobileContent}`}>
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

export default MobileSuccessView;
