import React from "react";
import blogs from "../data/blogs.json";
import Comments from "../Components/Comments.jsx";
import styles from "./DetailPhoto.module.css";

const DetailPhoto = (props) => {
  const link = "/detailBlog/" + props.blogId;
  console.log(link);
  return (
    <div className={styles.detailPhotoContainer}>
      <h1>{blogs[props.blogId].title}</h1>
      <img src={blogs[props.blogId].image._url} alt="" />
      <div className={styles.authorGroup}>
        <h2 className={styles.author}>
          {blogs[props.blogId].author} - {blogs[props.blogId].pubYear}
        </h2>
        <a className={styles.blogAddress} href={link}>
          <h1>{blogs[props.blogId].title}</h1>
        </a>
      </div>
      <Comments />
    </div>
  );
};

export default DetailPhoto;
