import React from "react";
import styles from "./Comments.module.css";
import Form from "../Form/Form.jsx";
const Comments = () => {
  return (
    <div className={styles.CommentContainer}>
      <div className={styles.registrationForm}>
        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <div className={styles.formTitle}>
              <h4>Leave a Comment </h4>
            </div>
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
