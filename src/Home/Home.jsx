import React from "react";
import blogs from "../data/blogs.json";
import BlogList from "../BlogList/BlogList";
import PhotoList from "../PhotoList/PhotoList";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.jumbotron}>
          <div className={styles.jumbotronText}>
            <h2>Welcome to Adventures</h2>
            <p>We will provide you amazing wild stories, beautiful images!</p>
          </div>
        </div>
        <div className={styles.categoryContainer}>
          <h1>Adventure Category</h1>
          <div className={styles.aContainer}>
            <div className={styles.imageBox}>
              <a href="/activities/hunting">
                <img
                  src="https://images.unsplash.com/photo-1568282344004-be2ab24a5c35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  alt="hunting"
                />
              </a>
              <span>Hunting</span>
            </div>
            <div className={styles.imageBox}>
              <a href="/activities/fishing">
                <img
                  src="https://images.unsplash.com/photo-1545450660-3378a7f3a364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  alt="fishing"
                />
              </a>
              <span>Fishing</span>
            </div>
            <div className={styles.imageBox}>
              <a href="/activities/kayaking">
                <img
                  src="https://images.unsplash.com/photo-1450500392544-c2cb0fd6e3b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80"
                  alt="kayaking"
                />
              </a>
              <span>Kayaking</span>
            </div>
            <div className={styles.imageBox}>
              <a href="/activities/hiking">
                <img
                  src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                  alt="hiking"
                />
              </a>
              <span>Hiking</span>
            </div>
            <div className={styles.imageBox}>
              <a href="/activities/skiing">
                <img
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  alt="skiing"
                />
              </a>
              <span>Skiing</span>
            </div>
            <div className={styles.imageBox}>
              <a href="/activities/cycling">
                <img
                  src="https://images.unsplash.com/photo-1516710575005-c3af49cd693d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                  alt="cycling"
                />
              </a>
              <span>Cycling</span>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <h1>Latest Blogs</h1>
          <div className="BlogList">
            <BlogList blogs={Object.values(blogs)} categoryId="*" />
          </div>
        </div>
        <br className={styles.br} />
        <div className={styles.container}>
          <h1>Most viewed photos</h1>
          <div className="PhotoList">
            <PhotoList blogs={Object.values(blogs)} categoryId="*" />
          </div>
        </div>
      </div>
      <br className={styles.br} />
    </div>
  );
};

export default Home;
