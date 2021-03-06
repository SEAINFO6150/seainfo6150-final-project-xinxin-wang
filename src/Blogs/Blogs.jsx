import React from "react";
import blogs from "../data/blogs.json";
import BlogList from "../BlogList/BlogList";

const Blogs = () => {
  return (
    <div>
      <div>
        <h1>Welcome To The Blogs Page</h1>
      </div>
      <div className="BlogList">
        <BlogList blogs={Object.values(blogs)} categoryId="*" />
      </div>
    </div>
  );
};

export default Blogs;
