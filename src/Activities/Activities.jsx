import React from "react";
import blogs from "../data/blogs.json";
import PhotoList from "../PhotoList/PhotoList";
import styles from "./Activities.module.css";

const Activities = (props) => {
  return (
    <div>
      <div className={styles.categoryContainer}>
        <div className={styles.tabcontentSelected}>
          <h1>Hunting</h1>
        </div>

        <div className={styles.tabcontent}>
          <h1>Fishing</h1>
        </div>

        <div className={styles.tabcontent}>
          <h1>Kayaking</h1>
        </div>

        <div className={styles.tabcontent}>
          <h1>Hiking</h1>
        </div>
        <div className={styles.tabcontent}>
          <h1>Skiing</h1>
        </div>

        <div className={styles.tabcontent}>
          <h1>Cycling</h1>
        </div>
      </div>
      <div>
        <div className={styles.PhotoList}>
          <PhotoList
            blogs={Object.values(blogs)}
            categoryId={props.categoryId}
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
