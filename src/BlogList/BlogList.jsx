import React from "react";
import PropTypes from "prop-types";
import BlogListItem from "./BlogListItem";
import styles from "./BlogList.module.css";

const BlogList = (props) => {
  return (
    <div className={styles.container}>
      {props.blogs.map((blog) => {
        if (props.categoryId === "*") {
          return <BlogListItem blog={blog} key={blog.title} />;
        }
        if (blog.category === props.categoryId) {
          return <BlogListItem blog={blog} key={blog.title} />;
        }
        return "";
      })}
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  categoryId: PropTypes.string.isRequired,
};
export default BlogList;
