import React, { Component } from "react";
import styles from "./SignupForm.module.css";

export default class SignupForm extends Component {
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
      <div>
        {this.state.submittedForm.get("myText")}: Congratulations! Your Signup
        Is Successful!{" "}
      </div>
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
          <div className={styles.email}>
            <label>Username</label>
            <input
              type="text"
              required
              pattern="[a-z]{5,12}"
              title="5 to 12 lowercase letters"
              name="myText"
            />
          </div>
          <div className={styles.email}>
            <label>Password</label>
            <input type="password" required />
          </div>
          <div className={styles.email}>
            <button>Join</button>
          </div>
        </div>
      </form>
    );
  }
}
