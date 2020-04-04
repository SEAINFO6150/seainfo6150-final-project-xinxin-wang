import React from "react";
import styles from "./BlogListItem.module.css";
import BlogImage from "../Components/BlogImage";

const BlogListItem = (props) => {
  const link = "/detailBlog/" + props.blog.blogId;
  return (
    <div className={styles.blogListItemContainer}>
      <div className={styles.blogImg}>
        <BlogImage blog={props.blog} />
      </div>
      <div className={styles.title}>
        <strong>
          <a href={link}>{props.blog.title}</a>
        </strong>
        <p>{props.blog.shortText}</p>
      </div>
    </div>
  );
};

export default BlogListItem;
