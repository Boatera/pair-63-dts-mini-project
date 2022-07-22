import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDfQk6P0NFbxsF5ks-Qr0XpbMnMv8oMw4w",
  authDomain: "watchnime-dts-pair-23.firebaseapp.com",
  projectId: "watchnime-dts-pair-23",
  storageBucket: "watchnime-dts-pair-23.appspot.com",
  messagingSenderId: "1087988982908",
  appId: "1:1087988982908:web:55e2193543f4c85210d5f9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup
const registerWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Signup berhasil");
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Login
const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Login berhasil");
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Logout
const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

// Reset Password
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Reset Password berhasil dikirimkan");
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  resetPassword,
  logout,
};
