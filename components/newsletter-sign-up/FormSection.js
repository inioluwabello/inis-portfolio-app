import { useState } from "react";

const FormSection = ({styles, email, setEmail, setShowingSuccess}) => {
  const [emailError, setEmailError] = useState(false);
  const handleInput = (e) => {
    setEmail(e.target.value);
    setEmailError(!validateEmail(e.target.value));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setShowingSuccess(true);
  };

  return (
    <form className={`${styles.form} mt-5`} onSubmit={handleSubmitForm}>
      <div className="space-between">
        <label className={`${styles.emailLabel}`} htmlFor="email">
          Email address
        </label>
        {emailError && (
          <label className={`${styles.errorMessage}`} htmlFor="email">
            Valid email required
          </label>
        )}
      </div>
      <input
        onChange={handleInput}
        className={`${styles.emailInput} ${
          emailError ? styles.emailError : ""
        }`}
        type="email"
        value={email}
        placeholder="email@company.com"
      />

      <div
        className={`mt-5 ${styles.shadow} ${
          !emailError && email.length !== 0 ? styles.shadowActive : ""
        }`}
      ></div>
      <div className="relative">
        <button
          type="submit"
          style={{ position: "absolute", top: "-3rem" }}
          className={`${styles.formButton} ${
            !emailError && email.length !== 0 ? styles.formButtonActive : ""
          }`}
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </form>
  );
};

const validateEmail = (email) => {
  const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexPattern.test(email);
};

export default FormSection;
