import React from "react";
import blogs from "../data/blogs.json";
import PhotoList from "../PhotoList/PhotoList";

const Photos = () => {
  return (
    <div>
      <div>
        <h1>Welcome To The Photos Page</h1>
      </div>
      <div className="PhotoList">
        <PhotoList blogs={Object.values(blogs)} categoryId="*" />
      </div>
    </div>
  );
};

export default Photos;
