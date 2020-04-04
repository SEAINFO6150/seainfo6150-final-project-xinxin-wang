import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.errorBg}>
      <h1>Oops! </h1>
      <p>Get Lost In The Forest?</p>
      <a href="/">Go Home</a>
    </div>
  );
};

export default Error;
