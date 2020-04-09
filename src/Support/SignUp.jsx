import React from "react";
import styles from "./SignUp.module.css";
import SignupForm from "../SighupForm/SignupForm.jsx";

const SignUp = () => {
  return (
    <div className={styles.registrationContainer}>
      <div className={styles.leftPanel}>
        <div className={styles.registration_contant}>
          <div>
            <p>.</p>
          </div>
          <div>
            <h1>Entertaining Starts Here</h1>
            <h2>
              Access to amazing blogs and photos you can’t find anywhere else
            </h2>
          </div>
          <div>
            <p>Photoed two years ago by David</p>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.registrationForm}>
          <div className={styles.formRow}>
            <div className={styles.formCol}>
              <div className={styles.formTitle}>
                <h4>Join Us Now</h4>
              </div>

              <SignupForm></SignupForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
