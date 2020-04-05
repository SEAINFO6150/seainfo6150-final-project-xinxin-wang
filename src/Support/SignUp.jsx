import React from "react";
import styles from "./SignUp.module.css";

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
              <form className={styles.textForm}>
                <div className={styles.userNameRow}>
                  <div className={styles.userNameLeftCol}>
                    <label>First Name</label>
                    <input type="text" />
                  </div>
                  <div className={styles.userNameRightCol}>
                    <label>Last Name</label>
                    <input type="text" />
                  </div>
                  <div className={styles.email}>
                    <label>Email Address</label>
                    <input type="email" required />
                  </div>
                  <div className={styles.email}>
                    <label>Username</label>
                    <input
                      type="text"
                      required
                      pattern="[a-z]{5,12}"
                      title="5 to 12 lowercase letters"
                    />
                  </div>
                  <div className={styles.email}>
                    <label>Password</label>
                    <input type="text" required />
                  </div>
                  <div className={styles.email}>
                    {/* <a href="/SignUp">Join</a> */}
                    <button>Join</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
