import LeadSection from "./LeadSection";
import FormSection from "./FormSection";
import PageIllustrationMobile from "./PageIllustrationMobile";

const MobileView = ({ styles, email, setEmail, setShowingSuccess }) => {

  return (
    <div className={styles.mobileContent}>
      <PageIllustrationMobile />

      <div style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
        <LeadSection />
        <FormSection
          styles={styles}
          email={email}
          setEmail={setEmail}
          setShowingSuccess={setShowingSuccess}
        />
      </div>
    </div>
  );
};

export default MobileView;
