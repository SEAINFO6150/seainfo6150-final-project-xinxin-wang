import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.textContainer}>
        <p className={styles.sayHi}>
          Hey there! My name is Stephen (you can call me Steve). I’m a adventure
          travel blogger, hunter, photographer.
        </p>
        <p>
          Welcome to my travel blog! This is where I share{" "}
          <a href="/blogs">entertaining stories</a>, budget travel tips, fun
          YouTube videos, inspiring travel <a href="/photos">photography</a>,
          and plenty of outdoor adventures with you from my travels around the
          world.
        </p>
        <p className={styles.heavyWeight}>
          It’s a place for people like you who are looking for daily inspiration
          & motivation to live a life full of adventure.
        </p>
        <p className={styles.sayHi}>
          Or just some helpful travel tips for planning your next vacation.
        </p>
        <p>
          I want to show you how to travel the world, to seek experiences over
          possessions, and open your mind to new possibilities.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.column1}>
          <img
            src="https://images.unsplash.com/photo-1580146209245-2687fa759323?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            alt="leftup"
          />
          <img
            src="https://images.unsplash.com/photo-1552340745-89c5073640ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            alt="leftdown"
          />
        </div>
        <div className={styles.column2}>
          <img
            src="https://images.unsplash.com/photo-1555377707-cf83d17f50fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            alt="rightup"
          />
          <img
            src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            alt="rightdown"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
