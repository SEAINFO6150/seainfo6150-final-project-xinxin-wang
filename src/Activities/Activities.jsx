import React from "react";
import blogs from "../data/blogs.json";
import PhotoList from "../PhotoList/PhotoList";
import styles from "./Activities.module.css";

const Activities = (props) => {
  return (
    <div>
      <div className={styles.categoryContainer}>
        <div className={styles.tabcontentSelected}>
          <a href="/activities/hunting">
            <h1>Hunting</h1>
          </a>
        </div>

        <div className={styles.tabcontent}>
          <a href="/activities/fishing">
            <h1>Fishing</h1>
          </a>
        </div>

        <div className={styles.tabcontent}>
          <a href="/activities/kayaking">
            <h1>Kayaking</h1>
          </a>
        </div>

        <div className={styles.tabcontent}>
          <a href="/activities/hiking">
            <h1>Hiking</h1>
          </a>
        </div>
        <div className={styles.tabcontent}>
          <a href="/activities/skiing">
            <h1>Skiing</h1>
          </a>
        </div>

        <div className={styles.tabcontent}>
          <a href="/activities/cycling">
            <h1>Cycling</h1>
          </a>
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
