import React from "react";
import styles from "./Comments.module.css";

const Comments = () => {
  return (
    <div className={styles.CommentContainer}>
      {/* <div className="row">
        <h1>Add New Comment</h1>
        <div className={styles.comment}>
          <input type="text" placeholder="Please write your comment here!" />
        </div>
        <div className={styles.commentOther}>
          <input type="text" placeholder="Your Nick Name" />
        </div>
        <div className={styles.commentOther}>
          <input type="text" placeholder="E-mail" />
        </div>
        <div className={styles.commentOther}>
          <button>Sumbit</button>
        </div>
      </div> */}
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
