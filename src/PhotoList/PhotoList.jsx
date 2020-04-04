import React from "react";
import PropTypes from "prop-types";
import PhotoListItem from "./PhotoListItem";
import styles from "./PhotoList.module.css";

const PhotoList = (props) => {
  return (
    <div className={styles.container}>
      {props.blogs.map((blog) => {
        if (props.categoryId === "*") {
          return <PhotoListItem blog={blog} key={blog.title} />;
        }
        if (blog.category === props.categoryId) {
          return <PhotoListItem blog={blog} key={blog.title} />;
        }
        return "";
      })}
    </div>
  );
};

PhotoList.propTypes = {
  blogs: PropTypes.array.isRequired,
  categoryId: PropTypes.string.isRequired,
};
export default PhotoList;
