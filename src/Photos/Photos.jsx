import React from "react";
import blogs from "../data/blogs.json";
import PhotoList from "../PhotoList/PhotoList";

const Photos = () => {
  return (
    <div>
      <div>
        <h1>The photos page</h1>
      </div>
      <div className="PhotoList">
        <PhotoList blogs={Object.values(blogs)} categoryId="*" />
      </div>
    </div>
  );
};

export default Photos;
