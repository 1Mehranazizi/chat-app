import React from "react";

//firebase
import firebase from "firebase/app";
import { auth } from "../firebase";

//icons
import google from "../assets/icon/google.svg";

//styles
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Wellcom To Magram</h2>
        <div
          className={styles.loginGoogle}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src={google} alt="google" />
          Sign in with google
        </div>
      </div>
    </div>
  );
};

export default Login;
