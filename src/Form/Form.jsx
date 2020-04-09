import React, { Component } from "react";
import styles from "./Form.module.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedForm: null,
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    this.setState({ submittedForm: data });
  };

  render() {
    return this.state.submittedForm ? (
      <div>Your Comment is : {this.state.submittedForm.get("myText")}</div>
    ) : (
      <form className={styles.textForm} onSubmit={this.onSubmit}>
        <div className={styles.userNameRow}>
          <div className={styles.userNameLeftCol}>
            <label>First Name</label>
            <input
              type="text"
              required
              pattern="[A-Za-z]{1,20}"
              title="1 to 20 letters"
            />
          </div>
          <div className={styles.userNameRightCol}>
            <label>Last Name</label>
            <input
              type="text"
              required
              pattern="[A-Za-z]{1,20}"
              title="1 to 20 letters"
            />
          </div>
          <div className={styles.email}>
            <label>Email Address</label>
            <input type="email" required />
          </div>

          <div className={styles.commentArea}>
            <label>Comment</label>
            <br></br>

            <textarea cols="50" rows="10" name="myText"></textarea>
          </div>
          <div className={styles.radioContainer}>
            <label>Want To Score It?</label>
            <div>
              <label className={styles.labelContainer}>
                Good
                <input type="radio" defaultChecked />
              </label>

              <label className={styles.labelContainer}>
                Great
                <input type="radio" />
              </label>

              <label className={styles.labelContainer}>
                Perfect
                <input type="radio" />
              </label>
            </div>
          </div>
          <div className={styles.radioContainer}>
            <label>Why?</label>
            <div>
              <select className={styles.dropDown}>
                <option value="1" name="radio">
                  Photography Technique
                </option>
                <option value="2" name="radio">
                  My Favorite Activity
                </option>
                <option value="3" name="radio">
                  Don't Know, Just Like It!
                </option>
              </select>
            </div>
            <h5> </h5>
            <label>Whold You Recommend This Website To Your Friend?</label>

            <div>
              <select className={styles.dropDown}>
                <option value="1" name="radio">
                  Yes!
                </option>
                <option value="2" name="radio">
                  Maybe!
                </option>
                <option value="3" name="radio">
                  No!
                </option>
              </select>
            </div>
          </div>
          <div className={styles.email}>
            <button>Submit</button>
          </div>
        </div>
      </form>
    );
  }
}
