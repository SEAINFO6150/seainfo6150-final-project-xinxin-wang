import React from "react";
import styles from "./BlogImage.module.css";

const BlogImage = ({ blog }) => {
  return (
    <div>
      <img className={styles.img} src={blog.image._url} alt={blog.title} />
    </div>
  );
};

export default BlogImage;
