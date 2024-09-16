// import React from "react";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "./firebase";

// function Login() {
//   const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       console.error("Error signing in with Google:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <button onClick={signInWithGoogle}>Sign in with Google</button>
//     </div>
//   );
// }

// export default Login;

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDE9d475NdybSHeSbWxwLHMJmXVDGC7lSk",
//   authDomain: "ai-recipe-generator-5b9d2.firebaseapp.com",
//   projectId: "ai-recipe-generator-5b9d2",
//   storageBucket: "ai-recipe-generator-5b9d2.appspot.com",
//   messagingSenderId: "150782837396",
//   appId: "1:150782837396:web:520fa971024105b8a8aa81",
//   measurementId: "G-2D560VJ0NT",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDE9d475NdybSHeSbWxwLHMJmXVDGC7lSk",
  authDomain: "ai-recipe-generator-5b9d2.firebaseapp.com",
  projectId: "ai-recipe-generator-5b9d2",
  storageBucket: "ai-recipe-generator-5b9d2.appspot.com",
  messagingSenderId: "150782837396",
  appId: "1:150782837396:web:520fa971024105b8a8aa81",
  measurementId: "G-2D560VJ0NT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Function to sign up a new user
export const signup = (name, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user.updateProfile({
        displayName: name,
      });
    }
  );
};

// Function to sign in an existing user
export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
