import React from "react";
import styles from "./Comments.module.css";

const Comments = () => {
  return (
    <div className={styles.CommentContainer}>
      <div className={styles.registrationForm}>
        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <div className={styles.formTitle}>
              <h4>Leave a Comment </h4>
            </div>
            <div className={styles.textForm}>
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
                  <input type="text" />
                </div>

                <div className={styles.commentArea}>
                  <label>Comment</label>
                  <input type="text" />
                </div>
                <div className={styles.radioContainer}>
                  <label>Want To Score It?</label>
                  <div>
                    <label className={styles.labelContainer}>
                      Good
                      <input type="radio" defaultChecked />
                    </label>

                    <label className={styles.labelContainer}>
                      Great
                      <input type="radio" />
                    </label>

                    <label className={styles.labelContainer}>
                      Perfect
                      <input type="radio" />
                    </label>
                  </div>
                </div>
                <div className={styles.radioContainer}>
                  <label>Why?</label>
                  <div>
                    <select className={styles.dropDown}>
                      <option value="1" name="radio">
                        Photography Technique
                      </option>
                      <option value="2" name="radio">
                        My Favorite Activity
                      </option>
                      <option value="3" name="radio">
                        Don't Know, Just Like It!
                      </option>
                    </select>
                  </div>
                </div>
                <div className={styles.email}>
                  <a href="/SignUp">Submit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
