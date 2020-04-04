import React from "react";
import blogs from "../data/blogs.json";
import Comments from "../Components/Comments.jsx";
import styles from "./DetailBlog.module.css";

const DetailBlog = (props) => {
  const link = "/detailPhoto/" + props.blogId;
  return (
    <div className={styles.detailBlogContainer}>
      <h1>{blogs[props.blogId].title}</h1>
      <a className={styles.detailA} href={link}>
        <img src={blogs[props.blogId].image._url} alt="" />
      </a>
      <p>{blogs[props.blogId].text}</p>
      <h3>
        {blogs[props.blogId].author} - {blogs[props.blogId].pubYear}
      </h3>

      <Comments />
    </div>
  );
};

export default DetailBlog;
